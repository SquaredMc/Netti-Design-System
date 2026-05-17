import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './FullScreenSheet.css';

interface FullScreenSheetProps {
  title?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBack?: () => void;
  children?: ReactNode;
  footer?: ReactNode;
  hideClose?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function FullScreenSheet({
  title,
  open,
  onOpenChange,
  onBack,
  children,
  footer,
  hideClose,
  onOpen,
  onClose,
}: FullScreenSheetProps) {
  useEffect(() => {
    if (open) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="fss-root">
      <div className="fss-title-bar">
        {onBack ? (
          <button type="button" className="fss-nav-btn" onClick={onBack} aria-label="Back">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : (
          <div className="fss-spacer" />
        )}
        {title && <div className="fss-title">{title}</div>}
        {hideClose ? (
          <div className="fss-spacer" />
        ) : (
          <button type="button" className="fss-nav-btn" onClick={() => onOpenChange(false)} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
      <div className={`fss-body ${footer ? 'fss-body--with-footer' : 'fss-body--no-footer'}`}>
        {children}
      </div>
      {footer && <div className="fss-footer">{footer}</div>}
    </div>,
    document.body
  );
}
