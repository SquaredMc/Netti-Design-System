import { ReactNode, useEffect, useRef } from 'react';
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
  // Fire onOpen/onClose only on real open-state transitions, not on mount,
  // so an initially-closed sheet doesn't emit a phantom onClose.
  const prevOpen = useRef(open);
  useEffect(() => {
    if (open === prevOpen.current) return;
    prevOpen.current = open;
    if (open) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [open]);

  // Keyboard avoidance. Capacitor's Keyboard.resize is set to 'none', so
  // WKWebView never shrinks the layout viewport when the keyboard shows —
  // it just overlays it, hiding this sheet's fixed footer. window.visualViewport
  // does shrink/pan live even with native resize disabled, so we track it
  // directly and resize+reposition the sheet to match the visible area,
  // pushing the footer up above the keyboard instead of letting it cover it.
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const vv = window.visualViewport;
    const root = rootRef.current;
    if (!vv || !root) return;
    const applyViewport = () => {
      root.style.height = `${vv.height}px`;
      root.style.top = `${vv.offsetTop}px`;
    };
    applyViewport();
    vv.addEventListener('resize', applyViewport);
    vv.addEventListener('scroll', applyViewport);
    return () => {
      vv.removeEventListener('resize', applyViewport);
      vv.removeEventListener('scroll', applyViewport);
      root.style.height = '';
      root.style.top = '';
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="fss-root" ref={rootRef}>
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
