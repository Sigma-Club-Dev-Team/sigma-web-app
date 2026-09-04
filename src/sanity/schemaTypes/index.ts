import type { SchemaTypeDefinition } from "sanity";

import { article } from "./article";
import { agendaBlock } from "./blocks/agendaBlock";
import { calloutBlock } from "./blocks/calloutBlock";
import { editionsBlock } from "./blocks/editionsBlock";
import { factsBlock } from "./blocks/factsBlock";
import { imageBlock } from "./blocks/imageBlock";
import { listBlock } from "./blocks/listBlock";
import { quoteBlock } from "./blocks/quoteBlock";
import { sectionBlock } from "./blocks/sectionBlock";
import { event } from "./event";
import { agendaItem } from "./objects/agendaItem";
import { eventLocation } from "./objects/eventLocation";
import { eventRegistration } from "./objects/eventRegistration";
import { eventSponsor } from "./objects/eventSponsor";
import { programmeEdition } from "./objects/programmeEdition";
import { programmeFact } from "./objects/programmeFact";
import { programmeSummary } from "./objects/programmeSummary";
import { programme } from "./programme";
import { sponsor } from "./sponsor";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Documents
  programme,
  article,
  event,
  sponsor,
  // Content blocks
  sectionBlock,
  imageBlock,
  factsBlock,
  editionsBlock,
  quoteBlock,
  listBlock,
  calloutBlock,
  agendaBlock,
  // Shared objects
  programmeFact,
  programmeEdition,
  programmeSummary,
  agendaItem,
  eventLocation,
  eventRegistration,
  eventSponsor,
];
