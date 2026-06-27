import styles from './MoneyRow.module.css';

export interface MoneyRowProps {
  label: string;
  /** Raw numeric amount. Formatted automatically with Intl. Omit for title/subtitle. */
  amount?: number;
  /**
   * Label-only section headers within a breakdown (no amount):
   * `title` — 18px, `subtitle` — 14px. Maps to Figma Breakdown Row variants.
   */
  variant?: 'title' | 'subtitle';
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
  variant,
  strong = false,
  showPositive = true,
  className,
  currency = 'GBP',
  locale = 'en-GB',
}: MoneyRowProps) {
  const isHeader = variant === 'title' || variant === 'subtitle';
  const hasAmount = !isHeader && amount !== undefined;
  const isPositive = hasAmount && amount! > 0 && showPositive;
  const isNegative = hasAmount && amount! < 0;

  let display = '';
  if (hasAmount) {
    const formatted = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Math.abs(amount!));
    display = isNegative ? `−${formatted}` : formatted;
  }

  return (
    <div
      className={[
        styles.row,
        variant ? styles[variant] : '',
        isPositive ? styles.positive : '',
        isNegative ? styles.negative : '',
        strong ? styles.strong : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className={styles.label}>{label}</span>
      {hasAmount ? <span className={styles.amount}>{display}</span> : null}
    </div>
  );
}

export function Divider({ className }: { className?: string }) {
  return <div className={[styles.divider, className ?? ''].filter(Boolean).join(' ')} />;
}
