import type { Meta, StoryObj } from '@storybook/react';
import { MoneyRow, Divider } from './MoneyRow';
import '../../tokens.css';

const meta: Meta<typeof MoneyRow> = {
  title: 'Components/MoneyRow',
  component: MoneyRow,
  parameters: {
    docs: {
      description: {
        component:
          'A single label/amount row used inside breakdown sheets. ' +
          '`amount` is a raw number — formatting (£, sign, locale) is handled internally via `Intl.NumberFormat`. ' +
          '`strong` enlarges the row and uses the primary text colour for the total line.',
      },
    },
  },
  argTypes: {
    amount:   { control: 'number' },
    strong:   { control: 'boolean' },
    showSign: { control: 'boolean' },
  },
  args: { label: 'Income Tax', amount: -4500, strong: false, showSign: true },
  decorators: [
    (Story) => (
      <div
        style={{
          width: 320,
          background: 'var(--netti-color-background-surface)',
          padding: 'var(--netti-card-padding)',
          borderRadius: 'var(--netti-card-border-radius)',
          boxShadow: 'var(--netti-shadow-card)',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MoneyRow>;

/** Standard deduction row — negative amount shows in red. */
export const Deduction: Story = {
  args: { label: 'Income Tax', amount: -4500 },
};

/** Income / positive row. */
export const Income: Story = {
  args: { label: 'Gross Salary', amount: 50000, showSign: false },
};

/** Strong variant — larger type, used for the take-home total. */
export const Strong: Story = {
  args: { label: 'Take-Home Pay', amount: 39000, strong: true },
};

/** A realistic full tax breakdown with a `Divider` before the total. */
export const TaxBreakdown: Story = {
  render: () => (
    <>
      <MoneyRow label="Gross Salary"         amount={50000} showSign={false} />
      <MoneyRow label="Income Tax"           amount={-7540} />
      <MoneyRow label="National Insurance"   amount={-3760} />
      <MoneyRow label="Student Loan (Plan 2)" amount={-1350} />
      <Divider />
      <MoneyRow label="Take-Home Pay"        amount={37350} strong />
    </>
  ),
};

/** Title & subtitle — label-only section headers (Figma Breakdown Row variants). */
export const Sections: Story = {
  render: () => (
    <>
      <MoneyRow label="Earnings"           variant="title" />
      <MoneyRow label="Gross Salary"       amount={50000} showSign={false} />
      <MoneyRow label="Bonus"              amount={5000} />
      <MoneyRow label="Deductions"         variant="subtitle" />
      <MoneyRow label="Income Tax"         amount={-7540} />
      <MoneyRow label="National Insurance" amount={-3760} />
      <Divider />
      <MoneyRow label="Take-Home Pay"      amount={37350} strong />
    </>
  ),
};
