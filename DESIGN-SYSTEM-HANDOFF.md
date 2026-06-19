# Handoff: Netti Design System ↔ Figma sync

## Goal for the new chat
Make this **`@netti/design-system` repo** the faithful, working implementation of the Figma
design system — every component matches its Figma spec visually and behaviourally, and the
repo's tokens equal Figma's variables. Work happens **in this DS repo**, not the Netti app.

## Repos
| | Path | State |
|---|---|---|
| Design System | `~/Documents/GitHub/Netti-Design-System` (`SquaredMc/Netti-Design-System`) | On `main` @ `3bdf240` (v0.2.0), working tree clean |
| Netti app | `~/Documents/GitHub/Netti` (`netti-ui-002` branch) | Consumes the DS as a git dependency |

## What was done in the prior session
- **Netti app migrated from a local vendored design system to the `@netti/design-system`
  package** — all `@/design-system` imports → `@netti/design-system`, full page-CSS token
  migration to `--netti-*`, local DS folder deleted, AdMob sheet behaviour preserved via a
  wrapper, `DrawerClose` coupling removed. App `tsc` + build pass.
- The package is **not on npm** → installed from GitHub. **`client/.env`** (not root `.env`)
  is what Vite reads; it holds `VITE_REVENUECAT_IOS_KEY` and `VITE_FORCE_PRO` (forces the Pro
  layout in-browser — left at `false`; was `true`).
- Built a free **Calculate screen** in the app matching Figma (gradient + dark SalaryCard +
  cyan CTA + take-home sheet), verified via dev-server screenshots.
- Built `SalaryCard`/`AdditionalIncomeCard`/`ListRow` + a `Button` `pro` variant on a DS
  branch — **then found `main` already had better versions** (CSS Modules, exported prop
  types, plus `FeatureRow`/`Tick`/`PaywallSheet`, an Inter-font fix, and a Figma→code audit).
  **Closed that PR (#1) unmerged** and synced local to `main`. The parallel work was discarded
  in favour of main.
- Gated the Replit runtime-error overlay behind `REPL_ID` in the app's `vite.config.ts`.

## Current state of this DS repo (`main`)
- **CSS Modules** convention: `src/components/<Name>/<Name>.{tsx, module.css, stories.tsx}`,
  barrelled in `src/index.ts` with exported prop types.
- Components present: `AdSlot, AdditionalIncomeCard, BottomNav, BottomSheet, Button, Card,
  FeatureRow, FullScreenSheet, InfoSheet, InputField, ListRow, MoneyRow, NettiLogo,
  PaywallSheet, PrimaryButton, SalaryCard, SegmentedControl, Select, Switch, Tick`.
- **Token pipeline**: `src/tokens/*.json` (W3C DTCG) → style-dictionary (`sd.config.js`,
  prefix `netti`) → `src/tokens.css` (`--netti-*`) **and** `build/figma-tokens.json`.
  Build: `npm run build`. Storybook: `npm run storybook`.
- Tokens already expanded on main (e.g. `--netti-color-background-{card,card-border,
  card-subtle,screen,surface,surface-raised}`, `--netti-color-brand-{navy,navy-mid,navy-card,
  blue,cyan,cyan-light}`).

## What the new chat should do
1. **Load the React best-practices skill** in this repo:
   `npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices`
   (currently installed only under the Netti project's `.claude/skills/`).
2. **Token reconciliation (Figma-led):** pull Figma variables via the Figma MCP
   (`get_variable_defs`) and make `src/tokens/*.json` match Figma exactly. Figma is the source
   of truth for values.
3. **Component-by-component audit** against Figma using the Figma MCP (`get_design_context` +
   `get_screenshot`): fix visual mismatches, verify each in Storybook, apply React best
   practices (typed props, a11y, no dead state, etc.).
4. **Cut a release:** tag `v0.2.0` (or next) on `main` and push it, so apps pin to a tag.

## Figma reference (file key `Zki7Mz67e4sISMfrIvUDM4`, "Netti – Phase 2")
- Free Calculate: node `27-4033` (frame `27:6080`; **Salary Card `27:6085`**, add-income
  button `27:6086`)
- Paywall flow: node `27-6295`
- Pro post-purchase: node `27-7716` (Pro Calculate `18:6601`; **Additional Income Card
  `18:6607`** has-items, `27:7748` empty; Bonus/Overtime add pages `27:8096`/`27:8099`)
- Adding more income: node `34-5014`

## Gotchas
- **Netti currently pins the DS to a dead commit** (`#7fb19584…`, on the deleted branch). A
  fresh `npm install` in Netti won't resolve it. Repoint to `main` (`3bdf240`) or the new
  tag — but that's the **Netti app chat's** job, not the DS chat.
- **main's component APIs differ** from what the Netti app currently calls (e.g. `SalaryCard`
  takes `salaryFormatted: string`, not an editable input child; `Button` uses
  `variant`/`size`/`icon`/`fullWidth`; `AdditionalIncomeCard` takes `items[]`). Adapting the
  app is a separate, later task.
- The app's salary figure must be an **editable input**, but main's `SalaryCard` renders a
  formatted string — decide in the DS whether `SalaryCard` should support an input slot.
