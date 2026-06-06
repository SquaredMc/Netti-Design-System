import { ReactNode } from 'react';
import styles from './ListRow.module.css';

/**
 * ListRow
 *
 * A single income item row inside the Additional Income Card.
 * Dark surface — always used on navy card backgrounds.
 *
 * Left:  label + optional sub-label (grows to fill)
 * Right: formatted amount + remove button
 */

export interface ListRowProps {
  label: string;
  /** e.g. "(yearly)" */
  subLabel?: string;
  /** Formatted amount string, e.g. "£5,000" */
  amountFormatted?: string;
  /** Called when the remove (−) button is pressed */
  onRemove?: () => void;
  /** Accessible label for the remove button */
  removeLabel?: string;
  /** Slot for a right-side badge (e.g. "Pro") */
  badge?: ReactNode;
  className?: string;
}

export function ListRow({
  label,
  subLabel,
  amountFormatted,
  onRemove,
  removeLabel = `Remove ${label}`,
  badge,
  className,
}: ListRowProps) {
  return (
    <div className={[styles.row, className ?? ''].filter(Boolean).join(' ')}>
      {/* Left: label stack */}
      <div className={styles.labels}>
        <span className={styles.label}>{label}</span>
        {subLabel && <span className={styles.subLabel}>{subLabel}</span>}
      </div>

      {/* Right: amount + remove or badge */}
      <div className={styles.right}>
        {badge}
        {amountFormatted && (
          <span className={styles.amount}>{amountFormatted}</span>
        )}
        {onRemove && (
          <button
            type="button"
            className={styles.remove}
            onClick={onRemove}
            aria-label={removeLabel}
          >
            <span aria-hidden="true">−</span>
          </button>
        )}
      </div>
    </div>
  );
}
