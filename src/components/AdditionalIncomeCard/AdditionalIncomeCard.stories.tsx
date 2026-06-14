import type { Meta, StoryObj } from '@storybook/react';
import { AdditionalIncomeCard } from './AdditionalIncomeCard';
import { ListRow } from '../ListRow/ListRow';

const meta: Meta<typeof AdditionalIncomeCard> = {
  title: 'Components/AdditionalIncomeCard',
  component: AdditionalIncomeCard,
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

type Story = StoryObj<typeof AdditionalIncomeCard>;

export const Empty: Story = {
  render: () => <AdditionalIncomeCard onAdd={() => {}} />,
};

export const WithItems: Story = {
  render: () => (
    <AdditionalIncomeCard onAdd={() => {}}>
      <ListRow label="Bonus" meta="(yearly)" value="£3,500" onClick={() => {}} />
      <ListRow label="Overtime" meta="(monthly)" value="£250" onClick={() => {}} />
    </AdditionalIncomeCard>
  ),
};
