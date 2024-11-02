import { arr } from "../../arr/mod.ts";
import { self } from "../../std/self/self.ts";
import { PlainObject } from "../../types/PlainObject.ts";

/**
 * # disjoint
 *
 * Returns an object with the entries which the key appears in only one of them.
 *
 * ## Example
 *
 * ```ts
 * obj.disjoint([
 *     { name: 'Steve Harris', country: 'UK' },
 *     { name: 'Megadeth', foundation: 1983 },
 * ]) // { country: 'UK', foundation: 1983 }
 * ```
 */
export function disjoint(
    objs: readonly PlainObject[],
): PlainObject {
    const allEntries = objs
        .map((obj) => Object.entries(obj))
        .flat();
    const allEntriesObject = Object.fromEntries(allEntries);
    const uniqueKeys = arr.unique(
        arr.groupToArray(
            allEntries.map(([key]) => key),
            self,
        )
            .filter((group) => group.length === 1)
            .flat(),
    );
    return Object.fromEntries(
        uniqueKeys.map((key) => [key, allEntriesObject[key]]),
    );
}

/**
 * # fromMap
 *
 * Returns an object with the same key-value pairs of the passed Map instance.
 *
 * ## Example
 *
 * ```ts
 * obj.fromMap(new Map([])) // { }
 * ```
 *
 * ```ts
 * obj.fromMap(
 *     new Map([
 *         ['Paul', 'Bass'],
 *         ['John', 'Guitar'],
 *         ['George', 'Guitar'],
 *         ['Ringo', 'Drums'],
 *     ])
 * )
 * // {
 * //     Paul: 'Bass',
 * //     John: 'Guitar',
 * //     George: 'Guitar',
 * //     Ringo: 'Drums',
 * // }
 * ```
 */
export function fromMap<const T>(
    map: Map<string | number, T>,
): PlainObject<T> {
    return Object.fromEntries(entries(map));
}

/**
 * # intersect
 *
 * Returns an object with the entries that appear in all of them.
 *
 * ## Example
 *
 * ```ts
 * obj.intersect([
 *     { name: 'Cliff Burton', band: 'Metallica', country: 'US' },
 *     { name: 'James Hetfield', band: 'Metallica', country: 'US' },
 *     { name: 'Kirk Hammett', band: 'Metallica', country: 'US' },
 * ]) // { band: 'Metallica', country: 'US' }
 * ```
 */
export function intersect(
    objs: readonly PlainObject[],
): PlainObject {
    const allEntries = objs
        .map((obj) => Object.entries(obj))
        .flat();
    const allEntriesObject = Object.fromEntries(allEntries);
    const uniqueKeys = arr.unique(
        arr.groupToArray(
            allEntries.map(([key]) => key),
            self,
        )
            .filter((group) => group.length === objs.length)
            .flat(),
    );
    return Object.fromEntries(
        uniqueKeys
            .filter((key) =>
                arr.unique(
                    allEntries
                        .filter(([entryKey]) => entryKey === key)
                        .map(([, value]) => value),
                ).length === 1
            ).map((key) => [key, allEntriesObject[key]]),
    );
}

/**
 * # mapEntries
 *
 * Map the object entries into an object.
 *
 * ## Example
 *
 * ```ts
 * obj.mapEntries(
 *     {
 *         a: 1,
 *         b: 'two',
 *         c: true,
 *         4: 'nada',
 *     },
 *     ([key, value]) => [`key_${key}`, `value_${value}`],
 * )
 * // {
 * //     key_a: 'value_1',
 * //     key_b: 'value_two',
 * //     key_c: 'value_true',
 * //     key_4: 'value_nada',
 * // }
 * ```
 */
export function mapEntries(
    obj: PlainObject,
    cb: (
        entry: readonly [string | number, unknown],
    ) => readonly [string | number, unknown],
): PlainObject {
    return std.pipe(
        () => obj,
        (obj: PlainObject) => Object.entries(obj),
        (entries) => entries.map(cb),
        Object.fromEntries,
    )(undefined);
}

/**
 * # mapKeys
 *
 * Map the object keys into an object.
 *
 * ## Example
 *
 * ```ts
 * obj.mapKeys(
 *     {
 *         a: 1,
 *         b: 'two',
 *         c: true,
 *         4: 'nada',
 *     },
 *     key => `v2_${key}_test`,
 * )
 * // {
 * //     v2_a_test: 1,
 * //     v2_b_test: 'two',
 * //     v2_c_test: true,
 * //     v2_4_test: 'nada',
 * // }
 * ```
 */
