/**
 * Config for the Studio mounted at `/studio` (src/app/(studio)).
 * The Sanity CLI reads this file too, so it has to stay at the project root.
 */
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId, studioBasePath } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  name: "sigma-club",
  title: "Sigma Club",
  basePath: studioBasePath,
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({ structure }),
    // GROQ playground, available at /studio/vision
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
