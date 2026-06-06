import type { Meta, StoryObj } from '@storybook/react';
import { ListRow } from './ListRow';

const CARD_STYLE: React.CSSProperties = {
  background: '#010045',
  borderRadius: 12,
  overflow: 'hidden',
  width: 361,
};

const meta: Meta<typeof ListRow> = {
  title: 'Components/ListRow',
  component: ListRow,
  parameters: { backgrounds: { default: 'navy' } },
  decorators: [(Story) => <div style={CARD_STYLE}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof ListRow>;

export const Default: Story = {
  args: { label: 'Bonus', subLabel: '(yearly)', amountFormatted: '£5,000', onRemove: () => {} },
};
export const NoSubLabel: Story = {
  args: { label: 'Overtime', amountFormatted: '£800', onRemove: () => {} },
};
export const Stacked: Story = {
  render: () => (
    <div style={CARD_STYLE}>
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.10)' }}>
        <ListRow label="Bonus" subLabel="(yearly)" amountFormatted="£5,000" onRemove={() => {}} />
      </div>
      <ListRow label="Overtime" subLabel="(monthly)" amountFormatted="£800" onRemove={() => {}} />
    </div>
  ),
};
