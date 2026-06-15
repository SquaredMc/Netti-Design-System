import { ReactNode } from 'react';
import styles from './ListRow.module.css';

/**
 * ListRow
 *
 * A single income item row inside the Additional Income Card.
 * Dark surface — always used on navy card backgrounds.
 *
 * Left:  label + optional sub-label (grows to fill)
 * Right: formatted amount + optional remove button
 *
 * hasRemove defaults to false — the remove button is only shown
 * when the user is actively editing an item, not in the default list view.
 * This matches the Figma spec where removal happens via the edit screen.
 *
 * Pass `onClick` to make the whole row tappable (e.g. open an edit screen).
 * The row then renders as a <button>; `onClick` and `hasRemove` are mutually
 * exclusive — a tappable row never nests the remove button.
 */

export interface ListRowProps {
  label: string;
  /** e.g. "(yearly)" */
  subLabel?: string;
  /** Formatted amount string, e.g. "£5,000" */
  amountFormatted?: string;
  /** Tap handler for the whole row — makes it a <button> (e.g. open edit screen). */
  onClick?: () => void;
  /** Accessible label for the tappable row. Defaults to the visible content. */
  rowLabel?: string;
  /**
   * Show the remove (−) button.
   * False by default — only shown in edit/detail context, not in the card list.
   */
  hasRemove?: boolean;
  /** Called when the remove button is pressed */
  onRemove?: () => void;
  /** Accessible label for the remove button */
  removeLabel?: string;
  /** Show a 1px divider at the bottom of the row */
  hasDivider?: boolean;
  /** Slot for a right-side badge (e.g. "Pro") */
  badge?: ReactNode;
  className?: string;
}

export function ListRow({
  label,
  subLabel,
  amountFormatted,
  onClick,
  rowLabel,
  hasRemove = false,
  onRemove,
  removeLabel = `Remove ${label}`,
  hasDivider = true,
  badge,
  className,
}: ListRowProps) {
  // Tappable only when there's no nested remove button (avoid nested <button>s).
  const interactive = !!onClick && !hasRemove;

  const content = (
    <>
      {/* Left: label stack — grows to fill */}
      <div className={styles.labels}>
        <span className={styles.label}>{label}</span>
        {subLabel && <span className={styles.subLabel}>{subLabel}</span>}
      </div>

      {/* Right: badge, amount, optional remove */}
      <div className={styles.right}>
        {badge}
        {amountFormatted && (
          <span className={styles.amount}>{amountFormatted}</span>
        )}
        {hasRemove && onRemove && (
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
    </>
  );

  return (
    <div className={[styles.outer, className ?? ''].filter(Boolean).join(' ')}>
      {interactive ? (
        <button
          type="button"
          className={[styles.row, styles.interactive].join(' ')}
          onClick={onClick}
          aria-label={rowLabel}
        >
          {content}
        </button>
      ) : (
        <div className={styles.row}>{content}</div>
      )}

      {/* Divider — omit on the last row */}
      {hasDivider && <div className={styles.divider} aria-hidden="true" />}
    </div>
  );
}
