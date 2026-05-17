import './SegmentedControl.css';

interface SegmentedControlProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SegmentedControl({ options, value, onChange, className = '' }: SegmentedControlProps) {
  return (
    <div className={`ds-segmented-control ${className}`} role="tablist">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="tab"
          aria-selected={value === option.value}
          className={`ds-segment ${value === option.value ? 'ds-segment--selected' : ''}`}
          onClick={() => onChange(option.value)}
          data-testid={`segment-${option.value}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
