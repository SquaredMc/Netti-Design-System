import type { Meta, StoryObj } from '@storybook/react';
import { ConfirmationCard } from './ConfirmationCard';

const meta: Meta<typeof ConfirmationCard> = {
  title: 'Components/ConfirmationCard',
  component: ConfirmationCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Cyan-tinted confirmation shown after adding an income item. Entered amount ' +
          'on the left, annualised value on the right.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof ConfirmationCard>;

const frame = (children: React.ReactNode) => (
  <div style={{ width: 393, padding: 20 }}>{children}</div>
);

/** A £3,500 yearly bonus. */
export const Default: Story = {
  render: () => frame(
    <ConfirmationCard
      amountFormatted="£3,500"
      frequency="yearly"
      periodLabel="Yearly"
      periodAmountFormatted="£3,500"
    />
  ),
};

/** A monthly amount annualised. */
export const Monthly: Story = {
  render: () => frame(
    <ConfirmationCard
      amountFormatted="£500"
      frequency="monthly"
      periodLabel="Yearly"
      periodAmountFormatted="£6,000"
    />
  ),
};
