import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Helper that joins class names and resolves Tailwind conflicts
// (e.g. "p-2 p-4" becomes "p-4"). Every component uses this.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
