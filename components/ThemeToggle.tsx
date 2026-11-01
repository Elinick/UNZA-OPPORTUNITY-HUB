"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

// Button that flips between light and dark mode.
// Both icons are in the page; CSS shows the right one (avoids a flash on load).
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="hidden size-5 dark:block" aria-hidden="true" />
      <Moon className="size-5 dark:hidden" aria-hidden="true" />
    </Button>
  );
}
