import StyleDictionary from 'style-dictionary';
import { readFileSync, writeFileSync, rmSync } from 'node:fs';

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
