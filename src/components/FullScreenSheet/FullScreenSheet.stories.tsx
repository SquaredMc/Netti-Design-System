import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FullScreenSheet } from './FullScreenSheet';
import '../../tokens.css';

const meta: Meta<typeof FullScreenSheet> = {
  title: 'Components/FullScreenSheet',
  component: FullScreenSheet,
};
export default meta;

type Story = StoryObj<typeof FullScreenSheet>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button
          style={{
            padding: '12px 24px',
            background: 'var(--netti-color-background-card)',
            color: 'var(--netti-color-text-inverse)',
            border: 'none',
            borderRadius: 'var(--netti-card-border-radius)',
            cursor: 'pointer',
          }}
          onClick={() => setOpen(true)}
        >
          Open Full Screen
        </button>
        <FullScreenSheet title="Pro Features" open={open} onOpenChange={setOpen}>
          <p style={{ color: 'var(--netti-color-text-secondary)', fontSize: 14, lineHeight: '24px' }}>
            Full screen sheet content goes here.
          </p>
        </FullScreenSheet>
      </>
    );
  },
};
