import { first } from "./first/first.ts";
import { groupToEntries } from "./groupToEntries/groupToEntries.ts";
import { groupToArray } from "./groupToArray/groupToArray.ts";
import { groupToMap } from "./groupToMap/groupToMap.ts";
import { groupToObject } from "./groupToObject/groupToObject.ts";
import { last } from "./last/last.ts";
import { sort } from "./sort/sort.ts";
import { unique } from "./unique/unique.ts";
import { disjoint } from "./disjoint/disjoint.ts";
import { intersect } from "./intersect/intersect.ts";
import { once } from "./once/once.ts";
import { combinations } from "./combinations/combinations.ts";
import { random } from "./random/random.ts";

export const arr = {
    groupToEntries,
    groupToArray,
    groupToMap,
    groupToObject,
    first,
    last,
    sort,
    unique,
    disjoint,
    intersect,
    once,
    combinations,
    random,
} as const;
