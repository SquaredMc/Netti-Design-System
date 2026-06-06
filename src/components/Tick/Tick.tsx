import styles from './Tick.module.css';

/**
 * Tick
 *
 * 22×22 circle with a checkmark. Used in feature lists and confirmation flows.
 *
 * state=active   — green circle, green tick (feature included)
 * state=inactive — grey circle, muted tick (coming soon / locked)
 */

export type TickState = 'active' | 'inactive';

export interface TickProps {
  state?: TickState;
  className?: string;
  /** Screen-reader label — defaults to state description */
  'aria-label'?: string;
}

export function Tick({
  state = 'active',
  className,
  'aria-label': ariaLabel,
}: TickProps) {
  const label = ariaLabel ?? (state === 'active' ? 'Included' : 'Coming soon');
  return (
    <span
      className={[styles.tick, styles[state], className ?? ''].filter(Boolean).join(' ')}
      aria-label={label}
      role="img"
    >
      ✓
    </span>
  );
}
