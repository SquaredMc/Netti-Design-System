import { useState } from 'react';
import './InputField.css';

interface InputFieldProps {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  onBlur?: () => void;
  type?: 'text' | 'number';
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  className?: string;
  inputMode?: 'text' | 'numeric' | 'decimal';
  testId?: string;
}

export function InputField({
  label,
  value,
  onChange,
  onBlur,
  type = 'text',
  placeholder,
  prefix,
  suffix,
  className = '',
  inputMode,
  testId,
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasData = value !== '' && value !== undefined;

  const stateClass = isFocused ? 'ds-input--focused' : hasData ? 'ds-input--has-data' : '';

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  return (
    <div className={`ds-input-field ${className}`}>
      <label className="ds-input-label">{label}</label>
      <div className={`ds-input-wrapper ${stateClass}`}>
        {prefix && <span className="ds-input-prefix">{prefix}</span>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          placeholder={placeholder}
          inputMode={inputMode}
          className="ds-input"
          data-testid={testId}
        />
        {suffix && <span className="ds-input-suffix">{suffix}</span>}
      </div>
    </div>
  );
}
