import { pipe } from "../../standard/pipe/pipe.ts";
import { entries } from "../entries/entries.ts";

export function mapEntries<K, V>(
    map: Map<K, V>,
    cb: (entry: readonly [K, V]) => readonly [K, V],
): Map<K, V> {
    return pipe(
        (map: Map<K, V>) => entries(map),
        (entries) => entries.map(cb),
        (entries) => new Map(entries),
    )(map);
}
