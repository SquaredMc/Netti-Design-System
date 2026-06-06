import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl } from './SegmentedControl';

const PERIOD_OPTIONS = [
  { value: 'yearly',  label: 'Yearly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'weekly',  label: 'Weekly' },
  { value: 'daily',   label: 'Daily' },
];

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    docs: {
      description: {
        component:
          'Period / mode selector. Supports 2–4 options and two contexts (dark card, light sheet). Arrow key navigation included.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof SegmentedControl>;

function Controlled({ context = 'light' }: { context?: 'dark' | 'light' }) {
  const [val, setVal] = useState('monthly');
  return (
    <div style={{ width: 328 }}>
      <SegmentedControl options={PERIOD_OPTIONS} value={val} onChange={setVal} context={context} />
    </div>
  );
}

export const Light: Story = { render: () => <Controlled context="light" /> };
export const Dark: Story = {
  render: () => (
    <div style={{ background: '#010045', padding: 16, borderRadius: 12 }}>
      <Controlled context="dark" />
    </div>
  ),
  parameters: { backgrounds: { default: 'navy' } },
};

export const TwoOptions: Story = {
  render: () => {
    const [val, setVal] = useState('yearly');
    return (
      <div style={{ width: 328 }}>
        <SegmentedControl
          options={[{ value: 'yearly', label: 'Yearly' }, { value: 'monthly', label: 'Monthly' }]}
          value={val}
          onChange={setVal}
        />
      </div>
    );
  },
};
