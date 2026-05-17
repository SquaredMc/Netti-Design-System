import type { Meta, StoryObj } from '@storybook/react';
import { MoneyRow, Divider } from './MoneyRow';

const meta: Meta<typeof MoneyRow> = {
  title: 'Components/MoneyRow',
  component: MoneyRow,
  decorators: [
    (Story) => (
      <div style={{ width: 320, background: 'var(--surface-1)', padding: 16, borderRadius: 16 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MoneyRow>;

export const Default: Story = {
  args: { label: 'Income Tax', amount: -4500 },
};

export const Strong: Story = {
  args: { label: 'Take-Home Pay', amount: 32000, strong: true },
};

export const TaxBreakdown: Story = {
  render: () => (
    <>
      <MoneyRow label="Gross Salary" amount={50000} />
      <MoneyRow label="Income Tax" amount={-7500} />
      <MoneyRow label="National Insurance" amount={-3500} />
      <Divider />
      <MoneyRow label="Take-Home Pay" amount={39000} strong />
    </>
  ),
};
