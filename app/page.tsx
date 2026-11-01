import { OpportunityFeed } from "@/components/OpportunityFeed";
import { opportunities } from "@/data/opportunities";

// Home / feed. Reads the fake data for now (swapped for the database in Phase 2).
export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <section>
        <h1 className="text-2xl font-bold sm:text-3xl">Opportunities for UNZA students</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Every listing shows its deadline up front and links to the original ad.
          Look for the Verified badge.
        </p>
      </section>
      <OpportunityFeed opportunities={opportunities} />
    </div>
  );
}
