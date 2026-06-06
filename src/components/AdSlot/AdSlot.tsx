import './AdSlot.css';

interface AdSlotProps {
  className?: string;
}

export function AdSlot({ className = '' }: AdSlotProps) {
  return (
    <div className={`ds-ad-slot ${className}`} data-testid="ad-slot">
      <svg className="ds-ad-slot-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <line x1="1" y1="5" x2="15" y2="5" stroke="currentColor" strokeWidth="1.2" />
        <line x1="5" y1="5" x2="5" y2="15" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="ds-ad-slot-text">Ad Slot Placeholder</span>
    </div>
  );
}
