import { defineCliConfig } from "sanity/cli";

import { dataset, projectId } from "./src/sanity/env";

export default defineCliConfig({
  api: { projectId, dataset },
  // The Studio lives inside this Next.js app rather than being deployed on its own.
  autoUpdates: true,
});
