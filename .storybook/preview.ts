import type { Preview } from '@storybook/react';
import '../src/tokens.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'app',
      values: [
        { name: 'app', value: '#E5E7EB' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'navy', value: '#010045' },
      ],
    },
    layout: 'centered',
  },
};

export default preview;
