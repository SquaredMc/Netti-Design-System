import { ReactNode } from 'react';
import { Drawer } from 'vaul';
import { Button } from '../Button/Button';
import { FeatureRow, FeatureRowProps } from '../FeatureRow/FeatureRow';
import styles from './PaywallSheet.module.css';

/**
 * PaywallSheet
 *
 * Bottom sheet shown when a free user attempts to access a Pro feature.
 * Uses vaul Drawer for native-feeling drag-to-dismiss behaviour.
 *
 * Pull price from the store at runtime — never hard-code it.
 * Analytics events (paywall_shown, paywall_dismissed, pro_purchase_initiated)
 * should be fired by the parent via onShow / onDismiss / onPurchase callbacks.
 */

export interface PaywallFeature extends Pick<FeatureRowProps, 'title' | 'description' | 'state'> {}

export interface PaywallSheetProps {
  /** Control sheet open state from outside */
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Element that opens the sheet (optional — can be controlled externally) */
  trigger?: ReactNode;
  /** Price string pulled from RevenueCat at runtime, e.g. "£9.99" */
  priceFormatted: string;
  /** Note beneath the price, e.g. "one-off · no subscription" */
  priceNote?: string;
  /** Feature rows — ordered as they appear in the sheet */
  features?: PaywallFeature[];
  /** Called when the Unlock CTA is pressed */
  onPurchase: () => void;
  /** Called when the Restore link is pressed */
  onRestore: () => void;
  /** Whether a purchase is in progress (shows loading state on CTA) */
  isPurchasing?: boolean;
}

const DEFAULT_FEATURES: PaywallFeature[] = [
  { title: 'Bonus & overtime modelling', description: 'Model any additional income',     state: 'active'   },
  { title: 'Marginal tax insight',        description: 'See what your next £1 is worth',  state: 'active'   },
  { title: 'Salary comparison',           description: 'Coming soon',                     state: 'inactive' },
];

export function PaywallSheet({
  open,
  onOpenChange,
  trigger,
  priceFormatted,
  priceNote = 'one-off · no subscription',
  features = DEFAULT_FEATURES,
  onPurchase,
  onRestore,
  isPurchasing = false,
}: PaywallSheetProps) {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>}
      <Drawer.Portal>
        <Drawer.Overlay className={styles.overlay} />
        <Drawer.Content className={styles.content} aria-label="Unlock Netti Pro">
          {/* Grabber */}
          <div className={styles.grabber} aria-hidden="true" />

          {/* Headline */}
          <Drawer.Title className={styles.headline}>
            Unlock Netti Pro
          </Drawer.Title>

          {/* Sub-headline */}
          <Drawer.Description className={styles.subhead}>
            See what you actually keep from your bonus, overtime, and every
            extra £1 you earn.
          </Drawer.Description>

          {/* Example callout */}
          <div className={styles.callout} aria-label="Example: £5,000 bonus">
            <span className={styles.calloutLabel}>EXAMPLE  ·  £5,000 BONUS</span>
            <div className={styles.calloutRow}>
              <span className={styles.calloutGross}>£5,000 gross</span>
              <span className={styles.calloutArrow} aria-hidden="true">→</span>
              <span className={styles.calloutNet}>£3,400 take-home</span>
            </div>
          </div>

          {/* Feature rows */}
          <div className={styles.features} role="list" aria-label="Included features">
            {features.map((f, i) => (
              <div key={i} role="listitem">
                <FeatureRow title={f.title} description={f.description} state={f.state} />
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className={styles.divider} aria-hidden="true" />

          {/* Price */}
          <div className={styles.priceRow}>
            <span className={styles.price}>{priceFormatted}</span>
            {priceNote && <span className={styles.priceNote}>{priceNote}</span>}
          </div>

          {/* Unlock CTA */}
          <Button
            variant="pro"
            size="lg"
            fullWidth
            onClick={onPurchase}
            disabled={isPurchasing}
            aria-label="Unlock Netti Pro"
          >
            {isPurchasing ? 'Unlocking…' : 'Unlock Netti Pro'}
          </Button>

          {/* Restore link */}
          <button
            type="button"
            className={styles.restore}
            onClick={onRestore}
          >
            Restore purchases
          </button>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
