import StyleDictionary from 'style-dictionary';
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { swiftFormat } from './sd.swift.js';
import { composeFormat } from './sd.compose.js';

const PREFIX = 'netti';
const CSS = 'src/tokens.css';
const DARK_TMP = 'src/tokens.dark.css';

// The motion tokens (motion.json) are for the native apps: they go to Swift and Kotlin only, so
// tokens.css and tokens.ts stay as they were.
const notMotion = (token) => token.path[0] !== 'motion';

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
          filter: notMotion,
          options: { selector: ':root', outputReferences: false },
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'src/',
      files: [{ destination: 'tokens.ts', format: 'javascript/es6', filter: notMotion }],
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

// 5. Kotlin — every token as Kotlin constants for the native Android app (src/NettiTokens.kt,
//    copied to dist/kotlin/ by `npm run build`), with the same groups and names as the Swift. The
//    dark values come from the dictionaries resolved for the Swift above.
StyleDictionary.registerFormat(composeFormat);
const kotlin = new StyleDictionary({
  source: ['src/tokens/*.json', 'src/tokens/theme/light.json'],
  platforms: {
    kotlin: {
      transforms: ['name/camel'],
      buildPath: 'src/',
      files: [
        {
          destination: 'NettiTokens.kt',
          format: 'netti/compose',
          options: {
            packageName: pkg.name,
            packageVersion: pkg.version,
            kotlinPackage: 'com.nettiapp.designsystem',
            darkTokens: darkAll.filter((t) => String(t.filePath).replace(/\\/g, '/').includes('theme/dark')),
            appearanceDarkTokens: appearanceAll.filter((t) => String(t.filePath).replace(/\\/g, '/').includes('appearance/dark')),
          },
        },
      ],
    },
  },
});
await kotlin.buildAllPlatforms();
