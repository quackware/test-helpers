export * from "https://deno.land/std@0.181.0/testing/asserts.ts";
export * from "https://deno.land/std@0.181.0/testing/bdd.ts";
export * from "https://deno.land/std@0.181.0/testing/mock.ts";
export {
  assertSnapshot as baseAssertSnapshot,
  createAssertSnapshot,
  serialize,
} from "https://deno.land/std@0.181.0/testing/snapshot.ts";
export * from "https://deno.land/std@0.181.0/testing/types.ts";

export { hasStringProperties, isRecord } from "https://git.quack.id/guards/object.ts";
