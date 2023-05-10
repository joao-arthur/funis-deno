import { mapEntries } from "./mapEntries/mapEntries.ts";
import { mapKeys } from "./mapKeys/mapKeys.ts";
import { mapValues } from "./mapValues/mapValues.ts";
import { serialize } from "./serialize/serialize.ts";
import { serializesToSame } from "./serializesToSame/serializesToSame.ts";
import { fromMap } from "./fromMap/fromMap.ts";
import { pick } from "./pick/pick.ts";
import { omit } from "./omit/omit.ts";
import { disjoint } from "./disjoint/disjoint.ts";
import { intersect } from "./intersect/intersect.ts";

export const obj = {
    mapEntries,
    mapKeys,
    mapValues,
    serialize,
    serializesToSame,
    fromMap,
    pick,
    omit,
    disjoint,
    intersect,
} as const;
