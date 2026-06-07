import { SegmentedControl, SegmentOption } from '../SegmentedControl/SegmentedControl';
import styles from './SalaryCard.module.css';

export const PERIOD_OPTIONS: SegmentOption[] = [
  { value: 'yearly',  label: 'Yearly'  },
  { value: 'monthly', label: 'Monthly' },
  { value: 'weekly',  label: 'Weekly'  },
  { value: 'daily',   label: 'Daily'   },
];

export type Period = 'yearly' | 'monthly' | 'weekly' | 'daily';

export interface SalaryCardProps {
  salaryFormatted: string;
  period: Period;
  onPeriodChange: (period: Period) => void;
  additionalIncomeSummary?: string;
  className?: string;
}

export function SalaryCard({
  salaryFormatted,
  period,
  onPeriodChange,
  additionalIncomeSummary,
  className,
}: SalaryCardProps) {
  const isPro = !!additionalIncomeSummary;

  return (
    <article
      className={[styles.card, className ?? ''].filter(Boolean).join(' ')}
      aria-label="Your salary"
    >
      <span className={styles.eyebrow}>YOUR SALARY</span>

      <span className={styles.amount} aria-live="polite">
        {salaryFormatted}
      </span>

      {isPro && (
        <div className={styles.badge} aria-label="Additional income">
          {additionalIncomeSummary}
        </div>
      )}

      <SegmentedControl
        options={PERIOD_OPTIONS}
        value={period}
        onChange={(v) => onPeriodChange(v as Period)}
        context="dark"
        aria-label="Pay period"
        className={styles.toggle}
      />
    </article>
  );
}
