import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SalaryCard } from './SalaryCard';

const meta: Meta<typeof SalaryCard> = {
  title: 'Components/SalaryCard',
  component: SalaryCard,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 361, background: 'var(--netti-color-brand-navy-deep)', padding: 16 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof SalaryCard>;

const periods = [
  { value: 'yearly', label: 'Yearly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'daily', label: 'Daily' },
];

export const Default: Story = {
  render: () => {
    const [period, setPeriod] = useState('yearly');
    return (
      <SalaryCard periods={periods} period={period} onPeriodChange={setPeriod}>
        £35,000
      </SalaryCard>
    );
  },
};

export const WithoutToggle: Story = {
  render: () => <SalaryCard>£35,000</SalaryCard>,
};
