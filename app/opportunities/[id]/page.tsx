import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, ExternalLink, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { getOpportunityById } from "@/data/opportunities";
import { deadlineCountdown, formatDeadline, isClosingSoon } from "@/lib/dates";

// Next.js 15 passes `params` as a Promise, so we await it.
type Props = { params: Promise<{ id: string }> };

// Gives each listing its own title and description when a link is shared on WhatsApp.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const o = getOpportunityById(id);
  if (!o) return { title: "Not found" };
  return {
    title: o.title,
    description: `${o.type} at ${o.organisation}. Deadline ${formatDeadline(o.deadline)}.`,
  };
}

export default async function OpportunityPage({ params }: Props) {
  const { id } = await params;
  const o = getOpportunityById(id);
  if (!o) notFound(); // unknown id shows the 404 page

  const closingSoon = isClosingSoon(o.deadline);
  const canApply = o.status !== "rejected";

  return (
    <article className="mx-auto flex max-w-2xl flex-col gap-5">
      <Link
        href="/"
        className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to all opportunities
      </Link>

      <header className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-line px-2.5 py-1 text-xs font-semibold">{o.type}</span>
          <VerifiedBadge status={o.status} />
        </div>
        <h1 className="text-2xl font-bold leading-tight sm:text-3xl">{o.title}</h1>
        <p className="text-muted">{o.organisation}</p>
      </header>

      {/* Deadline is the first thing a student needs to see */}
      <section className="flex items-center gap-3 rounded-card border border-line bg-card p-4">
        <CalendarDays className="size-6 shrink-0 text-primary" aria-hidden="true" />
        <div>
          <p className="text-sm text-muted">Deadline</p>
          <p className="font-bold">
            {formatDeadline(o.deadline)}{" "}
            <span
              className={
                closingSoon ? "font-semibold text-warning" : "font-normal text-muted"
              }
            >
              ({deadlineCountdown(o.deadline)})
            </span>
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold">About this opportunity</h2>
        <p className="mt-2 leading-relaxed">{o.description}</p>
      </section>

      <section className="rounded-card border border-line bg-card p-4">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <GraduationCap className="size-5 text-primary" aria-hidden="true" />
          Who can apply
        </h2>
        <p className="mt-2 leading-relaxed">{o.eligibility}</p>
      </section>

      {/* Warning for listings that have not been checked, or failed the check */}
      {o.status === "pending" && (
        <p className="rounded-card bg-warning-bg p-4 text-sm text-warning">
          This listing has not been checked yet. Confirm the details on the original
          site, and never pay to apply.
        </p>
      )}
      {o.status === "rejected" && (
        <p className="rounded-card bg-line p-4 text-sm">
          This listing failed our check, so we are not linking to it.
        </p>
      )}

      {canApply && (
        <Button asChild size="lg" className="w-full">
          {/* External link: opens in a new tab; noopener/noreferrer is a safety habit */}
          <a href={o.originalLink} target="_blank" rel="noopener noreferrer">
            Apply on original site
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </Button>
      )}
    </article>
  );
}
