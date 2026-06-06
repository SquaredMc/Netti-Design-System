import type { Preview } from '@storybook/react';
import '../src/tokens.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'app',
      values: [
        { name: 'app',   value: '#E5E7EB' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'navy',  value: '#010045' },
        {
          name: 'gradient',
          value: 'linear-gradient(160deg, #00021B 0%, #010045 50%, #26D4EB 100%)',
        },
      ],
    },
    layout: 'centered',
  },
  // Apply Inter to the Storybook canvas body so all stories inherit it
  globalTypes: {},
};

export default preview;
