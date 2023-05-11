import { arr } from "../../arr/mod.ts";
import { entries } from "../entries/entries.ts";

/**
 * # last
 *
 * Returns the last entry of the map.
 *
 * ## Example
 *
 * ```ts
 * map.last(new Map()) // undefined
 * ```
 *
 * ```ts
 * map.last(
 *     new Map([
 *         [1, { name: 'Paul McCartney' }],
 *         [2, { name: 'John Lennon' }],
 *     ])
 * ) // [2, { name: 'John Lennon' }]
 * ```
 */
export function last<K, V>(
    map: Map<K, V>,
): readonly [K, V] | undefined {
    return arr.last(entries(map));
}
