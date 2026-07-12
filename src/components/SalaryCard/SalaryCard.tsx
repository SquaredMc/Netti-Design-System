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
  /** Formatted amount for display-only mode, e.g. "£35,000". */
  salaryFormatted: string;
  period: Period;
  onPeriodChange: (period: Period) => void;
  additionalIncomeSummary?: string;
  className?: string;
  /** When true, the amount renders as an inline editable input instead of a span. */
  editable?: boolean;
  /** Controlled raw value for editable mode, e.g. "35000". */
  value?: string;
  /** Called with the raw input value as the user types. */
  onValueChange?: (value: string) => void;
}

export function SalaryCard({
  salaryFormatted,
  period,
  onPeriodChange,
  additionalIncomeSummary,
  className,
  editable = false,
  value = '',
  onValueChange,
}: SalaryCardProps) {
  const isPro = !!additionalIncomeSummary;

  return (
    <article
      data-theme="dark"
      className={[styles.card, className ?? ''].filter(Boolean).join(' ')}
      aria-label="Your salary"
    >
      <span className={styles.eyebrow}>Your Salary</span>

      {editable ? (
        <div className={styles.amountEdit}>
          <span className={styles.amountPrefix} aria-hidden="true">£</span>
          <input
            className={styles.amountInput}
            type="text"
            inputMode="decimal"
            value={value}
            onChange={(e) => onValueChange?.(e.target.value)}
            aria-label="Salary amount in pounds"
            /* Hug the value so the £ + number stay centred as a group */
            style={{ width: `calc(${Math.max(1, value.length)}ch + 2px)` }}
          />
        </div>
      ) : (
        <span className={styles.amount} aria-live="polite">
          {salaryFormatted}
        </span>
      )}

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
