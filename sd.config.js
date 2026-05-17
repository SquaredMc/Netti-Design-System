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
    figma: {
      transformGroup: 'js',
      buildPath: 'build/',
      files: [
        {
          destination: 'figma-tokens.json',
          format: 'json/nested',
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
