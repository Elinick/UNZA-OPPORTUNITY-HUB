"use client";

import { OPPORTUNITY_TYPES, type OpportunityType } from "@/data/types";
import { cn } from "@/lib/utils";

// Row of buttons for filtering the feed by type. "All" clears the filter.
// On a phone the row scrolls sideways instead of wrapping.
// selected = null means "All".
export function FilterChips({
  selected,
  onChange,
}: {
  selected: OpportunityType | null;
  onChange: (type: OpportunityType | null) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Filter by type"
      className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1"
    >
      <Chip label="All" active={selected === null} onClick={() => onChange(null)} />
      {OPPORTUNITY_TYPES.map((type) => (
        <Chip
          key={type}
          label={type}
          active={selected === type}
          onClick={() => onChange(type)}
        />
      ))}
    </div>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "min-h-11 shrink-0 cursor-pointer rounded-full border px-4 text-sm font-semibold transition-colors",
        active
          ? "border-primary bg-primary text-primary-ink"
          : "border-line bg-card text-ink hover:bg-line/50",
      )}
    >
      {label}
    </button>
  );
}
