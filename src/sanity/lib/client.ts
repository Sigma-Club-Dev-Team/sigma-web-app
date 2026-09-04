import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "@/sanity/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // The CDN serves cached, published content. Turn it off if you start reading
  // drafts or need read-after-write consistency.
  useCdn: true,
});
