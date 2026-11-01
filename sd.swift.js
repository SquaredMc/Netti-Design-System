// Style Dictionary format `netti/swift`: the tokens as Swift constants for the native iOS app.
//
// Output is plain Swift with no imports, so a SwiftPM test target can compile and check it on
// macOS. Every token lands in exactly one group below; a token that matches no group stops the
// build, so a new token can't silently go missing from the Swift side.
//
// Light-theme role tokens come from the dictionary itself; their dark values come from
// `options.darkTokens` (the `theme/dark.json` tokens, resolved by a second dictionary).
// Semantic colours likewise get their dark-mode values from `options.appearanceDarkTokens`
// (`appearance/dark.json`, resolved by a third).

const GROUPS = [
  { name: 'PrimitiveColor', file: 'color.json', kind: 'color', drop: 1,
    doc: 'Colour primitives (color.json). Components use SemanticColor and ThemeColor, never these.' },
  { name: 'SemanticColor', file: 'semantic.color.json', kind: 'appearance', drop: 1,
    doc: 'Colours by role (semantic.color.json), with their dark-mode values (appearance/dark.json).\n/// Each one aliases a primitive in each appearance.' },
  { name: 'ThemeColor', file: 'theme/light.json', kind: 'themed', drop: 1,
    doc: 'Role colours with a value per theme (theme/light.json and theme/dark.json). Dark is the\n/// `[data-theme="dark"]` theme: the navy Salary and Extra Income cards.' },
  { name: 'Space', file: 'spacing.json', kind: 'dimension', drop: 1, digitPrefix: 's',
    doc: 'The spacing scale (spacing.json), in points. `Space.s16` is 16 pt.' },
  { name: 'SemanticSpacing', file: 'semantic.spacing.json', kind: 'dimension', drop: 0,
    doc: 'Spacing and radii by role (semantic.spacing.json), in points.' },
  { name: 'Radius', file: 'radius.json', kind: 'dimension', drop: 1,
    doc: 'Corner radii (radius.json), in points.' },
  { name: 'Shadow', file: 'shadow.json', type: 'shadow', kind: 'shadow', drop: 1,
    doc: 'Shadows (shadow.json), one or more layers each.' },
  { name: 'Elevate', file: 'shadow.json', type: 'color', kind: 'color', drop: 1, digitPrefix: 'level',
    doc: 'Interaction overlays (shadow.json `elevate`).' },
  { name: 'FontFamily', path: ['font', 'family'], kind: 'fontFamily', drop: 2,
    doc: 'Font families (typography.json), in fallback order.' },
  { name: 'FontWeight', path: ['font', 'weight'], kind: 'fontWeight', drop: 2,
    doc: 'Font weights (typography.json), CSS numeric weights.' },
  { name: 'FontSize', path: ['font', 'size'], kind: 'dimension', drop: 2,
    doc: 'Font sizes (typography.json), in points.' },
  { name: 'LineHeight', path: ['font', 'lineHeight'], kind: 'dimension', drop: 2,
    doc: 'Line heights (typography.json), in points.' },
  { name: 'TypeStyle', path: ['textStyle'], kind: 'typography', drop: 1,
    doc: 'Text styles (typography.json `textStyle`).' },
];

const VALUE_TYPE = {
  color: 'TokenColor',
  themed: 'ThemedTokenColor',
  appearance: 'AppearanceTokenColor',
  dimension: 'Double',
  shadow: '[TokenShadowLayer]',
  fontFamily: '[String]',
  fontWeight: 'Int',
  typography: 'TokenTypeStyle',
};

const filePath = (token) => String(token.filePath).replace(/\\/g, '/');

function groupFor(token) {
  const matches = GROUPS.filter((g) => {
    if (g.file && !filePath(token).endsWith(`src/tokens/${g.file}`)) return false;
    if (g.type && token.$type !== g.type) return false;
    if (g.path && !g.path.every((part, i) => token.path[i] === part)) return false;
    return true;
  });
  if (matches.length !== 1) {
    throw new Error(`netti/swift: ${token.path.join('.')} matches ${matches.length} groups (${filePath(token)})`);
  }
  return matches[0];
}

