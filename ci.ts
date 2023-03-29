/**
 * Whether Deno is currently executing in a `CI` environment
 */
export function isCi() {
  const ciEnv = Deno.env.get("CI") ?? "false";
  return ciEnv !== "false";
}
