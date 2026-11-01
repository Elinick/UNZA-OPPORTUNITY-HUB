# Decisions log

One line each time we change a rule. Newest at the bottom.

- 2026-11-01: Stack changed from the blueprint's "CSS Modules, no UI libraries" to the SafeSpace stack: Next.js 15, TypeScript, Tailwind 4, shadcn/ui-style components, Zustand, Framer Motion, next-themes, Prisma + Neon later. Reason: team lead's choice, faster UI work.
- 2026-11-01: Platform name still undecided. It lives in `lib/site.ts` (`SITE_NAME`).
- 2026-11-01: Design tokens live in `app/globals.css` and are exposed to Tailwind as `bg-primary`, `text-muted`, `border-line`, etc. Change colours there only.
- 2026-11-01: Feed shows verified AND pending listings (pending labelled "Not yet verified", matching the design). Rejected and past-deadline listings are hidden. Still an open team decision: whether unverified listings should show at all.
- 2026-11-01: Feed sorts by soonest deadline first. "Closing soon" = deadline within 7 days.
- 2026-11-01: Rejected listings keep a detail page but have no "Apply" button.
