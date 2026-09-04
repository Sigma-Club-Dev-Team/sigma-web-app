import type { StructureResolver } from "sanity/structure";

/**
 * Controls the left-hand document list in the Studio.
 * https://www.sanity.io/docs/structure-builder-cheat-sheet
 *
 * Events are split by date because that is how editors think about them: the
 * ones still to come are the ones being edited, and the archive is long.
 */
const UPCOMING = /* groq */ `_type == "event" && dateTime(coalesce(endsAt, startsAt)) >= dateTime(now())`;
const PAST = /* groq */ `_type == "event" && dateTime(coalesce(endsAt, startsAt)) < dateTime(now())`;

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Events")
        .child(
          S.list()
            .title("Events")
            .items([
              S.listItem()
                .title("Upcoming")
                .child(
                  S.documentTypeList("event")
                    .title("Upcoming events")
                    .filter(UPCOMING)
                    .defaultOrdering([{ field: "startsAt", direction: "asc" }]),
                ),
              S.listItem()
                .title("Past")
                .child(
                  S.documentTypeList("event")
                    .title("Past events")
                    .filter(PAST)
                    .defaultOrdering([{ field: "startsAt", direction: "desc" }]),
                ),
              S.documentTypeListItem("event").title("All events"),
            ]),
        ),
      S.documentTypeListItem("sponsor").title("Sponsors"),
      S.divider(),
      S.documentTypeListItem("programme").title("Programmes"),
      S.documentTypeListItem("article").title("News"),
    ]);
