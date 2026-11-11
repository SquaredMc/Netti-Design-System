// Style Dictionary format `netti/compose`: the tokens as Kotlin constants for the native Android
// app (Jetpack Compose).
//
// Output is plain Kotlin: Compose's `Color`, `Dp` and `TextUnit`, and two small data classes, so
// any Compose module can compile it. Tokens are grouped exactly as in `netti/swift` (the same
// GROUPS), so a token that matches no group, or a group with no Kotlin doc here, stops the build.
//
// Colours that change with the appearance or the theme come as sets: `SemanticColor.light` and
// `SemanticColor.dark` (semantic.color.json and appearance/dark.json), and `ThemeColor.light` and
// `ThemeColor.dark` (theme/light.json and theme/dark.json). The dark values come from
// `options.darkTokens` and `options.appearanceDarkTokens`, resolved by their own dictionaries.

import { GROUPS } from './sd.swift.js';

// What each group holds in Kotlin. `set` groups become a class with one property per colour and
// an object holding its light and dark instances.
const KIND = {
  color: { type: 'Color' },
  appearance: { type: 'Color', set: 'SemanticColorSet', modes: ['light', 'dark'] },
  themed: { type: 'Color', set: 'ThemeColorSet', modes: ['light', 'dark'] },
  dimension: { type: 'Dp' },
  shadow: { type: 'List<TokenShadowLayer>' },
  fontFamily: { type: 'List<String>' },
  fontWeight: { type: 'Int' },
  typography: { type: 'TokenTypeStyle' },
  // Durations are milliseconds and a spring's bounce is a Float, as Compose's animation APIs take
  // them. A group holding both (MotionSpring) types its `all` list as Number.
  motion: { typeOf: (token) => (token.$type === 'duration' ? 'Long' : 'Float'), mixedType: 'Number' },
};

// Font sizes and line heights scale with the system font size, so they are `sp`; every other
// dimension is `dp`.
const SP_GROUPS = new Set(['FontSize', 'LineHeight']);

const DOCS = {
  PrimitiveColor: 'Colour primitives (color.json). Components use SemanticColor and ThemeColor, never these.',
  SemanticColor: 'Colours by role (semantic.color.json), in light mode and dark mode (appearance/dark.json).\nEach one aliases a primitive in each mode.',
  ThemeColor: 'Role colours with a value per theme (theme/light.json and theme/dark.json). Dark is the\n`[data-theme="dark"]` theme: the navy Salary and Extra Income cards.',
  Space: 'The spacing scale (spacing.json). `Space.s16` is 16 dp.',
  SemanticSpacing: 'Spacing and radii by role (semantic.spacing.json).',
  Radius: 'Corner radii (radius.json).',
  Shadow: 'Shadows (shadow.json), one or more layers each.',
  Elevate: 'Interaction overlays (shadow.json `elevate`).',
  FontFamily: 'Font families (typography.json), in fallback order.',
  FontWeight: 'Font weights (typography.json), CSS numeric weights.',
  FontSize: 'Font sizes (typography.json).',
  LineHeight: 'Line heights (typography.json).',
  TypeStyle: 'Text styles (typography.json `textStyle`).',
  MotionDuration: 'How long a motion takes (motion.json), in milliseconds.',
  MotionHold: 'How long a highlight or a chip stays before it fades (motion.json), in milliseconds.',
  MotionStagger: 'The delay between one item and the next in a cascade (motion.json), in milliseconds.',
  MotionSpring: 'Springs (motion.json) in SwiftUI\'s perceptual terms, two tokens each: a duration in\nmilliseconds and a bounce from 0 to 1. For Compose\'s spring, dampingRatio = 1 − bounce and\nstiffness = (2π / duration in seconds)². Only `reward` bounces.',
};

const SET_DOCS = {
  SemanticColorSet: 'Every semantic colour in one appearance: `SemanticColor.light` or `SemanticColor.dark`.',
  ThemeColorSet: 'Every theme colour in one theme: `ThemeColor.light` or `ThemeColor.dark`.',
};

