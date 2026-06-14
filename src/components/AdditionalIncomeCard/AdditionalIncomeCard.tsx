import { Children, ReactNode } from 'react';
import './AdditionalIncomeCard.css';

interface AdditionalIncomeCardProps {
  /** Eyebrow label. Defaults to "ADDITIONAL INCOME". */
  label?: string;
  /** Label inside the add pill. Defaults to "Add income". */
  addLabel?: string;
  /** Called when the "+ Add income" pill is tapped. Omit to hide the pill. */
  onAdd?: () => void;
  /** ListRow items. When present, a divider separates them from the header. */
  children?: ReactNode;
  className?: string;
}

export function AdditionalIncomeCard({
  label = 'ADDITIONAL INCOME',
  addLabel = 'Add income',
  onAdd,
  children,
  className = '',
}: AdditionalIncomeCardProps) {
  const hasItems = Children.count(children) > 0;

  return (
    <div className={`ds-additional-income-card ${className}`}>
      <div className="ds-additional-income-card__header">
        <span className="ds-additional-income-card__label">{label}</span>
        {onAdd && (
          <button type="button" className="ds-additional-income-card__add" onClick={onAdd}>
            <span className="ds-additional-income-card__add-plus" aria-hidden="true">+</span>
            <span>{addLabel}</span>
          </button>
        )}
      </div>

      {hasItems && (
        <>
          <div className="ds-additional-income-card__divider" />
          <div className="ds-additional-income-card__list">{children}</div>
        </>
      )}
    </div>
  );
}
