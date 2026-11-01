import { BadgeCheck, Clock, XCircle } from "lucide-react";
import type { OpportunityStatus } from "@/data/types";
import { cn } from "@/lib/utils";

// Small pill showing a listing's verification state.
// Used on cards, detail pages and "My submissions".
// Text is always shown (not just colour), so it is clear to everyone.
const CONFIG = {
  verified: {
    label: "Verified",
    Icon: BadgeCheck,
    className: "bg-primary/10 text-primary",
  },
  pending: {
    label: "Not yet verified",
    Icon: Clock,
    className: "bg-warning-bg text-warning",
  },
  rejected: {
    label: "Rejected",
    Icon: XCircle,
    className: "bg-line text-muted",
  },
} as const;

export function VerifiedBadge({ status }: { status: OpportunityStatus }) {
  const { label, Icon, className } = CONFIG[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
        className,
      )}
    >
      <Icon className="size-3.5" aria-hidden="true" />
      {label}
    </span>
  );
}
