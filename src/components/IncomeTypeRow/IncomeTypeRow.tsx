import styles from './IncomeTypeRow.module.css';

/**
 * IncomeTypeRow
 *
 * A tappable row inside the Income Type Picker sheet.
 * Title + optional subtitle on the left, chevron affordance on the right.
 *
 * Figma: node 64:11 (Income Type Row).
 */

export interface IncomeTypeRowProps {
  title: string;
  /** Supporting description, e.g. "Recurring bonus payment" */
  subtitle?: string;
  onClick?: () => void;
  className?: string;
}

export function IncomeTypeRow({ title, subtitle, onClick, className }: IncomeTypeRowProps) {
  return (
    <button
      type="button"
      className={[styles.row, className ?? ''].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      <span className={styles.labels}>
        <span className={styles.title}>{title}</span>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </span>
      <svg
        className={styles.chevron}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
