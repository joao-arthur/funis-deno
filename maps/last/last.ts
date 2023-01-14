import { last as arrayLast } from "../../arrays/last/last.ts";
import { entries } from "../entries/entries.ts";

export function last<K, V>(
    map: Map<K, V>,
): readonly [K, V] | undefined {
    return arrayLast(entries(map));
}
