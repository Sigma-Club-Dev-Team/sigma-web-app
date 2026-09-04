import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";

import { dataset, projectId } from "@/sanity/env";

const builder = createImageUrlBuilder({ projectId, dataset });

/**
 * Build a URL for an image stored in Sanity, with on-demand transformations:
 * `urlFor(image).width(800).height(450).fit("crop").url()`
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
