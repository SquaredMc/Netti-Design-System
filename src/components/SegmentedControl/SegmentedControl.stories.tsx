import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl } from './SegmentedControl';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
};
export default meta;

type Story = StoryObj<typeof SegmentedControl>;

const options = [
  { value: 'annual', label: 'Annual' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'weekly', label: 'Weekly' },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('annual');
    return <SegmentedControl options={options} value={value} onChange={setValue} />;
  },
};

export const TwoOptions: Story = {
  render: () => {
    const [value, setValue] = useState('employed');
    return (
      <SegmentedControl
        options={[{ value: 'employed', label: 'Employed' }, { value: 'self', label: 'Self-Employed' }]}
        value={value}
        onChange={setValue}
      />
    );
  },
};
