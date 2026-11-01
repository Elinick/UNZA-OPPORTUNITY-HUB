import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: { default: SITE_NAME, template: `%s · ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
};

// Makes the page scale properly on phones.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// The shell every page sits inside: theme, header, then the page content.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning is needed because next-themes sets the theme class on <html>.
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
