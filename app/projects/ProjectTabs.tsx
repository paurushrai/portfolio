import type React from "react";
import { useRef } from "react";

/** Stable identifiers for the project filter tabs. */
export type CompanyTabId = "all" | "testlify" | "fuelbuddy" | "modocosm" | "personal";

/**
 * Maps a project's English `company` value to a tab id. Keyed on the English
 * company (not the localized one) so filtering stays consistent across locales,
 * where "Personal Project" is translated per language.
 */
const COMPANY_TO_TAB: Record<string, Exclude<CompanyTabId, "all">> = {
  Testlify: "testlify",
  FuelBuddy: "fuelbuddy",
  Modocosm: "modocosm",
  "Personal Project": "personal",
};

export function companyToTabId(company?: string): Exclude<CompanyTabId, "all"> | null {
  if (!company) return null;
  return COMPANY_TO_TAB[company] ?? null;
}

export type ProjectTab = { id: CompanyTabId; label: string };

type Props = {
  tabs: readonly ProjectTab[];
  active: CompanyTabId;
  onChange: (id: CompanyTabId) => void;
  label: string;
  /** id of the panel these tabs control, for `aria-controls`. */
  panelId?: string;
};

/** Presentational, accessible tablist for filtering the project list. */
export function ProjectTabs({
  tabs,
  active,
  onChange,
  label,
  panelId,
}: Props): React.ReactElement {
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // APG tabs pattern: arrow keys move + auto-activate, Home/End jump to ends.
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const lastIndex = tabs.length - 1;
    let nextIndex: number | null = null;
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = index === lastIndex ? 0 : index + 1;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = index === 0 ? lastIndex : index - 1;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = lastIndex;
        break;
      default:
        return;
    }
    e.preventDefault();
    onChange(tabs[nextIndex].id);
    buttonsRef.current[nextIndex]?.focus();
  };

  return (
    <div role="tablist" aria-label={label} className="flex flex-wrap gap-2">
      {tabs.map((tab, index) => {
        const selected = tab.id === active;
        return (
          <button
            key={tab.id}
            ref={(el) => {
              buttonsRef.current[index] = el;
            }}
            type="button"
            role="tab"
            id={`project-tab-${tab.id}`}
            aria-selected={selected}
            aria-controls={panelId}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium duration-150 ring-1 ring-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-100 ${
              selected
                ? "bg-zinc-100 text-zinc-900 ring-zinc-100"
                : "bg-transparent text-zinc-400 ring-zinc-800 hover:text-zinc-100 hover:ring-zinc-600"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
