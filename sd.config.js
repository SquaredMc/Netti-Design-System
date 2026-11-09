import StyleDictionary from 'style-dictionary';
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { swiftFormat } from './sd.swift.js';

const PREFIX = 'netti';
const CSS = 'src/tokens.css';
const DARK_TMP = 'src/tokens.dark.css';

// 1. Base build — primitives + fixed semantics + LIGHT theme role tokens, under :root.
//    `src/tokens/*.json` matches top-level files only (excludes theme/), so the
//    dark theme file is not pulled into the default :root block.
const base = new StyleDictionary({
  log: { verbosity: 'verbose' },
  source: ['src/tokens/*.json', 'src/tokens/theme/light.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: PREFIX,
      buildPath: 'src/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: { selector: ':root', outputReferences: false },
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'src/',
      files: [{ destination: 'tokens.ts', format: 'javascript/es6' }],
    },
  },
});
await base.buildAllPlatforms();

// 2. Dark build — only the dark theme role tokens, under [data-theme="dark"].
//    Primitives are included so {color.*} references resolve, then filtered out
//    of the output so the block contains only the themed overrides.
const dark = new StyleDictionary({
  source: ['src/tokens/color.json', 'src/tokens/theme/dark.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: PREFIX,
      buildPath: 'src/',
      files: [
        {
          destination: 'tokens.dark.css',
          format: 'css/variables',
          filter: (token) => String(token.filePath).replace(/\\/g, '/').includes('theme/dark'),
          options: { selector: '[data-theme="dark"]', outputReferences: false },
        },
      ],
    },
  },
});
await dark.buildAllPlatforms();

// 2b. Dark appearance — the semantic colours' dark-mode values (appearance/dark.json). Opt-in:
//     they apply only under `prefers-color-scheme: dark` on a page whose root sets
//     data-appearance="auto", so an app built for light only stays light.
const appearance = new StyleDictionary({
  source: ['src/tokens/color.json', 'src/tokens/appearance/dark.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: PREFIX,
      buildPath: 'src/',
      files: [
        {
          destination: 'tokens.appearance.css',
          format: 'css/variables',
          filter: (token) => String(token.filePath).replace(/\\/g, '/').includes('appearance/dark'),
          options: { selector: ':root[data-appearance="auto"]', outputReferences: false },
        },
      ],
    },
  },
});
await appearance.buildAllPlatforms();

// 3. Append the [data-theme="dark"] block and the dark appearance block to tokens.css, drop the
//    temp files.
const APPEARANCE_TMP = 'src/tokens.appearance.css';
const darkCss = readFileSync(DARK_TMP, 'utf8');
const block = darkCss.slice(darkCss.indexOf('[data-theme')).trim();
const appearanceCss = readFileSync(APPEARANCE_TMP, 'utf8');
const appearanceBlock = appearanceCss.slice(appearanceCss.indexOf(':root[data-appearance')).trim()
  .split('\n').map((line) => `  ${line}`).join('\n');
writeFileSync(
  CSS,
  `${readFileSync(CSS, 'utf8').trimEnd()}\n\n${block}\n\n@media (prefers-color-scheme: dark) {\n${appearanceBlock}\n}\n`,
);
rmSync(DARK_TMP);
rmSync(APPEARANCE_TMP);

// 4. Swift — every token as Swift constants for the native iOS app (src/NettiTokens.swift,
//    copied to dist/swift/ by `npm run build`). Values stay as authored (only the name is transformed);
//    the dark theme's role tokens are resolved by a second dictionary and passed in.
const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
StyleDictionary.registerFormat(swiftFormat);
const darkSwift = new StyleDictionary({
  source: ['src/tokens/color.json', 'src/tokens/theme/dark.json'],
  platforms: { swift: { transforms: ['name/camel'] } },
});
const { allTokens: darkAll } = await darkSwift.getPlatformTokens('swift');
const appearanceSwift = new StyleDictionary({
  source: ['src/tokens/color.json', 'src/tokens/appearance/dark.json'],
  platforms: { swift: { transforms: ['name/camel'] } },
});
const { allTokens: appearanceAll } = await appearanceSwift.getPlatformTokens('swift');
const swift = new StyleDictionary({
  source: ['src/tokens/*.json', 'src/tokens/theme/light.json'],
  platforms: {
    swift: {
      transforms: ['name/camel'],
      buildPath: 'src/',
      files: [
        {
          destination: 'NettiTokens.swift',
          format: 'netti/swift',
          options: {
            packageName: pkg.name,
            packageVersion: pkg.version,
            darkTokens: darkAll.filter((t) => String(t.filePath).replace(/\\/g, '/').includes('theme/dark')),
            appearanceDarkTokens: appearanceAll.filter((t) => String(t.filePath).replace(/\\/g, '/').includes('appearance/dark')),
          },
        },
      ],
    },
  },
});
await swift.buildAllPlatforms();
