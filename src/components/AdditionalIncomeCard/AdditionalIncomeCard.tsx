import { Button } from '../Button/Button';
import { ListRow } from '../ListRow/ListRow';
import styles from './AdditionalIncomeCard.module.css';

/**
 * AdditionalIncomeCard
 *
 * Dark navy card that sits below the SalaryCard on the Calculate screen.
 *
 * Empty state (no items):
 *   Shows only the "Add additional income" CTA button (Pro-gated).
 *
 * Has-items state:
 *   Shows the "ADDITIONAL INCOME" header, a list of income items
 *   (each rendered as a ListRow), and a compact "+ Add income" ghost button.
 */

export interface IncomeItem {
  id: string;
  label: string;
  subLabel?: string;
  amountFormatted: string;
}

export interface AdditionalIncomeCardProps {
  items: IncomeItem[];
  /** Called when the "Add additional income" or "+ Add income" button is pressed */
  onAdd: () => void;
  /** Called when the remove button on an item is pressed */
  onRemove: (id: string) => void;
  /** Whether the user has Pro — gates the add CTA */
  isPro?: boolean;
  className?: string;
}

export function AdditionalIncomeCard({
  items,
  onAdd,
  onRemove,
  isPro = false,
  className,
}: AdditionalIncomeCardProps) {
  const hasItems = items.length > 0;

  return (
    <div
      className={[styles.card, hasItems ? styles.hasItems : styles.empty, className ?? ''].filter(Boolean).join(' ')}
    >
      {hasItems ? (
        <>
          {/* Header */}
          <div className={styles.header}>
            <span className={styles.eyebrow}>ADDITIONAL INCOME</span>
          </div>

          {/* Divider */}
          <div className={styles.divider} />

          {/* Income rows */}
          <div className={styles.rows}>
            {items.map((item, index) => (
              <div key={item.id}>
                <ListRow
                  label={item.label}
                  subLabel={item.subLabel}
                  amountFormatted={item.amountFormatted}
                  onRemove={() => onRemove(item.id)}
                  removeLabel={`Remove ${item.label}`}
                />
                {/* Row divider — not after last item */}
                {index < items.length - 1 && (
                  <div className={styles.rowDivider} />
                )}
              </div>
            ))}
          </div>

          {/* Footer divider */}
          <div className={styles.divider} />

          {/* Footer: compact add button */}
          <div className={styles.footer}>
            <Button
              variant="ghost"
              size="md"
              onClick={onAdd}
              aria-label="Add another income source"
            >
              + Add income
            </Button>
          </div>
        </>
      ) : (
        /* Empty state: full-width CTA */
        <Button
          variant="pro"
          size="lg"
          fullWidth
          onClick={onAdd}
          icon={<span aria-hidden="true">🔒</span>}
          aria-label={isPro ? 'Add additional income' : 'Unlock Pro to add additional income'}
        >
          Add additional income
        </Button>
      )}
    </div>
  );
}
