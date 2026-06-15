import { Button } from '../Button/Button';
import { ListRow } from '../ListRow/ListRow';
import styles from './AdditionalIncomeCard.module.css';

/**
 * AdditionalIncomeCard
 *
 * Dark navy card below the SalaryCard on the Calculate screen.
 *
 * Empty state — no items:
 *   Full-width Ghost button fills the card.
 *
 * Has-items state:
 *   Header row: "ADDITIONAL INCOME" label + "Add income" Ghost button inline (right).
 *   Income rows below — no remove buttons in this view.
 *   Tapping a row (onItemClick) opens its edit screen, where removal happens.
 *
 * Figma: node 80:65 (Has Items) and 80:35 (Empty); edit flow node 38:6255.
 */

export interface IncomeItem {
  id: string;
  label: string;
  subLabel?: string;
  amountFormatted: string;
}

export interface AdditionalIncomeCardProps {
  items: IncomeItem[];
  onAdd: () => void;
  /** Tap handler for an income row — opens that item's edit screen. */
  onItemClick?: (id: string) => void;
  onRemove?: (id: string) => void;
  className?: string;
}

export function AdditionalIncomeCard({
  items,
  onAdd,
  onItemClick,
  className,
}: AdditionalIncomeCardProps) {
  const hasItems = items.length > 0;

  return (
    <div
      className={[
        styles.card,
        hasItems ? styles.hasItems : styles.empty,
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {hasItems ? (
        <>
          {/* Header: label + Add income button inline */}
          <div className={styles.header}>
            <span className={styles.eyebrow}>ADDITIONAL INCOME</span>
            <Button
              variant="ghost"
              size="md"
              onClick={onAdd}
              aria-label="Add another income source"
            >
              + Add income
            </Button>
          </div>

          {/* Full-width divider below header */}
          <div className={styles.divider} aria-hidden="true" />

          {/* Income rows — no remove buttons in list view */}
          <div className={styles.rows}>
            {items.map((item, index) => (
              <ListRow
                key={item.id}
                label={item.label}
                subLabel={item.subLabel}
                amountFormatted={item.amountFormatted}
                onClick={onItemClick ? () => onItemClick(item.id) : undefined}
                rowLabel={onItemClick ? `Edit ${item.label}` : undefined}
                hasRemove={false}
                hasDivider={index < items.length - 1}
              />
            ))}
          </div>
        </>
      ) : (
        /* Empty state — Ghost button fills the full card */
        <Button
          variant="ghost"
          size="lg"
          fullWidth
          onClick={onAdd}
          aria-label="Add additional income"
        >
          + Add additional income
        </Button>
      )}
    </div>
  );
}
