import type { Meta, StoryObj } from '@storybook/react';
import { NettiLogo } from './NettiLogo';

const meta: Meta<typeof NettiLogo> = {
  title: 'Brand/NettiLogo',
  component: NettiLogo,
  parameters: { backgrounds: { default: 'navy' } },
};
export default meta;

type Story = StoryObj<typeof NettiLogo>;

export const Default: Story = {};

export const Large: Story = {
  args: { width: 144, height: 48 },
};

export const Small: Story = {
  args: { width: 48, height: 16 },
};
