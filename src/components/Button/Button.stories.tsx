import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import '../../tokens.css';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Primary interactive element. Five variants map directly to the Figma Button component set. ' +
          'All colours reference semantic tokens — re-theme by swapping the token layer. ' +
          '`ghost` is the only variant that must be used on a dark (navy) surface.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['pro', 'primary', 'secondary', 'ghost', 'text'],
      description: '`ghost` requires a dark surface — use inside a navy card only.',
    },
    size: { control: 'radio', options: ['lg', 'md'], description: '`lg` = 42 px height, `md` = 34 px.' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    variant: 'pro',
    size: 'lg',
    fullWidth: false,
    disabled: false,
    children: 'Unlock Netti Pro',
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

/** Cyan fill, navy text. Primary CTA — paywall and unlock flows. */
export const Pro: Story = {
  args: { variant: 'pro', children: 'Unlock Netti Pro' },
};

/** White fill, cyan border. Confirm / secondary action on a light surface. */
export const Primary: Story = {
  args: { variant: 'primary', children: 'See details' },
};

/** White fill, grey border. Cancel / restore / low-priority action. */
export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Restore purchases' },
};

/**
 * Translucent white fill, cyan text — only used on dark (navy) card surfaces.
 * The "+ Add income" pill inside AdditionalIncomeCard is the canonical use-case.
 */
export const Ghost: Story = {
  args: { variant: 'ghost', size: 'md', children: '+ Add income' },
  decorators: [
    (Story) => (
      <div
        style={{
          background: 'var(--netti-color-background-card)',
          padding: 'var(--netti-card-padding)',
          borderRadius: 'var(--netti-card-border-radius)',
          display: 'inline-flex',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: { backgrounds: { default: 'navy' } },
};

/** No fill or border. Inline tertiary action (e.g. "Learn more"). */
export const Text: Story = {
  args: { variant: 'text', children: 'Learn more' },
};

/** All five variants in one view. Ghost is wrapped in its required dark surface. */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 300 }}>
      <Button variant="pro"       size="lg" fullWidth>Unlock Netti Pro</Button>
      <Button variant="primary"   size="lg" fullWidth>See details</Button>
      <Button variant="secondary" size="lg" fullWidth>Restore purchases</Button>
      <Button variant="text"      size="lg" fullWidth>Learn more</Button>
      <div
        style={{
          background: 'var(--netti-color-background-card)',
          padding: 10,
          borderRadius: 'var(--netti-card-border-radius)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button variant="ghost" size="md">+ Add income</Button>
      </div>
    </div>
  ),
};

/** Large (42 px) vs Medium (34 px) side-by-side. */
export const BothSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <Button variant="pro" size="lg">Large — 42 px</Button>
      <Button variant="pro" size="md">Medium — 34 px</Button>
    </div>
  ),
};

/** Disabled state reduces opacity and blocks interaction on all variants. */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 280 }}>
      <Button variant="pro"       size="lg" disabled fullWidth>Pro (disabled)</Button>
      <Button variant="primary"   size="lg" disabled fullWidth>Primary (disabled)</Button>
      <Button variant="secondary" size="lg" disabled fullWidth>Secondary (disabled)</Button>
    </div>
  ),
};

/** Full-width layout — fills its container, used for sheet CTAs. */
export const FullWidth: Story = {
  args: { variant: 'pro', fullWidth: true, children: 'Unlock Netti Pro' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