function swiftName(path, group) {
  const parts = path.slice(group.drop);
  const name = parts.map((p, i) => (i === 0 ? p : p[0].toUpperCase() + p.slice(1))).join('');
  if (/^[0-9]/.test(name)) {
    if (!group.digitPrefix) throw new Error(`netti/swift: ${path.join('.')} needs a digitPrefix`);
    return group.digitPrefix + name;
  }
  if (!/^[A-Za-z][A-Za-z0-9]*$/.test(name)) throw new Error(`netti/swift: bad Swift name "${name}" for ${path.join(".")}`);
  return name;
}

function number(value) {
  if (typeof value !== 'number' || !Number.isFinite(value)) throw new Error(`netti/swift: not a number: ${value}`);
  return String(value);
}

function px(value) {
  const match = /^(-?[0-9.]+)px$/.exec(String(value));
  if (!match) throw new Error(`netti/swift: expected a px dimension, got ${value}`);
  return number(Number(match[1]));
}

function colorLiteral(value) {
  const s = String(value).trim();
  let hex;
  let opacity = 1;
  let m;
  if ((m = /^#([0-9a-fA-F]{6})$/.exec(s))) {
    hex = m[1];
  } else if ((m = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+)\s*)?\)$/.exec(s))) {
    hex = [m[1], m[2], m[3]].map((c) => Number(c).toString(16).padStart(2, '0')).join('');
    opacity = m[4] === undefined ? 1 : Number(m[4]);
  } else {
    throw new Error(`netti/swift: unsupported colour ${s}`);
  }
  const rgb = `0x${hex.toUpperCase()}`;
  return opacity === 1 ? `TokenColor(rgb: ${rgb})` : `TokenColor(rgb: ${rgb}, opacity: ${number(opacity)})`;
}

/** `{color.navy.800}` as a Swift reference, when it points at a token we emit. */
function reference(original, names) {
  const m = /^\{([^}]+)\}$/.exec(String(original));
  return m ? names.get(m[1]) : undefined;
}

function colorValue(token, names) {
  return reference(token.original.$value, names) ?? colorLiteral(token.$value);
}

function valueFor(token, group, names, darkByPath, appearanceDarkByPath) {
  switch (group.kind) {
    case 'color':
      return colorValue(token, names);
    case 'themed': {
      const dark = darkByPath.get(token.path.join('.'));
      if (!dark) throw new Error(`netti/swift: ${token.path.join('.')} has no dark value`);
      return `ThemedTokenColor(light: ${colorValue(token, names)}, dark: ${colorValue(dark, names)})`;
    }
    case 'appearance': {
      const dark = appearanceDarkByPath.get(token.path.join('.'));
      if (!dark) throw new Error(`netti/swift: ${token.path.join('.')} has no dark-mode value`);
      return `AppearanceTokenColor(light: ${colorValue(token, names)}, dark: ${colorValue(dark, names)})`;
    }
    case 'dimension':
      return px(token.$value);
    case 'shadow': {
      const layers = token.$value.map((l) =>
        `TokenShadowLayer(offsetX: ${px(l.offsetX)}, offsetY: ${px(l.offsetY)}, blur: ${px(l.blur)}, spread: ${px(l.spread)}, color: ${colorLiteral(l.color)})`);
      return `[${layers.join(', ')}]`;
    }
    case 'fontFamily':
      return `[${token.$value.map((f) => JSON.stringify(f)).join(', ')}]`;
    case 'fontWeight':
      return number(token.$value);
    case 'typography': {
      const v = token.$value;
      const o = token.original.$value;
      const ref = (key, literal) => reference(o[key], names) ?? literal;
      const known = ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'textTransform'];
      for (const key of Object.keys(v)) {
        if (!known.includes(key)) throw new Error(`netti/swift: ${token.path.join('.')} has unsupported ${key}`);
      }
      if (v.textTransform !== undefined && v.textTransform !== 'uppercase') {
        throw new Error(`netti/swift: unsupported textTransform ${v.textTransform}`);
      }
      return [
        'TokenTypeStyle(',
        `fontFamily: ${ref('fontFamily', `[${v.fontFamily.map((f) => JSON.stringify(f)).join(', ')}]`)}, `,
        `fontSize: ${ref('fontSize', px(v.fontSize))}, `,
        `fontWeight: ${ref('fontWeight', number(v.fontWeight))}, `,
        `lineHeight: ${ref('lineHeight', px(v.lineHeight))}, `,
        `letterSpacing: ${v.letterSpacing === undefined ? '0' : px(v.letterSpacing)}, `,
        `uppercase: ${v.textTransform === 'uppercase'})`,
      ].join('');
    }
    default:
      throw new Error(`netti/swift: unknown kind ${group.kind}`);
  }
}

