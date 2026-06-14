import { ReactNode } from 'react';
import './SalaryCard.css';

interface SalaryCardProps {
  /** Eyebrow label above the figure. Defaults to "YOUR SALARY". */
  label?: string;
  /** The salary figure or an editable input row. Inherits white/36px/bold/centred styling. */
  children: ReactNode;
  /** Period toggle options. Omit to hide the toggle. */
  periods?: { value: string; label: string }[];
  /** Currently selected period value. */
  period?: string;
  /** Called when a period tab is tapped. */
  onPeriodChange?: (value: string) => void;
  /** Optional content rendered below the card body (e.g. the Pro additional-income section). */
  footer?: ReactNode;
  className?: string;
}

export function SalaryCard({
  label = 'YOUR SALARY',
  children,
  periods,
  period,
  onPeriodChange,
  footer,
  className = '',
}: SalaryCardProps) {
  return (
    <div className={`ds-salary-card ${className}`}>
      <span className="ds-salary-card__label">{label}</span>
      <div className="ds-salary-card__figure">{children}</div>

      {periods && periods.length > 0 && (
        <div className="ds-salary-card__toggle" role="tablist">
          {periods.map((p) => (
            <button
              key={p.value}
              type="button"
              role="tab"
              aria-selected={p.value === period}
              className={`ds-salary-card__tab ${p.value === period ? 'ds-salary-card__tab--active' : ''}`}
              onClick={() => onPeriodChange?.(p.value)}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}

      {footer && <div className="ds-salary-card__footer">{footer}</div>}
    </div>
  );
}
