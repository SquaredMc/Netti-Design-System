import './Switch.css';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  offLabel?: string;
  onLabel?: string;
  className?: string;
}

export function Switch({ checked, onChange, offLabel = 'Off', onLabel = 'On', className = '' }: SwitchProps) {
  return (
    <div className={`ds-switch-container ${className}`}>
      <button
        type="button"
        className={`ds-switch-option ${!checked ? 'ds-switch-option--selected' : ''}`}
        onClick={() => onChange(false)}
        data-testid="switch-off"
      >
        {offLabel}
      </button>
      <button
        type="button"
        className={`ds-switch-option ${checked ? 'ds-switch-option--selected' : ''}`}
        onClick={() => onChange(true)}
        data-testid="switch-on"
      >
        {onLabel}
      </button>
    </div>
  );
}
