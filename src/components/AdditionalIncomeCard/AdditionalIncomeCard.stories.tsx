import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AdditionalIncomeCard, IncomeItem } from './AdditionalIncomeCard';

const meta: Meta<typeof AdditionalIncomeCard> = {
  title: 'Components/AdditionalIncomeCard',
  component: AdditionalIncomeCard,
  parameters: {
    backgrounds: { default: 'app' },
    docs: {
      description: {
        component:
          'Dark navy card for additional income items.\n\n' +
          '**Empty state** — Ghost CTA fills the card.\n\n' +
          '**Has Items state** — "ADDITIONAL INCOME" header with "+ Add income" button inline (right). ' +
          'No remove buttons in list view — removal happens via the item edit screen.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof AdditionalIncomeCard>;

const GRADIENT: React.CSSProperties = {
  background: 'linear-gradient(160deg, #00021B 0%, #010045 50%, #26D4EB 100%)',
  padding: 16,
  borderRadius: 20,
  width: 393,
};

const SAMPLE: IncomeItem[] = [
  { id: '1', label: 'Bonus',    subLabel: '(yearly)',  amountFormatted: '£5,000' },
  { id: '2', label: 'Overtime', subLabel: '(monthly)', amountFormatted: '£8,000' },
];

export const Empty: Story = {
  render: () => (
    <div style={GRADIENT}>
      <AdditionalIncomeCard items={[]} onAdd={() => alert('Add income')} />
    </div>
  ),
};

export const WithItems: Story = {
  render: () => {
    const [items, setItems] = useState<IncomeItem[]>(SAMPLE);
    return (
      <div style={GRADIENT}>
        <AdditionalIncomeCard
          items={items}
          onAdd={() => alert('Add income')}
        />
      </div>
    );
  },
};

export const SingleItem: Story = {
  render: () => (
    <div style={GRADIENT}>
      <AdditionalIncomeCard
        items={[{ id: '1', label: 'Bonus', subLabel: '(yearly)', amountFormatted: '£5,000' }]}
        onAdd={() => {}}
      />
    </div>
  ),
};
