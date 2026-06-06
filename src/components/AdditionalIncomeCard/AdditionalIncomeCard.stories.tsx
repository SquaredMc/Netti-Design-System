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
        component: 'Dark navy card for additional income items. Empty state shows the Pro CTA; populated state shows income rows with remove buttons.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof AdditionalIncomeCard>;

const SAMPLE_ITEMS: IncomeItem[] = [
  { id: '1', label: 'Bonus',    subLabel: '(yearly)',  amountFormatted: '£5,000' },
  { id: '2', label: 'Overtime', subLabel: '(monthly)', amountFormatted: '£800'   },
];

export const Empty: Story = {
  args: { items: [], onAdd: () => {}, onRemove: () => {} },
  decorators: [(S) => <div style={{ width: 361, padding: 16 }}><S /></div>],
};

export const WithItems: Story = {
  render: () => {
    const [items, setItems] = useState<IncomeItem[]>(SAMPLE_ITEMS);
    return (
      <div style={{ width: 361, padding: 16 }}>
        <AdditionalIncomeCard
          items={items}
          onAdd={() => alert('Add income')}
          onRemove={(id) => setItems((prev) => prev.filter((i) => i.id !== id))}
          isPro
        />
      </div>
    );
  },
};
