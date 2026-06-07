import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AdditionalIncomeCard, IncomeItem } from './AdditionalIncomeCard';

const meta: Meta<typeof AdditionalIncomeCard> = {
  title: 'Components/AdditionalIncomeCard',
  component: AdditionalIncomeCard,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'app' },
    docs: {
      description: {
        component:
          'Dark navy card for additional income items.\n\n' +
          '**Empty** — Ghost CTA fills the card.\n\n' +
          '**Has Items** — "ADDITIONAL INCOME" header with inline "+ Add income" button. ' +
          'Remove is handled via the item edit screen, not inline.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof AdditionalIncomeCard>;

// Wrapper matches the Calculate screen context — gradient bg, 16px side margin
const wrap = (children: React.ReactNode) => (
  <div
    style={{
      background: 'linear-gradient(160deg, #00021B 0%, #010045 50%, #26D4EB 100%)',
      padding: 24,
      borderRadius: 20,
      width: 361 + 48, // card width + padding both sides
    }}
  >
    {children}
  </div>
);

const SAMPLE: IncomeItem[] = [
  { id: '1', label: 'Bonus',    subLabel: '(yearly)',  amountFormatted: '£5,000' },
  { id: '2', label: 'Overtime', subLabel: '(monthly)', amountFormatted: '£8,000' },
];

export const Empty: Story = {
  render: () => wrap(
    <AdditionalIncomeCard items={[]} onAdd={() => {}} />
  ),
};

export const WithItems: Story = {
  render: () => {
    const [items, setItems] = useState<IncomeItem[]>(SAMPLE);
    return wrap(
      <AdditionalIncomeCard
        items={items}
        onAdd={() => alert('Add income')}
      />
    );
  },
};

export const SingleItem: Story = {
  render: () => wrap(
    <AdditionalIncomeCard
      items={[{ id: '1', label: 'Bonus', subLabel: '(yearly)', amountFormatted: '£5,000' }]}
      onAdd={() => {}}
    />
  ),
};
