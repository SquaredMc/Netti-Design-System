import { ReactNode } from 'react';
import styles from './SheetHeader.module.css';

/**
 * SheetHeader
 *
 * A centred sheet title with an optional trailing icon — drop into the
 * `header` slot of `Sheet`. A balancing spacer keeps the title centred when
 * the icon is present.
 *
 * Figma: node 258:841 (Sheet Header).
 */

export interface SheetHeaderProps {
  title: string;
  /** Trailing icon node (e.g. an info glyph). Omit for a plain centred title. */
  icon?: ReactNode;
  /** When provided, the icon renders as a button calling this handler. */
  onIconClick?: () => void;
  /** Accessible label for the icon button. */
  iconLabel?: string;
  className?: string;
}

// Static — hoisted (rendering-hoist-jsx).
const spacer = <span className={styles.spacer} aria-hidden="true" />;

export function SheetHeader({
  title,
  icon,
  onIconClick,
  iconLabel = 'More information',
  className,
}: SheetHeaderProps) {
  const hasIcon = !!icon;

  return (
    <div className={[styles.header, className ?? ''].filter(Boolean).join(' ')}>
      {hasIcon ? spacer : null}
      <span className={styles.title}>{title}</span>
      {hasIcon ? (
        onIconClick ? (
          <button
            type="button"
            className={styles.iconButton}
            onClick={onIconClick}
            aria-label={iconLabel}
          >
            {icon}
          </button>
        ) : (
          <span className={styles.icon} aria-hidden="true">{icon}</span>
        )
      ) : null}
    </div>
  );
}
