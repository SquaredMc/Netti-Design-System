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

### Token files and Swift

The package also ships the token source and a Swift version of it, both built by `sd.config.js`:

- `dist/tokens/*.json`: the DTCG token files (`@netti/design-system/tokens/color.json`).
- `dist/swift/NettiTokens.swift`: every token as Swift constants for the native iOS app
  (`PrimitiveColor`, `SemanticColor`, `ThemeColor`, `Space`, `SemanticSpacing`, `Radius`,
  `Shadow`, `Elevate`, `FontFamily`, `FontWeight`, `FontSize`, `LineHeight`, `TypeStyle`).
  Plain Swift, no imports. The app copies it in; it is never edited by hand.

**Dark mode** (v0.13.0): each semantic colour has a dark-mode value (`dist/tokens/appearance/dark.json`).
In Swift, `SemanticColor` values carry both. In CSS they are opt-in: set `data-appearance="auto"` on
the root element to follow `prefers-color-scheme`. See AGENTS.md, "Dark mode".

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
