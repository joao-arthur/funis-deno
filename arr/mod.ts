import { groupToEntries } from "./groupToEntries/groupToEntries.ts";
import { groupToArray } from "./groupToArray/groupToArray.ts";
import { groupToMap } from "./groupToMap/groupToMap.ts";
import { groupToObject } from "./groupToObject/groupToObject.ts";
import { unique } from "./unique/unique.ts";
import { disjoint } from "./disjoint/disjoint.ts";
import { intersect } from "./intersect/intersect.ts";
import { once } from "./once/once.ts";
import { combinate } from "./combinate/combinate.ts";
import { random } from "./random/random.ts";
import { repeat } from "./repeat/repeat.ts";

export const arr = {
    groupToEntries,
    groupToArray,
    groupToMap,
    groupToObject,
    unique,
    disjoint,
    intersect,
    once,
    combinate,
    random,
    repeat,
} as const;
