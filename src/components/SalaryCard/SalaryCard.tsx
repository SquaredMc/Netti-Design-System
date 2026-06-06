import { SegmentedControl, SegmentOption } from '../SegmentedControl/SegmentedControl';
import styles from './SalaryCard.module.css';

/**
 * SalaryCard
 *
 * Dark navy card displaying the user's current salary and period selector.
 * Maps to the Figma "Salary Card" component (Variant=Free and Variant=Pro).
 *
 * When additionalIncomeSummary is provided the card is in "Pro" state and
 * displays the income badge below the salary amount.
 */

export const PERIOD_OPTIONS: SegmentOption[] = [
  { value: 'yearly',  label: 'Yearly'  },
  { value: 'monthly', label: 'Monthly' },
  { value: 'weekly',  label: 'Weekly'  },
  { value: 'daily',   label: 'Daily'   },
];

export type Period = 'yearly' | 'monthly' | 'weekly' | 'daily';

export interface SalaryCardProps {
  /** Formatted salary string, e.g. "£35,000" */
  salaryFormatted: string;
  period: Period;
  onPeriodChange: (period: Period) => void;
  /**
   * Pro only — short summary of active income items.
   * When set the card switches to its Pro visual state.
   * e.g. "+ £5,000 bonus · £8,000 overtime"
   */
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
      className={[styles.card, isPro ? styles.pro : '', className ?? ''].filter(Boolean).join(' ')}
      aria-label="Your salary"
    >
      <span className={styles.eyebrow}>YOUR SALARY</span>
      <span className={styles.amount} aria-live="polite">
        {salaryFormatted}
      </span>

      {isPro && additionalIncomeSummary && (
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
      />
    </article>
  );
}
