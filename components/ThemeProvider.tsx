"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

// Wraps the app so light/dark mode works. It adds a "dark" class to <html>.
export function ThemeProvider(props: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props} />;
}
