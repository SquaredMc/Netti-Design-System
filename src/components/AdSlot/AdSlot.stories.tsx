import type { Meta, StoryObj } from '@storybook/react';
import { AdSlot } from './AdSlot';

const meta: Meta<typeof AdSlot> = {
  title: 'Components/AdSlot',
  component: AdSlot,
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof AdSlot>;

export const Default: Story = {};

/** Theme-aware — the placeholder gradient, border and text adapt to a dark surface. */
export const ThemedDark: Story = {
  render: () => (
    <div data-theme="dark" style={{ padding: 24, background: '#00021b' }}>
      <AdSlot />
    </div>
  ),
};
