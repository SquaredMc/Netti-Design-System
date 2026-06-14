import type { Meta, StoryObj } from '@storybook/react';
import { ListRow } from './ListRow';

const meta: Meta<typeof ListRow> = {
  title: 'Components/ListRow',
  component: ListRow,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 361, background: 'var(--netti-color-background-card)' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof ListRow>;

export const Default: Story = {
  args: { label: 'Bonus', meta: '(yearly)', value: '£3,500' },
};
