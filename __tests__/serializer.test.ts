import { uid } from "https://x.curtis.land/core/uid.ts";
import { assertEquals, assertExists, assertObjectMatch } from "../deps.ts";
import { replaceIdProperties } from "../serializer.ts";

Deno.test("serializer", async (t) => {
  await t.step("replaceIdProperties", () => {
    const data = {
      nested: {
        id: uid(),
      },
    };

    assertExists(data.nested.id);

    const cleaned = replaceIdProperties(data);

    assertEquals(cleaned.nested.id, "${ID}");

    const oneLevel = {
      id: uid(),
    };

    assertObjectMatch(replaceIdProperties(oneLevel), { id: "${ID}" });
  });
});
