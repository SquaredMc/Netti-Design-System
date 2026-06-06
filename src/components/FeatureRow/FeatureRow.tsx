import { Tick, TickState } from '../Tick/Tick';
import styles from './FeatureRow.module.css';

/**
 * FeatureRow
 *
 * A single feature line in the Paywall Sheet.
 * Tick + title + optional sub-label.
 *
 * state=active   — full colour, for included features
 * state=inactive — muted colour, for "coming soon" items
 */

export interface FeatureRowProps {
  title: string;
  description?: string;
  state?: TickState;
  className?: string;
}

export function FeatureRow({
  title,
  description,
  state = 'active',
  className,
}: FeatureRowProps) {
  const isInactive = state === 'inactive';
  return (
    <div className={[styles.row, className ?? ''].filter(Boolean).join(' ')}>
      <Tick state={state} />
      <div className={styles.text}>
        <span
          className={[styles.title, isInactive ? styles.muted : ''].filter(Boolean).join(' ')}
        >
          {title}
        </span>
        {description && (
          <span className={styles.description}>{description}</span>
        )}
      </div>
    </div>
  );
}