const MODE_DOCS = {
  SemanticColor: { light: 'Light mode.', dark: 'Dark mode (appearance/dark.json).' },
  ThemeColor: { light: 'The light theme (theme/light.json).', dark: 'The dark theme (theme/dark.json): the navy cards, in both appearances.' },
};

// Kotlin's hard keywords, which can't be property names.
const KEYWORDS = new Set([
  'as', 'break', 'class', 'continue', 'do', 'else', 'false', 'for', 'fun', 'if', 'in', 'interface',
  'is', 'null', 'object', 'package', 'return', 'super', 'this', 'throw', 'true', 'try', 'typealias',
  'typeof', 'val', 'var', 'when', 'while',
]);

const fail = (message) => {
  throw new Error(`netti/compose: ${message}`);
};

const filePath = (token) => String(token.filePath).replace(/\\/g, '/');

function groupFor(token) {
  const matches = GROUPS.filter((g) => {
    if (g.file && !filePath(token).endsWith(`src/tokens/${g.file}`)) return false;
    if (g.type && token.$type !== g.type) return false;
    if (g.path && !g.path.every((part, i) => token.path[i] === part)) return false;
    return true;
  });
  if (matches.length !== 1) fail(`${token.path.join('.')} matches ${matches.length} groups (${filePath(token)})`);
  return matches[0];
}

function kotlinName(path, group) {
  const parts = path.slice(group.drop);
  let name = parts.map((p, i) => (i === 0 ? p : p[0].toUpperCase() + p.slice(1))).join('');
  if (/^[0-9]/.test(name)) {
    if (!group.digitPrefix) fail(`${path.join('.')} needs a digitPrefix`);
    name = group.digitPrefix + name;
  }
  if (!/^[A-Za-z][A-Za-z0-9]*$/.test(name)) fail(`bad Kotlin name "${name}" for ${path.join('.')}`);
  if (KEYWORDS.has(name) || name === 'all') fail(`"${name}" (${path.join('.')}) can't be a Kotlin property name`);
  return name;
}

function number(value) {
  if (typeof value !== 'number' || !Number.isFinite(value)) fail(`not a number: ${value}`);
  return String(value);
}

/** `16px` as `16.dp` (or `.sp`); a negative value is parenthesised, `(-1).dp`. */
function dimension(value, unit) {
  const match = /^(-?[0-9.]+)px$/.exec(String(value));
  if (!match) fail(`expected a px dimension, got ${value}`);
  const n = number(Number(match[1]));
  return `${n.startsWith('-') ? `(${n})` : n}.${unit}`;
}

/** A duration, `100ms` or `0.1s`, as whole milliseconds. */
function milliseconds(value) {
  const match = /^([0-9.]+)(ms|s)$/.exec(String(value));
  if (!match) fail(`expected a duration in ms or s, got ${value}`);
  const n = Number(match[1]);
  const ms = match[2] === 'ms' ? n : n * 1000;
  if (!Number.isInteger(ms)) fail(`a duration must be whole milliseconds, got ${value}`);
  return number(ms);
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
    fail(`unsupported colour ${s}`);
  }
  if (opacity < 0 || opacity > 1) fail(`opacity out of range in ${s}`);
  const color = `Color(0xFF${hex.toUpperCase()})`;
  return opacity === 1 ? color : `${color}.copy(alpha = ${number(opacity)}f)`;
}

/** `{color.navy.800}` as a Kotlin reference, when it points at a token we emit. */
function reference(original, names) {
  const m = /^\{([^}]+)\}$/.exec(String(original));
  return m ? names.get(m[1]) : undefined;
}

function colorValue(token, names) {
  return reference(token.original.$value, names) ?? colorLiteral(token.$value);
}

