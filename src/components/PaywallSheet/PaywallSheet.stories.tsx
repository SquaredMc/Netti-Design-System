import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button';
import { PaywallSheet } from './PaywallSheet';
import '../../tokens.css';

const meta: Meta<typeof PaywallSheet> = {
  title: 'Components/PaywallSheet',
  component: PaywallSheet,
  parameters: {
    docs: {
      description: {
        component:
          'Pro paywall bottom sheet using `vaul` Drawer for drag-to-dismiss. ' +
          '`priceFormatted` must always come from RevenueCat at runtime — never hard-code a price. ' +
          'The feature list is fully configurable via the `features` prop.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof PaywallSheet>;

/** Triggered by a button — open and close the sheet interactively. */
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="pro" onClick={() => setOpen(true)}>
          Open Paywall
        </Button>
        <PaywallSheet
          open={open}
          onOpenChange={setOpen}
          priceFormatted="£9.99"
          priceNote="one-off · no subscription"
          onPurchase={() => alert('Purchase initiated')}
          onRestore={() => alert('Restore initiated')}
        />
      </>
    );
  },
};

/**
 * Sheet forced open with `isPurchasing=true` — the CTA shows a loading label
 * and is disabled. Use this to validate the purchasing state in isolation.
 */
export const Purchasing: Story = {
  render: () => (
    <PaywallSheet
      open={true}
      onOpenChange={() => {}}
      priceFormatted="£9.99"
      onPurchase={() => {}}
      onRestore={() => {}}
      isPurchasing={true}
    />
  ),
};

/** Custom feature list — replace the defaults for a different product or A/B test. */
export const CustomFeatures: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="pro" onClick={() => setOpen(true)}>
          Open Paywall (custom features)
        </Button>
        <PaywallSheet
          open={open}
          onOpenChange={setOpen}
          priceFormatted="£14.99"
          priceNote="per year · cancel any time"
          features={[
            { title: 'Unlimited calculations',  description: 'No monthly caps',           state: 'active'   },
            { title: 'Export to PDF',            description: 'Download your breakdown',   state: 'active'   },
            { title: 'Multi-currency support',   description: 'Coming soon',               state: 'inactive' },
          ]}
          onPurchase={() => alert('Purchase')}
          onRestore={() => alert('Restore')}
        />
      </>
    );
  },
};
