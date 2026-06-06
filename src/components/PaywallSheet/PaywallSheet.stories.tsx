import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button';
import { PaywallSheet } from './PaywallSheet';

const meta: Meta<typeof PaywallSheet> = {
  title: 'Components/PaywallSheet',
  component: PaywallSheet,
  parameters: {
    docs: {
      description: {
        component:
          'Pro paywall bottom sheet. Accepts priceFormatted at runtime from RevenueCat — never hard-codes a price. Features list is configurable.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof PaywallSheet>;

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
          onPurchase={() => alert('Purchase')}
          onRestore={() => alert('Restore')}
        />
      </>
    );
  },
};

export const Purchasing: Story = {
  render: () => {
    return (
      <PaywallSheet
        open={true}
        onOpenChange={() => {}}
        priceFormatted="£9.99"
        onPurchase={() => {}}
        onRestore={() => {}}
        isPurchasing={true}
      />
    );
  },
};