const docLines = (text, indent) =>
  text ? String(text).split('\n').map((line) => `${indent}/// ${line}`.trimEnd()) : [];

const PREAMBLE = `/// An sRGB colour, each channel from 0 to 1.
public struct TokenColor: Hashable, Sendable {
    public let red: Double
    public let green: Double
    public let blue: Double
    public let opacity: Double

    /// \`rgb\` is 0xRRGGBB.
    public init(rgb: UInt32, opacity: Double = 1) {
        red = Double((rgb >> 16) & 0xFF) / 255
        green = Double((rgb >> 8) & 0xFF) / 255
        blue = Double(rgb & 0xFF) / 255
        self.opacity = opacity
    }
}

/// A role colour with a value per theme.
public struct ThemedTokenColor: Hashable, Sendable {
    public let light: TokenColor
    public let dark: TokenColor
}

/// A role colour with a value per system appearance: light mode and dark mode.
public struct AppearanceTokenColor: Hashable, Sendable {
    public let light: TokenColor
    public let dark: TokenColor
}

/// One layer of a shadow, in points.
public struct TokenShadowLayer: Hashable, Sendable {
    public let offsetX: Double
    public let offsetY: Double
    public let blur: Double
    public let spread: Double
    public let color: TokenColor
}

/// A text style: sizes and spacing in points, weight as a CSS numeric weight.
public struct TokenTypeStyle: Hashable, Sendable {
    public let fontFamily: [String]
    public let fontSize: Double
    public let fontWeight: Int
    public let lineHeight: Double
    public let letterSpacing: Double
    public let uppercase: Bool
}`;

export const swiftFormat = {
  name: 'netti/swift',
  format: ({ dictionary, options }) => {
    const darkByPath = new Map(
      (options.darkTokens ?? []).map((t) => [t.path.join('.'), t]),
    );
    const appearanceDarkByPath = new Map(
      (options.appearanceDarkTokens ?? []).map((t) => [t.path.join('.'), t]),
    );
    const grouped = new Map(GROUPS.map((g) => [g.name, []]));
    const names = new Map();
    for (const token of dictionary.allTokens) {
      const group = groupFor(token);
      const name = swiftName(token.path, group);
      grouped.get(group.name).push({ token, name });
      names.set(token.path.join('.'), `${group.name}.${name}`);
    }
    const themed = grouped.get('ThemeColor').map(({ token }) => token.path.join('.')).sort();
    const dark = [...darkByPath.keys()].sort();
    if (themed.join() !== dark.join()) {
      throw new Error(`netti/swift: light and dark themes differ: [${themed}] vs [${dark}]`);
    }
    const semantic = grouped.get('SemanticColor').map(({ token }) => token.path.join('.')).sort();
    const semanticDark = [...appearanceDarkByPath.keys()].sort();
    if (semantic.join() !== semanticDark.join()) {
      throw new Error(`netti/swift: semantic colours and their dark-mode values differ: [${semantic}] vs [${semanticDark}]`);
    }

    const out = [
      '// NettiTokens.swift',
      `// Generated by sd.config.js (Style Dictionary) from src/tokens/*.json, ${options.packageName} ${options.packageVersion}.`,
      '// Do not edit by hand: change the JSON and run `npm run build:tokens`.',
      '',
      PREAMBLE,
    ];
    for (const group of GROUPS) {
      const entries = grouped.get(group.name);
      if (entries.length === 0) throw new Error(`netti/swift: no tokens for ${group.name}`);
      const type = VALUE_TYPE[group.kind];
      out.push('', ...docLines(group.doc, ''), `public enum ${group.name} {`);
      for (const { token, name } of entries) {
        out.push(...docLines(token.$description, '    '));
        out.push(`    public static let ${name}: ${type} = ${valueFor(token, group, names, darkByPath, appearanceDarkByPath)}`);
      }
      out.push('', '    /// Every token in this group, by its path in the JSON.');
      out.push(`    public static let all: [(path: String, value: ${type})] = [`);
      for (const { token, name } of entries) out.push(`        (${JSON.stringify(token.path.join('.'))}, ${name}),`);
      out.push('    ]', '}');
    }
    return `${out.join('\n')}\n`;
  },
};
