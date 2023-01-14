import { plainObject } from "../../types/plainObject.ts";
import { groupToEntries } from "../groupToEntries/groupToEntries.ts";

export function groupToObject<K, V>(
    arr: readonly V[],
    cb: (item: V) => K,
): plainObject<V[]> {
    return Object.fromEntries(groupToEntries(arr, cb));
}
