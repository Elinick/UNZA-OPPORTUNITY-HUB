# UNZA Opportunities Platform

Verified opportunities for UNZA students, with deadlines up front. Built from the survey and blueprint in the project docs.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # catch type errors
npm run build      # production build check
```

## Folder layout

- `app/` pages: `/`, `/opportunities/[id]`, `/share`, `/saved`, `/login`, plus `layout.tsx` and `globals.css` (design tokens).
- `components/` shared pieces: `Header`, `VerifiedBadge`, `ThemeToggle`, `ui/button`.
- `data/` the shared data shape (`types.ts`) and 15 fake listings (`opportunities.ts`).
- `lib/` small helpers: `utils.ts` (`cn`), `site.ts` (name and nav links).

## Rules of the road

- Everyone builds against `data/types.ts` and the fake data until the real backend exists.
- Use the token classes (`bg-primary`, `text-muted`, `border-line`, `bg-card`). No hard-coded colours.
- Keep touch targets at least 44px (`min-h-11`).
- One branch per person, a teammate reads every change before merge.
- Never commit `.env`. Secrets go in environment variables.
- Log rule changes in `DECISIONS.md`.

## Who owns what

| Role | Owns |
| --- | --- |
| Foundation | layout, nav, tokens, shared components, login, saved, deployment |
| Discovery | feed, cards, filters, detail page |
| Posting and Trust | share form, my submissions, review queue, verified and report states |
