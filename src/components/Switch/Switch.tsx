import { KeyboardEvent } from 'react';
import styles from './Switch.module.css';

export interface SwitchProps {
  /** Whether the "On" option is selected. */
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** Optional label displayed to the left of the switch. */
  label?: string;
  offLabel?: string;
  onLabel?: string;
  className?: string;
  /** Accessible label for the switch group (used when no visible label is provided). */
  'aria-label'?: string;
}

export function Switch({
  checked,
  onChange,
  label,
  offLabel = 'Off',
  onLabel = 'On',
  className,
  'aria-label': ariaLabel,
}: SwitchProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      onChange(true);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      onChange(false);
    }
  };

  const rootClass = [styles.root, !label ? styles.noLabel : '', className ?? '']
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={rootClass}
      role="group"
      aria-label={ariaLabel ?? label}
    >
      {label && <span className={styles.label}>{label}</span>}

      <div className={styles.track} role="radiogroup">
        <button
          type="button"
          role="radio"
          aria-checked={!checked}
          tabIndex={!checked ? 0 : -1}
          className={[styles.pill, !checked ? styles.offActive : ''].filter(Boolean).join(' ')}
          onClick={() => onChange(false)}
          onKeyDown={handleKeyDown}
          data-testid="switch-off"
        >
          {offLabel}
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={checked}
          tabIndex={checked ? 0 : -1}
          className={[styles.pill, checked ? styles.onActive : ''].filter(Boolean).join(' ')}
          onClick={() => onChange(true)}
          onKeyDown={handleKeyDown}
          data-testid="switch-on"
        >
          {onLabel}
        </button>
      </div>
    </div>
  );
}
