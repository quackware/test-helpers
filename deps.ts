export * from "https://deno.land/std@0.181.0/testing/asserts.ts";
export * from "https://deno.land/std@0.181.0/testing/bdd.ts";
export * from "https://deno.land/std@0.181.0/testing/mock.ts";
export {
  assertSnapshot as baseAssertSnapshot,
  createAssertSnapshot,
  serialize,
} from "https://deno.land/std@0.181.0/testing/snapshot.ts";
export * from "https://deno.land/std@0.181.0/testing/types.ts";

export { isCi } from "https://x.curtis.land/cfg/src/ci.ts";
export { getQuackWareEnv } from "https://x.curtis.land/cfg/src/env.ts";
export { hasStringProperties, isRecord } from "https://x.curtis.land/guards/src/object.ts";
