import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Primary interactive element. Five variants map directly to the Figma Button component set. All colours reference semantic tokens — re-theme by swapping the token layer.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['pro', 'primary', 'secondary', 'ghost', 'text'],
    },
    size: { control: 'radio', options: ['lg', 'md'] },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    variant: 'pro',
    size: 'lg',
    fullWidth: false,
    disabled: false,
    children: 'Unlock Netti Pro',
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Pro: Story = {
  args: { variant: 'pro', children: 'Unlock Netti Pro' },
};

export const Primary: Story = {
  args: { variant: 'primary', children: 'See details' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Restore purchases' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Add income' },
  parameters: {
    backgrounds: { default: 'navy' },
  },
};

export const Text: Story = {
  args: { variant: 'text', children: 'Learn more' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 300 }}>
      <Button variant="pro" fullWidth>Unlock Netti Pro</Button>
      <Button variant="primary" fullWidth>See details</Button>
      <Button variant="secondary" fullWidth>Restore purchases</Button>
      <Button variant="text" fullWidth>Learn more</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: { variant: 'pro', disabled: true, children: 'Unlock Netti Pro' },
};

export const MediumSize: Story = {
  args: { variant: 'primary', size: 'md', children: 'Confirm' },
};
