import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SalaryCard, Period } from './SalaryCard';

const meta: Meta<typeof SalaryCard> = {
  title: 'Components/SalaryCard',
  component: SalaryCard,
  parameters: {
    backgrounds: { default: 'app' },
    docs: {
      description: {
        component: 'Dark navy salary display card. Switches to Pro state when additionalIncomeSummary is provided.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof SalaryCard>;

function Controlled(props: Partial<React.ComponentProps<typeof SalaryCard>>) {
  const [period, setPeriod] = useState<Period>('yearly');
  return (
    <div style={{ width: 361, padding: 16 }}>
      <SalaryCard
        salaryFormatted="£35,000"
        period={period}
        onPeriodChange={setPeriod}
        {...props}
      />
    </div>
  );
}

export const Free: Story = { render: () => <Controlled /> };

export const Pro: Story = {
  render: () => (
    <Controlled additionalIncomeSummary="+ £5,000 bonus · £8,000 overtime" />
  ),
};
