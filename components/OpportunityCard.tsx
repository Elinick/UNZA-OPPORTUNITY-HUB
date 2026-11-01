import Link from "next/link";
import { CalendarDays } from "lucide-react";
import type { Opportunity } from "@/data/types";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { deadlineCountdown, formatDeadline, isClosingSoon } from "@/lib/dates";

// One listing in the feed. The whole card is a link to the detail page.
// Shows: type, title, organisation, deadline, and the Verified state.
export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  const { id, title, type, organisation, deadline, status } = opportunity;
  const closingSoon = isClosingSoon(deadline);

  return (
    <Link
      href={`/opportunities/${id}`}
      className="flex h-full flex-col gap-3 rounded-card border border-line bg-card p-4 transition-shadow hover:shadow-md"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-full bg-line px-2.5 py-1 text-xs font-semibold text-ink">
          {type}
        </span>
        <VerifiedBadge status={status} />
      </div>

      <div>
        <h3 className="text-base font-bold leading-snug">{title}</h3>
        <p className="mt-1 text-sm text-muted">{organisation}</p>
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-2 text-sm">
        <CalendarDays className="size-4 text-muted" aria-hidden="true" />
        <span className="text-muted">Deadline {formatDeadline(deadline)}</span>
        {closingSoon ? (
          <span className="rounded-full bg-warning-bg px-2 py-0.5 text-xs font-semibold text-warning">
            Closing soon · {deadlineCountdown(deadline)}
          </span>
        ) : null}
      </div>
    </Link>
  );
}
