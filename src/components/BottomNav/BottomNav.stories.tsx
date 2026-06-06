import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BottomNav } from './BottomNav';
import '../../tokens.css';

/* ── Icons ─────────────────────────────────────────────────────────────────── */

const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
    <polyline
      points="9 22 9 12 15 12 15 22"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="12" y1="20" x2="12" y2="4"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="6"  y1="20" x2="6"  y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
      stroke="currentColor" strokeWidth="1.5"
    />
  </svg>
);

/* ── Data ───────────────────────────────────────────────────────────────────── */

const NAV_ITEMS = [
  { id: 'home',     label: 'Home',     icon: <HomeIcon />     },
  { id: 'results',  label: 'Results',  icon: <ChartIcon />    },
  { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
];

/* ── Meta ───────────────────────────────────────────────────────────────────── */

const meta: Meta<typeof BottomNav> = {
  title: 'Components/BottomNav',
  component: BottomNav,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'white' },
    docs: {
      description: {
        component:
          'Fixed bottom navigation bar. Active item uses `--netti-color-action-selected-border` (navy blue); ' +
          'inactive items use `--netti-color-text-muted`. All items are `<button>` elements for keyboard access.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375, border: '1px solid var(--netti-color-border-default)' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof BottomNav>;

/** Interactive — click tabs to change the active item. */
export const Default: Story = {
  render: () => {
    const [activeId, setActiveId] = useState('home');
    return <BottomNav items={NAV_ITEMS} activeId={activeId} onChange={setActiveId} />;
  },
};

/** Results tab active. */
export const ResultsActive: Story = {
  render: () => <BottomNav items={NAV_ITEMS} activeId="results" onChange={() => {}} />,
};

/** Settings tab active. */
export const SettingsActive: Story = {
  render: () => <BottomNav items={NAV_ITEMS} activeId="settings" onChange={() => {}} />,
};
