import { mapEntries } from "./mapEntries/mapEntries.ts";
import { mapKeys } from "./mapKeys/mapKeys.ts";
import { mapValues } from "./mapValues/mapValues.ts";
import { entries } from "./entries/entries.ts";
import { first } from "./first/first.ts";
import { keys } from "./keys/keys.ts";
import { last } from "./last/last.ts";
import { values } from "./values/values.ts";
import { fromObject } from "./fromObject/fromObject.ts";

export const map = {
    mapEntries,
    mapKeys,
    mapValues,
    entries,
    first,
    keys,
    last,
    values,
    fromObject,
} as const;
