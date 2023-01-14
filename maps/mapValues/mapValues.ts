import { pipe } from "../../standard/pipe/pipe.ts";
import { entries } from "../entries/entries.ts";

export function mapValues<K, V>(
    map: Map<K, V>,
    cb: (value: V) => V,
): Map<K, V> {
    return pipe(
        (map: Map<K, V>) => entries(map),
        (entries) =>
            entries.map(
                ([key, value]) => [key, cb(value)] as const,
            ),
        (entries) => new Map(entries),
    )(map);
}
