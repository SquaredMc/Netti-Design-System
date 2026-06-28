import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl } from './SegmentedControl';
import '../../tokens.css';

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

/** With an optional label above the control (Figma Toggle, node 183:60). */
export const WithLabel: Story = {
  render: () => {
    const [val, setVal] = useState('monthly');
    return (
      <div style={{ width: 328 }}>
        <SegmentedControl label="Label" options={PERIOD_OPTIONS} value={val} onChange={setVal} />
      </div>
    );
  },
};

export const Dark: Story = {
  render: () => (
    <div style={{
      background: 'var(--netti-color-background-card)',
      padding: 'var(--netti-card-padding)',
      borderRadius: 'var(--netti-card-border-radius)',
    }}>
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
