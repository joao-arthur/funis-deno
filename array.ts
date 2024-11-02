import { range } from "./number.ts";
import { pipe } from "./standard.ts";

/**
 * # combinate
 *
 * Returns an array with the non-repeating combination of the items.
 *
 * ## Example
 *
 * ```ts
 * arr.combinate([]) // []
 * arr.combinate([10]) // []
 * ```
 *
 * ```ts
 * arr.combinate([10, 20, 30, 40, 50])
 * // [
 * //     [10, 20],
 * //     [10, 30],
 * //     [10, 40],
 * //     [10, 50],
 * //     [20, 30],
 * //     [20, 40],
 * //     [20, 50],
 * //     [30, 40],
 * //     [30, 50],
 * //     [40, 50],
 * // ]
 * ```
 */
export function combinate<const T>(
    arr: readonly T[],
): readonly (readonly [T, T])[] {
    const result: [T, T][] = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            result.push([arr[i], arr[j]]);
        }
    }
    return result;
}

/**
 * # disjoint
 *
 * Returns an array with the items that appear in only one array.
 *
 * ## Example
 *
 * ```ts
 * arr.disjoint([[1, 2, 3], [1, 2, 3]]) // []
 * ```
 *
 * ```ts
 * arr.disjoint([[1]]) // [1]
 * arr.disjoint([[false, true], []]) // [false, true]
 * arr.disjoint([[4, 5, 6], [5, 6, 7]]) // [4, 7]
 * arr.disjoint([
 *     ['George', 'Paul', 'John', 'Ringo', 'George'],
 *     ['Ringo'],
 *     ['John'],
 * ]) // ['George', 'Paul']
 * ```
 */
export function disjoint<const T>(
    arrs: readonly (readonly T[])[],
): readonly T[] {
    return unique(arrs.flat())
        .filter(
            (item) => once(arrs, (arr) => arr.includes(item)),
        );
}

/**
 * # groupToArray
 *
 * Group the items by the returned value of the callback. Then return the groups in an array.
 *
 * ## Example
 *
 * ```ts
 * arr.groupToArray(
 *     [
 *         { type: 'grass', name: 'bulbasaur' },
 *         { type: 'fire', name: 'charmander' },
 *         { type: 'water', name: 'squirtle' },
 *         { type: 'bug', name: 'caterpie' },
 *         { type: 'water', name: 'psyduck' },
 *     ],
 *     item => item.type,
 * )
 * // [
 * //     [{ type: 'grass', name: 'bulbasaur' }],
 * //     [{ type: 'fire', name: 'charmander' }],
 * //     [
 * //         { type: 'water', name: 'squirtle' },
 * //         { type: 'water', name: 'psyduck' },
 * //     ],
 * //     [{ type: 'bug', name: 'caterpie' }],
 * // ]
 * ```
 */
export function groupToArray<K, V>(
    arr: readonly V[],
    cb: (item: V) => K,
): readonly (readonly V[])[] {
    return groupToEntries(arr, cb).map(([, value]) => value);
}

/**
 * # groupToEntries
 *
 * Group the items by the returned value of the callback. Then return the groups in entries.
 *
 * ## Example
 *
 * ```ts
 * arr.groupToEntries(
 *     [
 *         { type: 'grass', name: 'bulbasaur' },
 *         { type: 'fire', name: 'charmander' },
 *         { type: 'water', name: 'squirtle' },
 *         { type: 'bug', name: 'caterpie' },
 *         { type: 'water', name: 'psyduck' },
 *     ],
 *     item => item.type,
 * )
 * // [
 * //     ['grass', [{ type: 'grass', name: 'bulbasaur' }]],
 * //     ['fire', [{ type: 'fire', name: 'charmander' }]],
 * //     ['water', [
 * //         { type: 'water', name: 'squirtle' },
 * //         { type: 'water', name: 'psyduck' },
 * //     ]],
 * //     ['bug', [{ type: 'bug', name: 'caterpie' }]],
 * // ]
 * ```
 */
export function groupToEntries<K, V>(
    arr: readonly V[],
    cb: (item: V) => K,
): readonly (readonly [K, readonly V[]])[] {
    return pipe(
        () => arr,
        (items) => items.map(cb),
        unique,
        (keys) =>
            keys.map((key) =>
                [
                    key,
                    arr.filter((item) => cb(item) === key),
                ] as const
            ),
    )(undefined);
}

