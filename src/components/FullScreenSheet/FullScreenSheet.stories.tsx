import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FullScreenSheet } from './FullScreenSheet';

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
          style={{ padding: '12px 24px', background: '#010045', color: '#fff', border: 'none', borderRadius: 12, cursor: 'pointer' }}
          onClick={() => setOpen(true)}
        >
          Open Full Screen
        </button>
        <FullScreenSheet title="Pro Features" open={open} onOpenChange={setOpen}>
          <p style={{ color: 'var(--text-2)', fontSize: 14, lineHeight: '24px' }}>
            Full screen sheet content goes here.
          </p>
        </FullScreenSheet>
      </>
    );
  },
};