export function mapKeys(
    obj: PlainObject,
    cb: (key: string | number) => string | number,
): PlainObject {
    return std.pipe(
        () => obj,
        Object.entries,
        (entries) => entries.map(([key, value]) => [cb(key), value]),
        Object.fromEntries,
    )(undefined);
}

/**
 * # mapValues
 *
 * Map the object values into an object.
 *
 * ## Example
 *
 * ```ts
 * obj.mapValues(
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
    obj: PlainObject,
    cb: (value: T) => T,
): PlainObject {
    return std.pipe(
        () => obj,
        Object.entries,
        (entries) => entries.map(([key, value]) => [key, cb(value)]),
        Object.fromEntries,
    )(undefined);
}

/**
 * # omit
 *
 * Creates an object without the passed keys.
 *
 * ## Example
 *
 * ```ts
 * obj.omit(
 *     { animal: 'dog', species: 'Canis lupus', age: 5 },
 *     [],
 * ) // { animal: 'dog', species: 'Canis lupus', age: 5 }
 * ```
 *
 * ```ts
 * obj.omit(
 *     { animal: 'dog', species: 'Canis lupus', age: 5 },
 *     ['animal'],
 * ) // { species: 'Canis lupus', age: 5 }
 * ```
 */
export function omit<const T>(
    obj: PlainObject<T>,
    keys: readonly string[],
): PlainObject<T> {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => !keys.includes(key)),
    );
}

/**
 * # pick
 *
 * Creates an object with only the passed keys.
 *
 * ## Example
 *
 * ```ts
 * obj.pick(
 *     { animal: 'dog', species: 'Canis lupus', age: 5 },
 *     [],
 * ) // { }
 * ```
 *
 * ```ts
 * obj.pick(
 *     { animal: 'dog', species: 'Canis lupus', age: 5 },
 *     ['animal'],
 * ) // { animal: 'dog' }
 * ```
 */
export function pick<const T>(
    obj: PlainObject<T>,
    keys: readonly string[],
): PlainObject<T> {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => keys.includes(key)),
    );
}

/**
 * # serialize
 *
 * Serializes the plain properties to a json-like format that is friendly to read.
 *
 * ## Example
 *
 * ```ts
 * obj.serialize({
 *     name: 'Paul',
 *     numberOfBands: 4,
 *     alive: true,
 * }) // '{ name: Paul, numberOfBands: 4, alive: true }'
 * ```
 *
 * ```ts
 * obj.serialize({
 *     empty: [],
 *     oneValue: [1],
 *     multiValue: [true, false, 'zaphod', 42n],
 * }) // '{ empty: , oneValue: 1, multiValue: true, false, zaphod, 42 }'
 * ```
 *
 * ```ts
 * class Dog {
 *     constructor(private readonly name: string) { }
 *
 *     bark(): string {
 *         return `wolf! wolf! I'm ${this.name}!`;
 *     }
 * }
 *
 * obj.serialize(
 *     new Dog('Rex') as unknown as PlainObject
 * ) // '{ name: Rex }'
 * ```
 */
export function serialize<const T>(obj: PlainObject<T>): string {
    function valueToString(value: T): string {
        if (value instanceof Date) {
            return value.toISOString();
        }
        if (value instanceof Array) {
            return value.join(", ");
        }

        return String(value);
    }

    const entries = Object
        .entries(obj)
        .filter(([, value]) => typeof value !== "function")
        .map(
            ([key, value]) => `${key}: ${valueToString(value)}`,
        )
        .join(", ");
    return entries.length ? `{ ${entries} }` : "{ }";
}

/**
 * # serializesToSame
 *
 * Returns whether the [serialized](./serialize.md) version of every object are equal or not.
 *
 * ## Example
 *
 * ```ts
 * obj.serializesToSame([
 *     { x: 10.12, y: -1.53 },
 *     { x: 10.12, y: -1.53 },
 *     { x: 10.12, y: -1.53 },
 * ]) // true
 * ```
 *
 * ```ts
 * class CartesianPoint {
 *     constructor(
 *         private readonly x: number,
 *         private readonly y: number,
 *     ) { }
 * }
 *
 * obj.serializesToSame([
 *     new CartesianPoint(5.25, 7.77) as unknown as PlainObject,
 *     { x: 5.25, y: 7.77 },
 * ]) // true
 * ```
 */
export function serializesToSame(
    objs: PlainObject[],
): boolean {
    return arr.combinate(objs)
        .every(([a, b]) => serialize(a) === serialize(b));
}
