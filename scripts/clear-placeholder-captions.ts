/**
 * One-off: the design mock's placeholder caption ("Image description goes
 * here") was carried into the first seed import. This unsets it wherever it
 * survives, leaving every other field — and any real caption — untouched.
 *
 *   pnpm sanity exec scripts/clear-placeholder-captions.ts --with-user-token
 */
import { getCliClient } from "sanity/cli";

const PLACEHOLDER = "Image description goes here";

const client = getCliClient();

const docs = await client.fetch<{ _id: string; blocks: { _key: string; _type: string; caption?: string }[] }[]>(
  `*[_type == "programme" && count(blocks[_type == "imageBlock" && caption == $placeholder]) > 0]{
     _id,
     blocks[]{ _key, _type, caption }
   }`,
  { placeholder: PLACEHOLDER },
);

if (docs.length === 0) {
  console.log("Nothing to do — no placeholder captions found.");
} else {
  let cleared = 0;
  const tx = docs.reduce((transaction, doc) => {
    const keys = doc.blocks
      .filter((b) => b._type === "imageBlock" && b.caption === PLACEHOLDER)
      .map((b) => b._key);

    cleared += keys.length;
    console.log(`${doc._id}: clearing ${keys.length} caption(s)`);

    return transaction.patch(doc._id, (patch) =>
      patch.unset(keys.map((key) => `blocks[_key=="${key}"].caption`)),
    );
  }, client.transaction());

  await tx.commit();
  console.log(`Cleared ${cleared} placeholder caption(s) across ${docs.length} document(s).`);
}
