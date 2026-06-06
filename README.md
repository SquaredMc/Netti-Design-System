# Netti Design System

React component library and design token system for Netti and future products.

## Installation

```bash
npm install @netti/design-system
```

## Setup

Import the token stylesheet once in your app root, before any components:

```tsx
// main.tsx or App.tsx
import '@netti/design-system/tokens.css';
```

## Usage

```tsx
import { Button, SalaryCard, PaywallSheet } from '@netti/design-system';

function App() {
  return (
    <Button variant="pro" fullWidth onClick={handleUnlock}>
      Unlock Netti Pro
    </Button>
  );
}
```

## Token Architecture

Two-layer system — all components reference **semantic** tokens only:

```
Primitives  →  Semantic  →  Component
#26D4EB        action/primary-bg    Button[variant=pro] background
#010045        action/primary-text  Button[variant=pro] color
```

**To re-theme for a new product**, override the semantic layer in your own CSS:

```css
:root {
  --netti-color-action-primary-bg:   #your-accent;
  --netti-color-action-primary-text: #your-on-accent;
  /* ... other semantic overrides */
}
```

Primitive values stay unchanged. No component code needs to change.

## Component overview

| Component | Description |
|---|---|
| `Button` | 5 variants: `pro`, `primary`, `secondary`, `ghost`, `text` |
| `SegmentedControl` | Period toggle — 2–4 options, `dark`/`light` context |
| `SalaryCard` | Dark navy salary display. Switches to Pro state with income badge |
| `AdditionalIncomeCard` | Dark navy income list card. Empty and has-items states |
| `ListRow` | Single income item row — label, amount, remove button |
| `FeatureRow` | Paywall feature line — Tick + title + description |
| `Tick` | 22px circle checkmark — `active` or `inactive` |
| `PaywallSheet` | Pro paywall bottom sheet — price pulled at runtime |
| `MoneyRow` | Label + formatted currency amount row |
| `InputField` | Text/number input with prefix, suffix, focus state |
| `Select` | Custom dropdown with portal positioning |
| `BottomSheet` | Drag-to-dismiss sheet (vaul) |
| `FullScreenSheet` | Full-screen overlay sheet |
| `BottomNav` | Tab bar navigation |
| `NettiLogo` | SVG wordmark |
| `AdSlot` | Ad placeholder |

## Accessibility

- All interactive elements have focus-visible styles using `--netti-color-border-focus`
- `SegmentedControl` supports arrow key navigation
- `text/muted` (`--netti-color-neutral-500`, `#6B7280`) meets WCAG AA 4.5:1 on white
- `PaywallSheet` uses Drawer.Title and Drawer.Description for screen reader labelling

## Storybook

```bash
npm run storybook
```

## Build

```bash
npm run build
```
