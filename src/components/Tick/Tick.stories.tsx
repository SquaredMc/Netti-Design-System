import type { Meta, StoryObj } from '@storybook/react';
import { Tick } from './Tick';
import '../../tokens.css';

const meta: Meta<typeof Tick> = {
  title: 'Components/Tick',
  component: Tick,
  parameters: {
    docs: {
      description: {
        component:
          '22×22 circle checkmark. `active` = green (feature included); `inactive` = grey (coming soon / locked). ' +
          'Used inside `FeatureRow`. Has `role="img"` and an `aria-label` for screen readers.',
      },
    },
  },
  argTypes: {
    state: { control: 'radio', options: ['active', 'inactive'] },
  },
  args: { state: 'active' },
};
export default meta;
type Story = StoryObj<typeof Tick>;

/** Green fill — feature is included in the Pro plan. */
export const Active: Story = { args: { state: 'active' } };

/** Grey fill — coming soon or locked for this tier. */
export const Inactive: Story = { args: { state: 'inactive' } };

/** Both states side-by-side to compare sizing and colour. */
export const BothStates: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <Tick state="active" aria-label="Included" />
        <span style={{ fontSize: 12, color: 'var(--netti-color-text-secondary)' }}>active</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <Tick state="inactive" aria-label="Coming soon" />
        <span style={{ fontSize: 12, color: 'var(--netti-color-text-secondary)' }}>inactive</span>
      </div>
    </div>
  ),
};
