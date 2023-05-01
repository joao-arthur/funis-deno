import { pipe } from "../../standard/pipe/pipe.ts";
import { plainObject } from "../../types/plainObject.ts";

/**
 * # objects.mapValues
 *
 * Map the object values into an object.
 *
 * ## Example
 *
 * ```ts
 * objects.mapValues(
 *     {
 *         a: 1,
 *         b: 'two',
 *         c: true,
 *         4: 'nada',
 *     },
 *     value => value === true,
 * )
 * // {
 * //     a: false,
 * //     b: false,
 * //     c: true,
 * //     4: false,
 * // }
 * ```
 */
export function mapValues<const T>(
    obj: plainObject,
    cb: (value: T) => T,
): plainObject {
    return pipe(
        () => obj,
        Object.entries,
        (entries) => entries.map(([key, value]) => [key, cb(value)]),
        Object.fromEntries,
    )(undefined);
}
