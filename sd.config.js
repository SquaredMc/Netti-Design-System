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

// 3. Append the [data-theme="dark"] block to tokens.css, drop the temp file.
const darkCss = readFileSync(DARK_TMP, 'utf8');
const block = darkCss.slice(darkCss.indexOf('[data-theme')).trim();
writeFileSync(CSS, `${readFileSync(CSS, 'utf8').trimEnd()}\n\n${block}\n`);
rmSync(DARK_TMP);

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
          },
        },
      ],
    },
  },
});
await swift.buildAllPlatforms();
