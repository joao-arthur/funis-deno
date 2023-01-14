import { first as arrayFirst } from "../../arrays/first/first.ts";
import { entries } from "../entries/entries.ts";

export function first<K, V>(
    map: Map<K, V>,
): readonly [K, V] | undefined {
    return arrayFirst(entries(map));
}
