# @netti/design-system

Netti's standalone design system — design tokens and React components, built to be shared across multiple products.

## Packages

| Entrypoint | Contents |
|---|---|
| `@netti/design-system` | All React components + TypeScript types |
| `@netti/design-system/tokens.css` | CSS custom properties (`:root` vars) |
| `@netti/design-system/style.css` | Bundled component CSS |

## Getting started

```bash
npm install @netti/design-system
```

```tsx
import { Button, Card, InputField } from '@netti/design-system';
import '@netti/design-system/tokens.css';
import '@netti/design-system/style.css';
```

## Components

| Component | Description |
|---|---|
| `Button` | Secondary/utility button with optional left icon |
| `PrimaryButton` | Brand primary action button (cyan) |
| `Card` | Surface container with optional title/subtitle header |
| `InputField` | Labelled text or number input with prefix/suffix adornments |
| `Select` | Custom dropdown with smart portal positioning |
| `SegmentedControl` | Multi-option tab bar (2–5 options) |
| `Switch` | Binary On/Off toggle |
| `MoneyRow` | Currency row for financial breakdowns, with `Divider` |
| `BottomNav` | Mobile navigation bar |
| `BottomSheet` | Vaul-based bottom sheet drawer |
| `FullScreenSheet` | Full-screen overlay modal |
| `InfoSheet` | Vaul-based info/read-only drawer |
| `AdSlot` | Placeholder component for mobile ad banner slots |
| `NettiLogo` | Netti SVG wordmark |

## Design tokens

Tokens are defined in W3C DTCG format (`src/tokens/*.json`) and built to CSS custom properties via Style Dictionary.

```bash
npm run build:tokens   # regenerates src/tokens.css from JSON source
```

The token namespace uses `--{category}-{name}` (e.g. `--surface-1`, `--text-2`, `--space-16`).

## Development

```bash
npm install
npm run dev        # Storybook on :6006
npm run build      # Production build to dist/
```

## Multi-product usage

`BottomSheet` and `FullScreenSheet` expose `onOpen` / `onClose` callbacks instead of coupling to any ad SDK — wire these up to your own analytics or ad lifecycle logic per product.

`MoneyRow` accepts `currency` and `locale` props (defaults: `GBP`, `en-GB`) for localisation.
