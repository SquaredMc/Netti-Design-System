# AGENTS.md

Guidance for AI agents working in **`@netti/design-system`** — the tokens + React
component library that is the working implementation of the Netti Figma design system.

The golden rule: **Figma is the source of truth.** Components and tokens here exist to
match the Figma DS exactly, visually and behaviourally. When code and Figma disagree,
Figma wins (verify the *live variable*, not stale documentation — see
[Figma sync](#figma-is-the-source-of-truth)).

---

## Setup & commands

```bash
npm install            # install deps
npm run build          # build:tokens -> vite build -> copy tokens.css to dist
npm run build:tokens   # regenerate src/tokens.css + src/tokens.ts from src/tokens/*.json
npm run storybook      # dev Storybook on http://localhost:6006
npm run type-check     # tsc --noEmit
```

Always finish a change with **`npm run type-check && npm run build`** — both must be clean.
There is no unit-test suite; **Storybook is how you verify a component visually.**

---

## Repository layout

```
src/
  tokens/             # SOURCE token files (W3C DTCG JSON) — edit these
    color.json          # primitives: navy/cyan/blue/green/red/grey/white (hue + numeric)
    semantic.color.json # semantic roles: background/text/action/border/status (alias primitives)
    semantic.spacing.json # layout/card/sheet/button/toggle/listRow spacing
    spacing.json radius.json shadow.json typography.json
  tokens.css          # GENERATED — do not edit by hand (style-dictionary output)
  tokens.ts           # GENERATED — do not edit by hand
  components/<Name>/
    <Name>.tsx          # component + exported prop types
    <Name>.module.css   # styles — reference --netti-* CSS variables only
    <Name>.stories.tsx  # Storybook stories
  index.ts            # public barrel — every component + its prop types re-exported
sd.config.js          # style-dictionary config (prefix: netti)
dist/                 # GENERATED build output (committed; consumers install from git)
```

Token pipeline: `src/tokens/*.json` → `sd.config.js` (style-dictionary) →
`src/tokens.css` (`--netti-*` custom properties) + `src/tokens.ts`. `vite build` then
emits `dist/`.

---

## Token architecture

Two layers, mirroring Figma:

1. **Primitives** (`color.json`) — raw values, named by **hue + numeric weight**:
   `navy.700`, `grey.500`, `cyan.400`, `blue.800`, `white`. Never encode meaning in a
   primitive name (no `navyMid`, no `surface`).
2. **Semantic** (`semantic.color.json`, `semantic.spacing.json`) — roles that **alias**
   primitives: `background.cardSubtle → {color.navy.700}`, `text.muted → {color.grey.500}`.
   Re-theming happens here.

**THE RULE: components bind to semantic tokens only — never primitives.**
In a `.module.css` use `var(--netti-color-background-card-subtle)`, never
`var(--netti-color-navy-700)`. (Figma enforces the same rule.)

### Typography scale (canonical)

`Display 36/40 Bold · H2 28/36 Bold · H3 22/28 SemiBold · Body LG 18/26 SemiBold ·
Body 16/24 Regular · Label 14/20 SemiBold · Caption 12/16 Medium`

`13px/18px` is a legitimate off-scale caption size used by several components
(sub-labels, price notes) — it is intentional, not a mistake.

### Changing a token

1. Edit the relevant `src/tokens/*.json` file (values from Figma — see below).
2. Run `npm run build:tokens` and confirm the resolved value in `src/tokens.css`.
3. If you add a primitive, add a semantic alias for it; if you add a semantic, alias an
   existing primitive (don't hard-code hex in the semantic layer).

---

## Working with components

- One folder per component: `tsx` + `module.css` + `stories.tsx`. CSS Modules only.
- Typed props via an exported `interface <Name>Props`; export the component **and** its
  prop types from `src/index.ts`.
- Styling: CSS Modules referencing `--netti-*` semantic variables. No inline hex, no
  Tailwind, no CSS-in-JS.
- Accessibility is expected: semantic elements, `aria-*`, roving `tabIndex` for composite
  widgets, visible `:focus-visible` rings (use `--netti-color-border-focus`).
- Bottom sheets are built on **`vaul`** (`Drawer`) — see `PaywallSheet`, `IncomeTypePicker`,
  `BottomSheet` for the pattern (controlled `open` / `onOpenChange`, optional `trigger`).

### Adding a component

1. Create `src/components/<Name>/<Name>.{tsx,module.css,stories.tsx}`.
2. Build it from the Figma node (exact spacing, sizes, token bindings).
3. Export it (and its props type) from `src/index.ts`, in the right section.
4. `npm run type-check && npm run build`, then verify the story in Storybook.

---

## Figma is the source of truth

- **Canonical file key:** `5B4rIQnhvhdvofFFcjQXOo` ("Netti-Design-System") — contains both
  the Tokens page and all component pages. Do **not** use other Netti files.
- Use the Figma MCP: `get_design_context` + `get_screenshot` for components,
  `get_variable_defs` for token values, `get_metadata` to locate node ids.
- **Trust the live variable, not the documentation.** The Tokens page swatches are
  hand-made and can be stale — always confirm a value with `get_variable_defs` (it returns
  the resolved variable). The swatch labels have drifted before.
- `get_design_context` reads the Figma **desktop app's active document/selection**, so the
  file must be open (and a layer selected) for it to resolve a node; `get_metadata` and
  `get_screenshot` work by file key alone.
- Editing Figma (e.g. fixing a stale swatch) is done via `use_figma` (Plugin-API JS). Make
  targeted, verified edits; read variables first to avoid corrupting correct tokens.

---

## Conventions & guardrails

**Do**
- Match Figma exactly; cite the node id in comments/commits when fixing a spec.
- Keep `dist/` committed and in sync — run `npm run build` before committing.
- Use semantic tokens in components; alias primitives in the semantic layer.

**Don't**
- Edit `src/tokens.css` / `src/tokens.ts` / `dist/` by hand (they're generated).
- Reference primitive variables from a component.
- Hard-code hex/spacing in component CSS or in semantic tokens.
- Add Tailwind or CSS-in-JS.

---

## Verifying & releasing

- **Verify:** `npm run type-check && npm run build` clean, then eyeball the affected
  component(s) in Storybook (`npm run storybook`).
- **Release:** bump `package.json`, `npm run build`, commit, merge to `main`, then tag
  `vX.Y.Z` and push the tag (consumers pin to a git tag). In `0.x`, a breaking token/API
  change is a minor bump.
