import type { Meta, StoryObj } from '@storybook/react';
import { ListRow } from './ListRow';

const CARD: React.CSSProperties = {
  background: '#010045',
  borderRadius: 12,
  overflow: 'hidden',
  width: 361,
};

const meta: Meta<typeof ListRow> = {
  title: 'Components/ListRow',
  component: ListRow,
  parameters: {
    backgrounds: { default: 'navy' },
    docs: {
      description: {
        component:
          'Single income item row for the Additional Income Card.\n\n' +
          '`hasRemove` defaults to `false` — the remove button only appears in edit context. ' +
          '`hasDivider` defaults to `true` — pass `false` on the last row.',
      },
    },
  },
  argTypes: {
    hasRemove:  { control: 'boolean' },
    hasDivider: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof ListRow>;

/** Default list view — no remove button. */
export const Default: Story = {
  render: () => (
    <div style={CARD}>
      <ListRow label="Bonus" subLabel="(yearly)" amountFormatted="£5,000" />
    </div>
  ),
};

/** Last row — no divider. */
export const LastRow: Story = {
  render: () => (
    <div style={CARD}>
      <ListRow label="Overtime" subLabel="(monthly)" amountFormatted="£8,000" hasDivider={false} />
    </div>
  ),
};

/** Edit context — remove button visible. */
export const WithRemove: Story = {
  render: () => (
    <div style={CARD}>
      <ListRow
        label="Bonus"
        subLabel="(yearly)"
        amountFormatted="£5,000"
        hasRemove
        onRemove={() => alert('Remove')}
      />
    </div>
  ),
};

/** Stacked as they appear in the card. */
export const Stacked: Story = {
  render: () => (
    <div style={CARD}>
      <ListRow label="Bonus"    subLabel="(yearly)"  amountFormatted="£5,000" hasDivider={true}  />
      <ListRow label="Overtime" subLabel="(monthly)" amountFormatted="£8,000" hasDivider={false} />
    </div>
  ),
};
