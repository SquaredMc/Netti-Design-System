import { InputHTMLAttributes, useId, useState } from 'react';
import styles from './InputField.module.css';

/**
 * InputField
 *
 * Two visual variants mapping directly to the Figma Input Field component:
 *
 *   standard     — bordered box (42px). Used for numeric/text inputs like
 *                  "Hours worked". Label above, value inside the box.
 *
 *   largeAmount  — large display style with underline cursor (no border box).
 *                  Used for primary monetary inputs like "Hourly rate" or
 *                  "Bonus amount". £/% prefix alongside 36px value.
 *
 * State is derived automatically from value + focus:
 *   empty   — no value, not focused
 *   focused — currently active
 *   filled  — has a value, not focused
 */

export type InputFieldVariant = 'standard' | 'largeAmount';

export interface InputFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'prefix'> {
  label: string;
  value: string;
  onChange: (value: string) => void;
  variant?: InputFieldVariant;
  /** Currency/unit prefix shown before the value. e.g. "£" or "%" */
  prefix?: string;
  /** Error message — shown below the field when set */
  error?: string;
  className?: string;
}

export function InputField({
  label,
  value,
  onChange,
  variant = 'standard',
  prefix = '£',
  error,
  className,
  placeholder,
  disabled,
  inputMode,
  ...rest
}: InputFieldProps) {
  const [focused, setFocused] = useState(false);
  const id = useId();
  const hasValue = value !== '' && value !== undefined;

  const state = focused ? 'focused' : hasValue ? 'filled' : 'empty';

  if (variant === 'largeAmount') {
    return (
      <div
        className={[
          styles.field,
          styles.fieldLarge,
          styles[`state_${state}`],
          disabled ? styles.disabled : '',
          className ?? '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>

        <div className={styles.largeAmountRow}>
          {prefix && (
            <span className={styles.largePrefix} aria-hidden="true">
              {prefix}
            </span>
          )}
          <input
            id={id}
            type="text"
            inputMode={inputMode ?? 'decimal'}
            value={value}
            placeholder={hasValue ? undefined : '0'}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            className={styles.largeInput}
            {...rest}
          />
        </div>

        {/* Underline cursor — always present, cyan when focused */}
        <div
          className={[styles.underline, focused ? styles.underlineFocused : ''].join(' ')}
          aria-hidden="true"
        />

        {error && (
          <span id={`${id}-error`} className={styles.error} role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }

  // Standard variant — bordered box
  return (
    <div
      className={[
        styles.field,
        styles.fieldStandard,
        styles[`state_${state}`],
        disabled ? styles.disabled : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <div className={styles.inputBox}>
        <input
          id={id}
          type="text"
          inputMode={inputMode ?? 'decimal'}
          value={value}
          placeholder={placeholder ?? 'e.g. 16'}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={styles.input}
          {...rest}
        />
      </div>

      {error && (
        <span id={`${id}-error`} className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
