import { CSSProperties, ReactNode, useCallback, useState } from 'react';
import { Drawer } from 'vaul';
import styles from './Sheet.module.css';

/**
 * Sheet
 *
 * A product-agnostic bottom sheet primitive. Unlike BottomSheet (which is
 * Netti-flavoured with a prescribed title bar), Sheet is pure slots:
 * `header`, `children` (body) and `footer` — compose whatever you need.
 *
 * Theming is via `--sheet-*` CSS custom properties, each falling back to the
 * Netti token, then a hard-coded default — so it works standalone, inside
 * Netti, or fully re-themed:
 *   --sheet-surface, --sheet-overlay, --sheet-radius, --sheet-shadow,
 *   --sheet-handle, --sheet-padding-x, --sheet-padding-top,
 *   --sheet-padding-bottom, --sheet-gap, --sheet-max-height
 *
 * Controlled (`open` + `onOpenChange`) or uncontrolled (via `trigger`).
 * Built on vaul for drag-to-dismiss.
 */

export interface SheetProps {
  /** Controlled open state. Omit to run uncontrolled (driven by `trigger`). */
  open?: boolean;
  /** Called when the open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Element that opens the sheet (uncontrolled, or alongside controlled). */
  trigger?: ReactNode;
  /** Top slot — title bar, close button, etc. Pinned above the body. */
  header?: ReactNode;
  /** Main content — scrolls when it overflows. */
  children?: ReactNode;
  /** Bottom slot — actions. Pinned below the scrolling body. */
  footer?: ReactNode;
  /** Show the drag handle. Default true. */
  showHandle?: boolean;
  /** Accessible name for the dialog (a visually-hidden title). */
  'aria-label'?: string;
  /** Extra class on the content panel. */
  className?: string;
  /**
   * Theming / inline styles. Applied to BOTH the overlay and the content so
   * `--sheet-*` custom properties resolve through vaul's portal (which renders
   * to document.body, escaping React-tree variable scope). Intended for the
   * `--sheet-*` theming variables.
   */
  style?: CSSProperties;
}

// Static — hoisted so the node isn't recreated each render (rendering-hoist-jsx).
const dragHandle = <div className={styles.handle} aria-hidden="true" />;

export function Sheet({
  open: controlledOpen,
  onOpenChange,
  trigger,
  header,
  children,
  footer,
  showHandle = true,
  'aria-label': ariaLabel = 'Sheet',
  className,
  style,
}: SheetProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const handleOpenChange = useCallback(
    (next: boolean) => {
      if (isControlled) onOpenChange?.(next);
      else setInternalOpen(next);
    },
    [isControlled, onOpenChange],
  );

  return (
    <Drawer.Root open={open} onOpenChange={handleOpenChange}>
      {trigger ? <Drawer.Trigger asChild>{trigger}</Drawer.Trigger> : null}
      <Drawer.Portal>
        <Drawer.Overlay className={styles.overlay} style={style} />
        <Drawer.Content
          className={[styles.content, className ?? ''].filter(Boolean).join(' ')}
          style={style}
          aria-label={ariaLabel}
        >
          {/* Visually-hidden title satisfies the dialog a11y contract while the
              header slot stays free-form and purely visual. */}
          <Drawer.Title className={styles.srOnly}>{ariaLabel}</Drawer.Title>

          {showHandle ? dragHandle : null}
          {header ? <div className={styles.header}>{header}</div> : null}
          <div className={styles.body}>{children}</div>
          {footer ? <div className={styles.footer}>{footer}</div> : null}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
