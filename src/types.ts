export type Department = "sci" | "math" | "hum";

export interface Subject {
  id: string;
  dept: Department;
  tag: string;
  name: string;
  description: string;
  channel: string;
  link?: string;
}

export interface Resource {
  title: string;
  downloadUrl?: string;
}

export interface Unit {
  unit: string;
  resources: Resource[];
}

export interface CoverField {
  label: string;
  value: string;
  filled?: boolean;
}

export interface LibraryResource {
  title: string;
  downloadUrl?: string;
}

export interface LibraryLeaf {
  unit: string;
  resources: LibraryResource[];
}

export interface LibraryBranch {
  subject: string;
  units: LibraryLeaf[];
}

export interface EventItem {
  date: string;
  time: string;
  subject: string;
  topic: string;
  presenter: string;
}

export interface Mentor {
  name: string;
  subjects: string;
  background: string;
  status: string;
}

export interface Milestone {
  year: string;
  text: string;
}

export interface JoinPath {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  variant: "primary" | "ghost";
}

export interface LedgerStat {
  label: string;
  value: string;
}

export interface FeedbackQuote {
  quote: string;
  source: string;
}

export interface ContactLine {
  label: string;
  value: string;
  href: string;
}

export interface NavItem {
  path: string;
  label: string;
}