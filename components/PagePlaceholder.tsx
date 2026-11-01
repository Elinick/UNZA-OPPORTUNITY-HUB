// Temporary content for pages that a teammate will build.
// Delete this file once every page has real content.
export function PagePlaceholder({
  title,
  owner,
  note,
}: {
  title: string;
  owner: string;
  note: string;
}) {
  return (
    <section className="rounded-card border border-line bg-card p-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-muted">{note}</p>
      <p className="mt-4 text-sm text-muted">
        Owner: <strong className="text-ink">{owner}</strong>
      </p>
    </section>
  );
}
