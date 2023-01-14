import { entries } from "../../maps/entries/entries.ts";
import { plainObject } from "../../types/plainObject.ts";

export function fromMap<T>(
    map: Map<string | number, T>,
): plainObject<T> {
    return Object.fromEntries(entries(map));
}
