import styles from './Switch.module.css';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  offLabel?: string;
  onLabel?: string;
  className?: string;
}

/**
 * Switch — two-option toggle.
 * Visually matches the Figma SegmentedControl with 2 tabs (light context).
 * For more than 2 options use SegmentedControl directly.
 */
export function Switch({
  checked,
  onChange,
  offLabel = 'Off',
  onLabel = 'On',
  className,
}: SwitchProps) {
  return (
    <div
      className={[styles.track, className ?? ''].filter(Boolean).join(' ')}
      role="group"
    >
      <button
        type="button"
        className={[styles.option, !checked ? styles.selected : ''].filter(Boolean).join(' ')}
        onClick={() => onChange(false)}
        aria-pressed={!checked}
        data-testid="switch-off"
      >
        {offLabel}
      </button>
      <button
        type="button"
        className={[styles.option, checked ? styles.selected : ''].filter(Boolean).join(' ')}
        onClick={() => onChange(true)}
        aria-pressed={checked}
        data-testid="switch-on"
      >
        {onLabel}
      </button>
    </div>
  );
}
