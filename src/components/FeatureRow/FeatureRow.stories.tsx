import type { Meta, StoryObj } from '@storybook/react';
import { FeatureRow } from './FeatureRow';

const meta: Meta<typeof FeatureRow> = {
  title: 'Components/FeatureRow',
  component: FeatureRow,
  args: {
    title: 'Bonus & overtime modelling',
    description: 'Model any additional income',
    state: 'active',
  },
};
export default meta;
type Story = StoryObj<typeof FeatureRow>;

export const Active: Story = {};
export const Inactive: Story = {
  args: { title: 'Salary comparison', description: 'Coming soon', state: 'inactive' },
};
export const List: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}>
      <FeatureRow title="Bonus & overtime modelling" description="Model any additional income" state="active" />
      <FeatureRow title="Marginal tax insight" description="See what your next £1 is worth" state="active" />
      <FeatureRow title="Salary comparison" description="Coming soon" state="inactive" />
    </div>
  ),
};
