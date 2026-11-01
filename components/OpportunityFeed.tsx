"use client";

import { useMemo, useState } from "react";
import type { Opportunity, OpportunityType } from "@/data/types";
import { FilterChips } from "@/components/FilterChips";
import { OpportunityCard } from "@/components/OpportunityCard";
import { daysUntil } from "@/lib/dates";

// The feed: filter chips on top, a grid of cards below.
//
// How the filtering works:
// 1. `selectedType` remembers which chip is active (null = All).
// 2. We start from the list we were given, drop rejected and expired listings,
//    then keep only the ones matching the chosen type.
// 3. We sort so the soonest deadline comes first (deadline-first is the point).
// useMemo just avoids redoing this work when nothing changed.
export function OpportunityFeed({ opportunities }: { opportunities: Opportunity[] }) {
  const [selectedType, setSelectedType] = useState<OpportunityType | null>(null);

  const visible = useMemo(() => {
    return opportunities
      .filter((o) => o.status !== "rejected") // rejected listings never show in the feed
      .filter((o) => daysUntil(o.deadline) >= 0) // hide closed listings
      .filter((o) => selectedType === null || o.type === selectedType)
      .sort((a, b) => a.deadline.localeCompare(b.deadline)); // ISO dates sort correctly as text
  }, [opportunities, selectedType]);

  return (
    <div className="flex flex-col gap-4">
      <FilterChips selected={selectedType} onChange={setSelectedType} />

      <p className="text-sm text-muted" aria-live="polite">
        {visible.length} {visible.length === 1 ? "opportunity" : "opportunities"}
        {selectedType ? ` in ${selectedType}` : ""}, soonest deadline first
      </p>

      {visible.length === 0 ? (
        <div className="rounded-card border border-line bg-card p-6 text-center text-muted">
          Nothing open in this category right now. Try another filter.
        </div>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((o) => (
            <li key={o.id}>
              <OpportunityCard opportunity={o} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
