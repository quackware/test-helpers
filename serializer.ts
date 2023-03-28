import { getQuackWareEnv, hasStringProperties, isCi, isRecord, serialize } from "./deps.ts";

const ciOrTest = isCi() || getQuackWareEnv() === "test";
const PWD = Deno.env.get("PWD") ?? Deno.cwd();

export function replacePWD(serialized: string) {
  return serialized.replaceAll(PWD, "${PWD}");
}

export function replaceIdProperties<R extends Record<string, unknown>>(obj: R) {
  return Object.fromEntries(
    Object.entries(obj).map((entry) => {
      // 11 matches the default `uid()` call
      if (entry[0] === "id" && typeof entry[1] === "string" && entry[1].length === 11) {
        entry[1] = "${ID}";
      } else if (Array.isArray(entry[1])) {
        entry[1] = entry[1].map((val) => {
          if (isRecord(val)) {
            return replaceIdProperties(val);
          } else {
            return val;
          }
        });
      } else if (isRecord(entry[1])) {
        entry[1] = replaceIdProperties(entry[1]);
      }
      return entry;
    }),
  ) as R;
}

export function cleanSerializer(actual: unknown) {
  if (isRecord(actual) && hasStringProperties(actual, "id") && actual.id.length === 11) {
    actual = replaceIdProperties(actual);
  }

  const serialized = serialize(actual);
  if (ciOrTest) {
    return replacePWD(serialized);
  } else {
    return serialized;
  }
}
