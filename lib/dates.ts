// Small date helpers for deadlines. Deadlines are stored as "YYYY-MM-DD".

const MS_PER_DAY = 24 * 60 * 60 * 1000;

// Turn "2026-11-20" into a local date at midnight (avoids timezone shifts).
function parseDeadline(deadline: string): Date {
  const [y, m, d] = deadline.split("-").map(Number);
  return new Date(y, m - 1, d);
}

// Whole days from today until the deadline. 0 = today, negative = already passed.
export function daysUntil(deadline: string, now: Date = new Date()): number {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((parseDeadline(deadline).getTime() - today.getTime()) / MS_PER_DAY);
}

// "Closing soon" = deadline is today or within the next 7 days.
export function isClosingSoon(deadline: string, now: Date = new Date()): boolean {
  const days = daysUntil(deadline, now);
  return days >= 0 && days <= 7;
}

export function isExpired(deadline: string, now: Date = new Date()): boolean {
  return daysUntil(deadline, now) < 0;
}

// "20 Nov 2026"
export function formatDeadline(deadline: string): string {
  return parseDeadline(deadline).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// Friendly countdown: "Due today", "1 day left", "12 days left", "Closed".
export function deadlineCountdown(deadline: string, now: Date = new Date()): string {
  const days = daysUntil(deadline, now);
  if (days < 0) return "Closed";
  if (days === 0) return "Due today";
  if (days === 1) return "1 day left";
  return `${days} days left`;
}
