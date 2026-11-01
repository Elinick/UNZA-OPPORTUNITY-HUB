"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NAV_LINKS, SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

// Top bar.
// Desktop: logo on the left, links and "Log in" on the right.
// Phone: links hide behind a menu button that opens a dropdown panel.
export function Header() {
  const [open, setOpen] = useState(false); // is the phone menu open?
  const pathname = usePathname(); // current page, used to highlight the active link

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-2">
        {/* Logo / site name */}
        <Link
          href="/"
          className="flex min-h-11 items-center text-lg font-bold text-primary"
          onClick={() => setOpen(false)}
        >
          {SITE_NAME}
        </Link>

        {/* Desktop navigation (hidden on phones) */}
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="ghost"
              className={cn(isActive(link.href) && "text-primary")}
            >
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </Button>
          ))}
          <ThemeToggle />
          <Button asChild>
            <Link href="/login">Log in</Link>
          </Button>
        </nav>

        {/* Phone controls (hidden on desktop) */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* Phone dropdown menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="border-t border-line bg-card px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 items-center rounded-xl px-3 font-semibold hover:bg-line/50",
                    isActive(link.href) && "text-primary",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Button asChild className="w-full">
                <Link href="/login" onClick={() => setOpen(false)}>
                  Log in
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