/**
 * # groupToMap
 *
 * Group the items by the returned value of the callback. Then return the groups in an Map instance.
 *
 * ## Example
 *
 * ```ts
 * arr.groupToMap(
 *     [
 *         { type: 'grass', name: 'bulbasaur' },
 *         { type: 'fire', name: 'charmander' },
 *         { type: 'water', name: 'squirtle' },
 *         { type: 'bug', name: 'caterpie' },
 *         { type: 'water', name: 'psyduck' },
 *     ],
 *     item => item.type,
 * )
 * // {
 * //     grass -> [{ type: 'grass', name: 'bulbasaur' }],
 * //     fire -> [{ type: 'fire', name: 'charmander' }],
 * //     water -> [
 * //         { type: 'water', name: 'squirtle' },
 * //         { type: 'water', name: 'psyduck' },
 * //     ],
 * //     bug -> [{ type: 'bug', name: 'caterpie' }],
 * // }
 * ```
 */
export function groupToMap<K, V>(
    arr: readonly V[],
    cb: (item: V) => K,
): Map<K, readonly V[]> {
    return new Map(groupToEntries(arr, cb));
}

/**
 * # groupToObject
 *
 * Group the items by the returned value of the callback. Then return the groups in an plain object.
 *
 * ## Example
 *
 * ```ts
 * arr.groupToObject(
 *     [
 *         { type: 'grass', name: 'bulbasaur' },
 *         { type: 'fire', name: 'charmander' },
 *         { type: 'water', name: 'squirtle' },
 *         { type: 'bug', name: 'caterpie' },
 *         { type: 'water', name: 'psyduck' },
 *     ],
 *     item => item.type,
 * )
 * // {
 * //     grass: [{ type: 'grass', name: 'bulbasaur' }],
 * //     fire: [{ type: 'fire', name: 'charmander' }],
 * //     water: [
 * //         { type: 'water', name: 'squirtle' },
 * //         { type: 'water', name: 'psyduck' },
 * //     ],
 * //     bug: [{ type: 'bug', name: 'caterpie' }],
 * // }
 * ```
 */
export function groupToObject<K, V>(
    arr: readonly V[],
    cb: (item: V) => K,
): PlainObject<V[]> {
    return Object.fromEntries(groupToEntries(arr, cb));
}

/**
 * # intersect
 *
 * Returns an array with the items that appear in every array.
 *
 * ## Example
 *
 * ```ts
 * arr.intersect([[false, true], []]) // []
 * arr.intersect([[1, 2, 3], [4, 5, 6]]) // []
 * ```
 *
 * ```ts
 * arr.intersect([['']]) // ['']
 * arr.intersect([[4, 5, 6], [5, 6, 7]]) // [5, 6]
 * arr.intersect([
 *     ['George', 'Paul', 'John', 'Ringo', 'Ringo'],
 *     ['Ringo'],
 *     ['Ringo', 'John'],
 * ]) // ['Ringo']
 * ```
 */
export function intersect<const T>(
    arrs: readonly (readonly T[])[],
): readonly T[] {
    return unique(arrs.flat())
        .filter(
            (item) => arrs.every((arr) => arr.includes(item)),
        );
}

/**
 * # once
 *
 * Returns true if the callback returns true once. Returns false otherwise.
 *
 * ## Example
 *
 * ```ts
 * arr.once(
 *     ['Axl', 'Slash', 'Duff', 'Buckethead'],
 *     item => item === 'Roses'
 * ) // false
 * arr.once(
 *     ['Axl', 'Slash', 'Duff', 'Buckethead'],
 *     item => item === 'Buckethead'
 * ) // true
 * arr.once(
 *     ['Axl', 'Slash', 'Duff', 'Buckethead'],
 *     item => item.length > 2
 * ) // false
 * ```
 */
export function once<const T>(
    arr: readonly T[],
    cb: (item: T, index: number, arr: readonly T[]) => boolean,
): boolean {
    return arr.map(cb).filter(Boolean).length === 1;
}

/**
 * # random
 *
 * Returns a random character of the array.
 *
 * ## Example
 *
 * ```ts
 * arr.random([]) // undefined
 * ```
 *
 * ```ts
 * arr.random([true]) // [true]
 * arr.random(false, 0, 'n') // false | 0 | 'n'
 * ```
 */
export function random<const T>(arr: readonly T[]): T | undefined {
    return arr[num.random(0, arr.length - 1)];
}

/**
 * # repeat
 *
 * Returns a new array with the all the items repeated the specified number of times.
 *
 * ## Example
 *
 * ```ts
 * repeat([0, 1, 2], 0) // []
 * repeat([0, 1, 2], 1) // [0, 1, 2]
 * repeat([0, 1, 2], 2) // [0, 1, 2, 0, 1, 2]
 * ```
 */
export function repeat<const T>(
    arr: readonly T[],
    times: number,
): readonly T[] {
    return range(1, times).flatMap(() => arr);
}

/**
 * # unique
 *
 * Returns an array with the unique values.
 *
 * ## Example
 *
 * ```ts
 * arr.unique([1, 1, 'john', 'john']) // [1, 'john']
 * arr.unique([42]) // [42]
 * ```
 */
export function unique<const T>(arr: readonly T[]): readonly T[] {
    return Array.from(new Set(arr));
}
