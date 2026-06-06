import type { Meta, StoryObj } from '@storybook/react';
import { Tick } from './Tick';

const meta: Meta<typeof Tick> = {
  title: 'Components/Tick',
  component: Tick,
  argTypes: { state: { control: 'radio', options: ['active', 'inactive'] } },
  args: { state: 'active' },
};
export default meta;
type Story = StoryObj<typeof Tick>;

export const Active: Story = { args: { state: 'active' } };
export const Inactive: Story = { args: { state: 'inactive' } };
export const Both: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Tick state="active" />
      <Tick state="inactive" />
    </div>
  ),
};
