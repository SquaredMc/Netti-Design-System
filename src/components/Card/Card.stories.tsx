import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <p style={{ color: 'var(--text-2)', fontSize: 14 }}>Card content goes here.</p>,
  },
};

export const WithHeader: Story = {
  args: {
    title: 'Income',
    subtitle: 'Tax year 2024/25',
    children: <p style={{ color: 'var(--text-2)', fontSize: 14 }}>Card content goes here.</p>,
  },
};
