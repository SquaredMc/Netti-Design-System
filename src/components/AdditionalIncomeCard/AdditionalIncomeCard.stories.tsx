import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AdditionalIncomeCard, IncomeItem } from './AdditionalIncomeCard';

const meta: Meta<typeof AdditionalIncomeCard> = {
  title: 'Components/AdditionalIncomeCard',
  component: AdditionalIncomeCard,
  parameters: { backgrounds: { default: 'app' } },
};
export default meta;
type Story = StoryObj<typeof AdditionalIncomeCard>;

const SAMPLE: IncomeItem[] = [
  { id: '1', label: 'Bonus',    subLabel: '(yearly)',  amountFormatted: '£5,000' },
  { id: '2', label: 'Overtime', subLabel: '(monthly)', amountFormatted: '£800'   },
];

const wrap = (children: React.ReactNode) => (
  <div style={{ width: 361, padding: 16, background: 'linear-gradient(160deg, #00021B 0%, #010045 50%, #26D4EB 100%)', borderRadius: 16 }}>
    {children}
  </div>
);

export const Empty: Story = {
  render: () => wrap(<AdditionalIncomeCard items={[]} onAdd={() => {}} onRemove={() => {}} />),
};

export const WithItems: Story = {
  render: () => {
    const [items, setItems] = useState<IncomeItem[]>(SAMPLE);
    return wrap(
      <AdditionalIncomeCard
        items={items}
        isPro
        onAdd={() => alert('Add income')}
        onRemove={(id) => setItems((prev) => prev.filter((i) => i.id !== id))}
      />
    );
  },
};
