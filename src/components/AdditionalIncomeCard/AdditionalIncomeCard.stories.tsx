import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AdditionalIncomeCard, IncomeItem } from './AdditionalIncomeCard';
import '../../tokens.css';

const meta: Meta<typeof AdditionalIncomeCard> = {
  title: 'Components/AdditionalIncomeCard',
  component: AdditionalIncomeCard,
  parameters: {
    backgrounds: { default: 'app' },
    docs: {
      description: {
        component:
          'Dark navy card that sits below the SalaryCard. ' +
          'Empty state: full-width Pro CTA. ' +
          'Has-items state: ADDITIONAL INCOME header + ListRows with remove buttons + compact "+ Add income" ghost button. ' +
          'Composes `ListRow` and `Button`.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof AdditionalIncomeCard>;

const SAMPLE_ITEMS: IncomeItem[] = [
  { id: '1', label: 'Bonus',     subLabel: '(yearly)',  amountFormatted: '£5,000' },
  { id: '2', label: 'Overtime',  subLabel: '(monthly)', amountFormatted: '£800'   },
];

const SINGLE_ITEM: IncomeItem[] = [
  { id: '1', label: 'Bonus', subLabel: '(yearly)', amountFormatted: '£5,000' },
];

const wrapper = (Story: React.ComponentType) => (
  <div style={{ width: 361, padding: 16 }}><Story /></div>
);

/** Free-tier empty state — full-width "Add additional income" CTA. */
export const Empty: Story = {
  args: { items: [], onAdd: () => {}, onRemove: () => {} },
  decorators: [wrapper],
};

/** Single item — shows row + the compact ghost "+ Add income" button in the footer. */
export const SingleItem: Story = {
  render: () => {
    const [items, setItems] = useState<IncomeItem[]>(SINGLE_ITEM);
    return (
      <div style={{ width: 361, padding: 16 }}>
        <AdditionalIncomeCard
          items={items}
          isPro
          onAdd={() => alert('Add income')}
          onRemove={(id) => setItems((prev) => prev.filter((i) => i.id !== id))}
        />
      </div>
    );
  },
};

/** Two income items — interactive: remove buttons work, items disappear from the list. */
export const WithItems: Story = {
  render: () => {
    const [items, setItems] = useState<IncomeItem[]>(SAMPLE_ITEMS);
    return (
      <div style={{ width: 361, padding: 16 }}>
        <AdditionalIncomeCard
          items={items}
          isPro
          onAdd={() => alert('Add income')}
          onRemove={(id) => setItems((prev) => prev.filter((i) => i.id !== id))}
        />
      </div>
    );
  },
};