function valueFor(token, group, names) {
  switch (group.kind) {
    case 'color':
    case 'appearance':
    case 'themed':
      return colorValue(token, names);
    case 'dimension':
      return dimension(token.$value, SP_GROUPS.has(group.name) ? 'sp' : 'dp');
    case 'shadow': {
      const layers = token.$value.map((l) => [
        'TokenShadowLayer(',
        `offsetX = ${dimension(l.offsetX, 'dp')}, `,
        `offsetY = ${dimension(l.offsetY, 'dp')}, `,
        `blur = ${dimension(l.blur, 'dp')}, `,
        `spread = ${dimension(l.spread, 'dp')}, `,
        `color = ${colorLiteral(l.color)})`,
      ].join(''));
      return `listOf(${layers.join(', ')})`;
    }
    case 'fontFamily':
      return `listOf(${token.$value.map((f) => JSON.stringify(f)).join(', ')})`;
    case 'fontWeight':
      return number(token.$value);
    case 'typography': {
      const v = token.$value;
      const o = token.original.$value;
      const ref = (key, literal) => reference(o[key], names) ?? literal;
      const known = ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'textTransform'];
      for (const key of Object.keys(v)) {
        if (!known.includes(key)) fail(`${token.path.join('.')} has unsupported ${key}`);
      }
      if (v.textTransform !== undefined && v.textTransform !== 'uppercase') {
        fail(`unsupported textTransform ${v.textTransform}`);
      }
      return [
        'TokenTypeStyle(',
        `fontFamily = ${ref('fontFamily', `listOf(${v.fontFamily.map((f) => JSON.stringify(f)).join(', ')})`)}, `,
        `fontSize = ${ref('fontSize', dimension(v.fontSize, 'sp'))}, `,
        `fontWeight = ${ref('fontWeight', number(v.fontWeight))}, `,
        `lineHeight = ${ref('lineHeight', dimension(v.lineHeight, 'sp'))}, `,
        `letterSpacing = ${v.letterSpacing === undefined ? '0.sp' : dimension(v.letterSpacing, 'sp')}, `,
        `uppercase = ${v.textTransform === 'uppercase'})`,
      ].join('');
    }
    case 'motion':
      // A duration as a Long of milliseconds, or a plain number (a spring's bounce) as a Float.
      if (token.$type === 'duration') return `${milliseconds(token.$value)}L`;
      if (token.$type === 'number') return `${number(token.$value)}f`;
      return fail(`${token.path.join('.')} is a ${token.$type}; motion tokens are durations or numbers`);
    default:
      return fail(`unknown kind ${group.kind}`);
  }
}

