import type React from "react";

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
};

/** Presentational, accessible tablist for filtering the project list. */
export function ProjectTabs({ tabs, active, onChange, label }: Props): React.ReactElement {
  return (
    <div role="tablist" aria-label={label} className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const selected = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(tab.id)}
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
