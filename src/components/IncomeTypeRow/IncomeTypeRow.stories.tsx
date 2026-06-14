import type { Meta, StoryObj } from '@storybook/react';
import { IncomeTypeRow } from './IncomeTypeRow';

const meta: Meta<typeof IncomeTypeRow> = {
  title: 'Components/IncomeTypeRow',
  component: IncomeTypeRow,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Tappable row used inside the Income Type Picker sheet. Title + optional ' +
          'subtitle on the left, chevron affordance on the right.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof IncomeTypeRow>;

// White sheet container — matches the picker surface
const sheet = (children: React.ReactNode) => (
  <div style={{ background: '#FFFFFF', width: 393, padding: '0 20px' }}>{children}</div>
);

const DIVIDER = <div style={{ height: 1, background: '#EEEEEE' }} />;

/** Single row with subtitle. */
export const Default: Story = {
  render: () => sheet(
    <IncomeTypeRow title="Bonus" subtitle="Recurring bonus payment" onClick={() => {}} />
  ),
};

/** Stacked, as they appear in the picker — separated by dividers. */
export const List: Story = {
  render: () => sheet(
    <>
      <IncomeTypeRow title="Bonus" subtitle="Recurring bonus payment" onClick={() => {}} />
      {DIVIDER}
      <IncomeTypeRow title="Overtime" subtitle="Hourly overtime pay" onClick={() => {}} />
      {DIVIDER}
      <IncomeTypeRow title="Commission" subtitle="Sales or performance payments" onClick={() => {}} />
      {DIVIDER}
      <IncomeTypeRow title="Single payment" subtitle="A one-off payment this tax year" onClick={() => {}} />
    </>
  ),
};
