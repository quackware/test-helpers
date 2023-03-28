import { baseAssertSnapshot, createAssertSnapshot, serialize } from "./deps.ts";
import { cleanSerializer } from "./serializer.ts";

const forceUpdateViaEnv = !!Deno.env.get("DENO_UPDATE_SNAPSHOT");

export const assertSnapshot = createAssertSnapshot({
  serializer: cleanSerializer,
  mode: forceUpdateViaEnv ? "update" : undefined,
}, baseAssertSnapshot);

export { baseAssertSnapshot, createAssertSnapshot, serialize };
