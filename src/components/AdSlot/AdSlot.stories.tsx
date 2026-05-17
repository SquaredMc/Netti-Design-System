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