function kdoc(text, indent) {
  if (!text) return [];
  const lines = String(text).replace(/\*\//g, '*&#47;').split('\n');
  if (lines.length === 1) return [`${indent}/** ${lines[0]} */`];
  return [`${indent}/**`, ...lines.map((line) => `${indent} * ${line}`.trimEnd()), `${indent} */`];
}

const PREAMBLE = `/** One layer of a shadow. */
@Immutable
public data class TokenShadowLayer(
    public val offsetX: Dp,
    public val offsetY: Dp,
    public val blur: Dp,
    public val spread: Dp,
    public val color: Color,
)

/** A text style: sizes and spacing in sp, weight as a CSS numeric weight. */
@Immutable
public data class TokenTypeStyle(
    public val fontFamily: List<String>,
    public val fontSize: TextUnit,
    public val fontWeight: Int,
    public val lineHeight: TextUnit,
    public val letterSpacing: TextUnit,
    public val uppercase: Boolean,
)`;

/** The `all` list: each token's path in the JSON and its value. */
function allList(what, type, entries, valueOf) {
  return [
    `    /** ${what}, by its path in the JSON. */`,
    `    public val all: List<Pair<String, ${type}>> = listOf(`,
    ...entries.map((e) => `        ${JSON.stringify(e.token.path.join('.'))} to ${valueOf(e)},`),
    '    )',
  ];
}

export const composeFormat = {
  name: 'netti/compose',
  format: ({ dictionary, options }) => {
    if (!options.kotlinPackage) fail('options.kotlinPackage is required');
    const darkByPath = new Map((options.darkTokens ?? []).map((t) => [t.path.join('.'), t]));
    const appearanceDarkByPath = new Map((options.appearanceDarkTokens ?? []).map((t) => [t.path.join('.'), t]));
    const grouped = new Map(GROUPS.map((g) => [g.name, []]));
    const names = new Map();
    for (const token of dictionary.allTokens) {
      const group = groupFor(token);
      const name = kotlinName(token.path, group);
      grouped.get(group.name).push({ token, name });
      names.set(token.path.join('.'), `${group.name}.${name}`);
    }
    // In a colour set, a reference to a primitive stays a reference; a reference to anything else
    // would point into a set, so it is resolved to its value instead.
    const primitiveNames = new Map([...names].filter(([, n]) => n.startsWith('PrimitiveColor.')));

    const out = [
      '// NettiTokens.kt',
      `// Generated by sd.config.js (Style Dictionary) from src/tokens/*.json, ${options.packageName} ${options.packageVersion}.`,
      '// Do not edit by hand: change the JSON and run `npm run build:tokens`.',
      '',
      `package ${options.kotlinPackage}`,
      '',
      'import androidx.compose.runtime.Immutable',
      'import androidx.compose.ui.graphics.Color',
      'import androidx.compose.ui.unit.Dp',
      'import androidx.compose.ui.unit.TextUnit',
      'import androidx.compose.ui.unit.dp',
      'import androidx.compose.ui.unit.sp',
      '',
      PREAMBLE,
    ];

    for (const group of GROUPS) {
      const entries = grouped.get(group.name);
      if (entries.length === 0) fail(`no tokens for ${group.name}`);
      const kind = KIND[group.kind] ?? fail(`unknown kind ${group.kind}`);
      const doc = DOCS[group.name] ?? fail(`no Kotlin doc for group ${group.name}`);

      if (!kind.set) {
        const typeOf = (token) => (SP_GROUPS.has(group.name) ? 'TextUnit' : kind.typeOf ? kind.typeOf(token) : kind.type);
        const types = new Set(entries.map(({ token }) => typeOf(token)));
        const type = types.size === 1 ? [...types][0] : (kind.mixedType ?? fail(`${group.name} mixes ${[...types]}`));
        out.push('', ...kdoc(doc, ''), `public object ${group.name} {`);
        for (const { token, name } of entries) {
          out.push(...kdoc(token.$description, '    '));
          out.push(`    public val ${name}: ${typeOf(token)} = ${valueFor(token, group, names)}`);
        }
        out.push('', ...allList('Every token in this group', type, entries, (e) => e.name), '}');
        continue;
      }

      // A colour set: the light value is the token itself, the dark value comes from its own file.
      const darkMap = group.kind === 'themed' ? darkByPath : appearanceDarkByPath;
      const paths = entries.map(({ token }) => token.path.join('.')).sort();
      const darkPaths = [...darkMap.keys()].sort();
      if (paths.join() !== darkPaths.join()) {
        fail(`${group.name}: light and dark differ: [${paths}] vs [${darkPaths}]`);
      }
      out.push('', ...kdoc(SET_DOCS[kind.set], ''), '@Immutable', `public class ${kind.set}(`);
      for (const { token, name } of entries) {
        out.push(...kdoc(token.$description, '    '));
        out.push(`    public val ${name}: Color,`);
      }
      out.push(') {', ...allList('Every colour in this set', 'Color', entries, (e) => e.name), '}');

      out.push('', ...kdoc(doc, ''), `public object ${group.name} {`);
      kind.modes.forEach((mode, i) => {
        if (i > 0) out.push('');
        out.push(...kdoc(MODE_DOCS[group.name][mode], '    '), `    public val ${mode}: ${kind.set} = ${kind.set}(`);
        for (const { token, name } of entries) {
          const source = mode === 'light' ? token : darkMap.get(token.path.join('.'));
          out.push(`        ${name} = ${colorValue(source, primitiveNames)},`);
        }
        out.push('    )');
      });
      out.push('}');
    }
    return `${out.join('\n')}\n`;
  },
};
