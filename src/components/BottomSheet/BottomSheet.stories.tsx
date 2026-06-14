import type { Meta, StoryObj } from '@storybook/react';
import { BottomSheet } from './BottomSheet';
import '../../tokens.css';

const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
};
export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const WithTrigger: Story = {
  render: () => (
    <BottomSheet
      title="Tax Breakdown"
      trigger={<button style={{ padding: '12px 24px', background: '#010045', color: '#fff', border: 'none', borderRadius: 12, cursor: 'pointer' }}>Open Sheet</button>}
    >
      <p style={{ color: 'var(--netti-color-text-secondary)', fontSize: 14, lineHeight: '24px' }}>
        Your tax breakdown summary goes here.
      </p>
    </BottomSheet>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <BottomSheet
      title="Add Income"
      trigger={<button style={{ padding: '12px 24px', background: '#010045', color: '#fff', border: 'none', borderRadius: 12, cursor: 'pointer' }}>Open Sheet</button>}
      footer={
        <button style={{ display: 'block', width: '100%', height: 44, background: '#26D4EB', border: 'none', borderRadius: 12, fontWeight: 600, cursor: 'pointer' }}>
          Save
        </button>
      }
    >
      <p style={{ color: 'var(--netti-color-text-secondary)', fontSize: 14 }}>Sheet content goes here.</p>
    </BottomSheet>
  ),
};
