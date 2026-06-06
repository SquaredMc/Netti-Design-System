import type { Meta, StoryObj } from '@storybook/react';
import { FeatureRow } from './FeatureRow';
import '../../tokens.css';

const meta: Meta<typeof FeatureRow> = {
  title: 'Components/FeatureRow',
  component: FeatureRow,
  parameters: {
    docs: {
      description: {
        component:
          'A single feature line in the Paywall Sheet. Composes `Tick` + title + optional description. ' +
          '`state` flows through to the Tick — active = green, inactive = muted.',
      },
    },
  },
  argTypes: {
    state: { control: 'radio', options: ['active', 'inactive'] },
  },
  args: {
    title: 'Bonus & overtime modelling',
    description: 'Model any additional income',
    state: 'active',
  },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof FeatureRow>;

/** Feature is included in Pro — green tick, full-colour title. */
export const Active: Story = {};

/** Coming soon or locked — grey tick, muted title text. */
export const Inactive: Story = {
  args: { title: 'Salary comparison', description: 'Coming soon', state: 'inactive' },
};

/** Without the optional description sub-line. */
export const TitleOnly: Story = {
  args: { title: 'Marginal tax insight', description: undefined },
};

/** Full list as rendered inside the Paywall Sheet. */
export const FullList: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}>
      <FeatureRow
        title="Bonus & overtime modelling"
        description="Model any additional income"
        state="active"
      />
      <FeatureRow
        title="Marginal tax insight"
        description="See what your next £1 is worth"
        state="active"
      />
      <FeatureRow
        title="Salary comparison"
        description="Coming soon"
        state="inactive"
      />
    </div>
  ),
};
