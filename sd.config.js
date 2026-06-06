import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  log: { verbosity: 'verbose' },
  source: ['src/tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'netti',
      buildPath: 'src/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            selector: ':root',
            outputReferences: false,
          },
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'src/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'javascript/es6',
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
