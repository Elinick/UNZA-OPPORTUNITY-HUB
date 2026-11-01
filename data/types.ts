// THE SHARED DATA SHAPE. Everyone builds against this (blueprint section 6).
// If you change it, tell the team and add a line to DECISIONS.md.

// Order follows the survey interest ranking (jobs and internships first).
export const OPPORTUNITY_TYPES = [
  "Job",
  "Internship",
  "Workshop",
  "Volunteering",
  "Scholarship",
  "Entrepreneurship",
  "Research",
  "Course",
  "Hackathon",
] as const;

export type OpportunityType = (typeof OPPORTUNITY_TYPES)[number];

// pending = waiting for a verifier, verified = checked, rejected = failed the check
export type OpportunityStatus = "pending" | "verified" | "rejected";

export interface Opportunity {
  id: string;
  title: string;
  type: OpportunityType;
  organisation: string;
  description: string;
  deadline: string; // ISO date, e.g. "2026-12-05"
  originalLink: string; // link to the original ad or application page
  eligibility: string;
  status: OpportunityStatus;
  postedBy: string;
}
