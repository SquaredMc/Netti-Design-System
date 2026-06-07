import type { Meta, StoryObj } from '@storybook/react';
import { ListRow } from './ListRow';

const meta: Meta<typeof ListRow> = {
  title: 'Components/ListRow',
  component: ListRow,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'navy' },
    docs: {
      description: {
        component:
          'Single income item row for the Additional Income Card. Dark navy surface.\n\n' +
          '`hasRemove` — false by default. Only shown in edit context.\n\n' +
          '`hasDivider` — true by default. Pass false on the last row in a list.',
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

// Card container — matches the actual Additional Income Card surface
const card = (children: React.ReactNode) => (
  <div
    style={{
      background: '#010045',          // background/card token value
      border: '1px solid #07205E',    // background/card-border token value
      borderRadius: 12,
      overflow: 'hidden',
      width: 361,                     // matches Figma card width
    }}
  >
    {children}
  </div>
);

/** Default list view — no remove button, divider shown. */
export const Default: Story = {
  render: () => card(
    <ListRow label="Bonus" subLabel="(yearly)" amountFormatted="£5,000" />
  ),
};

/** Last row — no divider. */
export const LastRow: Story = {
  render: () => card(
    <ListRow label="Overtime" subLabel="(monthly)" amountFormatted="£8,000" hasDivider={false} />
  ),
};

/** Edit context — remove button visible. */
export const WithRemove: Story = {
  render: () => card(
    <ListRow
      label="Bonus"
      subLabel="(yearly)"
      amountFormatted="£5,000"
      hasRemove
      onRemove={() => alert('Remove')}
    />
  ),
};

/** As they appear stacked in the card — first row has divider, last does not. */
export const Stacked: Story = {
  render: () => card(
    <>
      <ListRow label="Bonus"    subLabel="(yearly)"  amountFormatted="£5,000" hasDivider={true}  />
      <ListRow label="Overtime" subLabel="(monthly)" amountFormatted="£8,000" hasDivider={false} />
    </>
  ),
};
