import { KeyboardEvent, useId } from 'react';
import styles from './SegmentedControl.module.css';

/**
 * SegmentedControl (Toggle)
 *
 * Period or mode selector — maps to the Figma Toggle component.
 *
 * context:
 *   dark  — renders on navy card backgrounds (Salary Card, Additional Income Card)
 *   light — renders on white surface backgrounds (Bottom Sheet)
 *
 * Supports 2, 3, or 4 options. All widths share the same 44px height and
 * the same total width so they are interchangeable on screen.
 */

export interface SegmentOption {
  value: string;
  label: string;
}

export interface SegmentedControlProps {
  options: SegmentOption[];
  value: string;
  onChange: (value: string) => void;
  /** Optional text label shown above the control. */
  label?: string;
  context?: 'dark' | 'light';
  className?: string;
  /** Accessible label for the group */
  'aria-label'?: string;
}

export function SegmentedControl({
  options,
  value,
  onChange,
  label,
  context = 'light',
  className,
  'aria-label': ariaLabel = 'Select period',
}: SegmentedControlProps) {
  const labelId = useId();
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIndex = (index + 1) % options.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIndex = (index - 1 + options.length) % options.length;
    }
    if (nextIndex !== null) {
      e.preventDefault();
      onChange(options[nextIndex].value);
    }
  };

  const track = (
    <div
      className={[styles.track, styles[context], label ? '' : (className ?? '')].filter(Boolean).join(' ')}
      role="tablist"
      aria-label={label ? undefined : ariaLabel}
      aria-labelledby={label ? labelId : undefined}
    >
      {options.map((opt, i) => {
        const isSelected = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={isSelected}
            tabIndex={isSelected ? 0 : -1}
            className={[styles.segment, isSelected ? styles.selected : ''].join(' ')}
            onClick={() => onChange(opt.value)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            data-testid={`segment-${opt.value}`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );

  if (!label) return track;

  return (
    <div className={[styles.field, className ?? ''].filter(Boolean).join(' ')}>
      <span id={labelId} className={styles.label}>{label}</span>
      {track}
    </div>
  );
}
