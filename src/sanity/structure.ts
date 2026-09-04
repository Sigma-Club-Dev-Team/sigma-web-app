import type { StructureResolver } from "sanity/structure";

/**
 * Controls the left-hand document list in the Studio.
 * https://www.sanity.io/docs/structure-builder-cheat-sheet
 */
export const structure: StructureResolver = (S) =>
  S.list().title("Content").items(S.documentTypeListItems());
