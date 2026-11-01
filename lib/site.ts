// Team decision still open: the platform name.
// It lives in ONE place, so renaming later is a one-line change.
export const SITE_NAME = "[Platform name]";

export const SITE_DESCRIPTION =
  "Verified opportunities for UNZA students: jobs, internships, workshops and more, with deadlines up front.";

// Main navigation. Header reads from this list.
export const NAV_LINKS = [
  { href: "/", label: "Browse" },
  { href: "/saved", label: "Saved" },
  { href: "/share", label: "Share" },
] as const;
