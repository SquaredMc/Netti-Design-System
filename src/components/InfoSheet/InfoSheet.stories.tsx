import type { Meta, StoryObj } from '@storybook/react';
import { InfoSheet } from './InfoSheet';

const meta: Meta<typeof InfoSheet> = {
  title: 'Components/InfoSheet',
  component: InfoSheet,
};
export default meta;

type Story = StoryObj<typeof InfoSheet>;

export const Default: Story = {
  render: () => (
    <InfoSheet title="What is NI?" description="National Insurance contributions fund state benefits including the State Pension, NHS, and unemployment support.">
      <button style={{ padding: '8px 16px', background: 'transparent', border: '1px solid #E5E7EB', borderRadius: 8, cursor: 'pointer', fontSize: 14 }}>
        What is NI? ⓘ
      </button>
    </InfoSheet>
  ),
};
