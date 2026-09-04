import type { SchemaTypeDefinition } from "sanity";

import { editionsBlock } from "./blocks/editionsBlock";
import { factsBlock } from "./blocks/factsBlock";
import { imageBlock } from "./blocks/imageBlock";
import { sectionBlock } from "./blocks/sectionBlock";
import { programmeEdition } from "./objects/programmeEdition";
import { programmeFact } from "./objects/programmeFact";
import { programmeSummary } from "./objects/programmeSummary";
import { programme } from "./programme";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Documents
  programme,
  // Content blocks
  sectionBlock,
  imageBlock,
  factsBlock,
  editionsBlock,
  // Shared objects
  programmeFact,
  programmeEdition,
  programmeSummary,
];
