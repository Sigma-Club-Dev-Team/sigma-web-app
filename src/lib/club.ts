/** Facts about the club that several components render, kept in one place. */

/** Sigma Club was founded at the University of Ibadan in 1950. */
export const FOUNDING_YEAR = 1950;

/**
 * Full years since the club was founded.
 *
 * Server-rendered, so it is fixed at the moment the page is generated. Pages
 * with a `revalidate` window pick up the new figure on their own; fully static
 * pages carry the build-time value until the next deploy.
 */
export function yearsSinceFounding(now: Date = new Date()): number {
  return now.getFullYear() - FOUNDING_YEAR;
}

export function currentYear(now: Date = new Date()): number {
  return now.getFullYear();
}
