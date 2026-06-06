import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SalaryCard, Period, PERIOD_OPTIONS } from './SalaryCard';
import '../../tokens.css';

const meta: Meta<typeof SalaryCard> = {
  title: 'Components/SalaryCard',
  component: SalaryCard,
  parameters: {
    backgrounds: { default: 'app' },
    docs: {
      description: {
        component:
          'Dark navy card that displays the computed salary and a period selector. ' +
          'Switches to the Pro variant automatically when `additionalIncomeSummary` is provided. ' +
          'Composes `SegmentedControl` internally.',
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

/** Free tier — salary + period selector, no income badge. */
export const Free: Story = {
  render: () => <Controlled />,
};

/**
 * Pro tier — salary + period selector + additional income badge below the amount.
 * The badge is controlled by the `additionalIncomeSummary` prop.
 */
export const Pro: Story = {
  render: () => (
    <Controlled additionalIncomeSummary="+ £5,000 bonus · £8,000 overtime" />
  ),
};

/** Long additional income summary to verify text truncation on the badge. */
export const LongSummary: Story = {
  render: () => (
    <Controlled additionalIncomeSummary="+ £5,000 bonus · £8,000 overtime · £1,200 freelance · £600 rental" />
  ),
};

/** All four period options shown in sequence. */
export const AllPeriods: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {PERIOD_OPTIONS.map((opt) => (
        <div key={opt.value} style={{ width: 361 }}>
          <SalaryCard
            salaryFormatted={
              opt.value === 'yearly'  ? '£35,000' :
              opt.value === 'monthly' ? '£2,917'  :
              opt.value === 'weekly'  ? '£673'    : '£135'
            }
            period={opt.value as Period}
            onPeriodChange={() => {}}
          />
        </div>
      ))}
    </div>
  ),
};
