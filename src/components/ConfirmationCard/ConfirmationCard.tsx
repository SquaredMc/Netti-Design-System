import styles from './ConfirmationCard.module.css';

/**
 * ConfirmationCard
 *
 * Cyan-tinted summary shown after adding an income item — confirms the gross
 * amount and its annualised value.
 *
 * Figma: node 64:18 (Confirmation Card).
 */

export interface ConfirmationCardProps {
  /** Small label above the entered amount. */
  label?: string;
  /** The amount the user entered, formatted, e.g. "£3,500". */
  amountFormatted: string;
  /** Frequency suffix shown after the amount, e.g. "yearly". */
  frequency: string;
  /** Right-hand period label, e.g. "Yearly". */
  periodLabel: string;
  /** Right-hand annualised amount, formatted, e.g. "£3,500". */
  periodAmountFormatted: string;
  className?: string;
}

export function ConfirmationCard({
  label = 'Gross added',
  amountFormatted,
  frequency,
  periodLabel,
  periodAmountFormatted,
  className,
}: ConfirmationCardProps) {
  return (
    <div className={[styles.card, className ?? ''].filter(Boolean).join(' ')}>
      <div className={styles.left}>
        <span className={styles.label}>{label}</span>
        <div className={styles.amountRow}>
          <span className={styles.gross}>{amountFormatted}</span>
          <span className={styles.frequency}>{`× ${frequency}`}</span>
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.periodLabel}>{periodLabel}</span>
        <span className={styles.periodAmount}>{periodAmountFormatted}</span>
      </div>
    </div>
  );
}
