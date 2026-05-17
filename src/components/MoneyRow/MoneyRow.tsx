import './MoneyRow.css';

interface MoneyRowProps {
  label: string;
  amount: number;
  strong?: boolean;
  showSign?: boolean;
  className?: string;
  currency?: string;
  locale?: string;
}

export function MoneyRow({
  label,
  amount,
  strong = false,
  showSign = true,
  className = '',
  currency = 'GBP',
  locale = 'en-GB',
}: MoneyRowProps) {
  const isPositive = amount > 0;
  const isNegative = amount < 0;

  const formattedAmount = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(amount));

  let displayAmount = formattedAmount;
  if (showSign && isNegative) displayAmount = `-${formattedAmount}`;

  const colorClass = isPositive && strong ? 'ds-money-row--positive' : isNegative ? 'ds-money-row--negative' : '';
  const strongClass = strong ? 'ds-money-row--strong' : '';

  return (
    <div className={`ds-money-row ${colorClass} ${strongClass} ${className}`}>
      <span className="ds-money-row-label">{label}</span>
      <span
        className="ds-money-row-amount"
        data-testid={`money-${label.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {displayAmount}
      </span>
    </div>
  );
}

export function Divider() {
  return <div className="ds-divider" />;
}
