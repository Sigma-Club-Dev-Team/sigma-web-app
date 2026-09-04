import Studio from "./Studio";

/**
 * The Studio is a single-page app: everything under /studio is served by this
 * one static shell and routed client-side.
 */
export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <Studio />;
}
