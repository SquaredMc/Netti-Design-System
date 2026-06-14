import './ListRow.css';

interface ListRowProps {
  /** Primary label, e.g. "Bonus". */
  label: string;
  /** Secondary muted text, e.g. "(yearly)". */
  meta?: string;
  /** Right-aligned value, e.g. "£3,500". */
  value: string;
  /** When provided the row becomes a tappable button (e.g. to edit). */
  onClick?: () => void;
  className?: string;
}

export function ListRow({ label, meta, value, onClick, className = '' }: ListRowProps) {
  const content = (
    <>
      <span className="ds-list-row__labels">
        <span className="ds-list-row__label">{label}</span>
        {meta && <span className="ds-list-row__meta">{meta}</span>}
      </span>
      <span className="ds-list-row__value">{value}</span>
    </>
  );

  if (onClick) {
    return (
      <button type="button" className={`ds-list-row ds-list-row--tappable ${className}`} onClick={onClick}>
        {content}
      </button>
    );
  }
  return <div className={`ds-list-row ${className}`}>{content}</div>;
}
