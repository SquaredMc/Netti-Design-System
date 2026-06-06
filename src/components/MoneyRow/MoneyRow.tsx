import styles from './MoneyRow.module.css';

export interface MoneyRowProps {
  label: string;
  /** Raw numeric amount. Formatted automatically with Intl. */
  amount: number;
  /** Makes the row larger and bolder — use for totals */
  strong?: boolean;
  /** Colour-code positive amounts green */
  showPositive?: boolean;
  className?: string;
  currency?: string;
  locale?: string;
}

export function MoneyRow({
  label,
  amount,
  strong = false,
  showPositive = true,
  className,
  currency = 'GBP',
  locale = 'en-GB',
}: MoneyRowProps) {
  const isPositive = amount > 0 && showPositive;
  const isNegative = amount < 0;

  const formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(amount));

  const display = isNegative ? `−${formatted}` : formatted;

  return (
    <div
      className={[
        styles.row,
        isPositive ? styles.positive : '',
        isNegative ? styles.negative : '',
        strong ? styles.strong : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.amount}>{display}</span>
    </div>
  );
}

export function Divider({ className }: { className?: string }) {
  return <div className={[styles.divider, className ?? ''].filter(Boolean).join(' ')} />;
}
