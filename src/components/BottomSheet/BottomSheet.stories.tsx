import type { Meta, StoryObj } from '@storybook/react';
import { BottomSheet } from './BottomSheet';
import '../../tokens.css';

const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
};
export default meta;

type Story = StoryObj<typeof BottomSheet>;

const triggerStyle: React.CSSProperties = {
  padding: '12px 24px',
  background: 'var(--netti-color-background-card)',
  color: 'var(--netti-color-text-inverse)',
  border: 'none',
  borderRadius: 'var(--netti-card-border-radius)',
  cursor: 'pointer',
};

export const WithTrigger: Story = {
  render: () => (
    <BottomSheet
      title="Tax Breakdown"
      trigger={<button style={triggerStyle}>Open Sheet</button>}
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
      trigger={<button style={triggerStyle}>Open Sheet</button>}
      footer={
        <button style={{
          display: 'block',
          width: '100%',
          height: 44,
          background: 'var(--netti-color-action-primary-bg)',
          color: 'var(--netti-color-action-primary-text)',
          border: 'none',
          borderRadius: 'var(--netti-card-border-radius)',
          fontWeight: 600,
          cursor: 'pointer',
        }}>
          Save
        </button>
      }
    >
      <p style={{ color: 'var(--netti-color-text-secondary)', fontSize: 14 }}>
        Sheet content goes here.
      </p>
    </BottomSheet>
  ),
};
