import { std } from "../../std/mod.ts";

type clampOptions = {
    readonly min: number;
} | {
    readonly max: number;
} | {
    readonly min: number;
    readonly max: number;
};

/**
 * # clamp
 *
 * If min is passed and the number is smaller than min, returns min.
 *
 * If max is passed and the number is bigger than max, returns max.
 *
 * Returns the passed value otherwise.
 *
 * ## Example
 *
 * ```ts
 * num.clamp(77, { min: 99 }) // 99
 * num.clamp(10, { min: 8 }) // 10
 * ```
 *
 * ```ts
 * num.clamp(-10, { max: 5 }) // -10
 * num.clamp(846, { max: -1 }) // -1
 * ```
 *
 * ```ts
 * num.clamp(10, { min: 8, max: 12 }) // 10
 * num.clamp(10, { min: 0, max: 9 }) // 9
 * ```
 */
export function clamp(num: number, options: clampOptions): number {
    return std.pipe(
        (current: number) => "min" in options ? Math.max(current, options.min) : current,
        (current: number) => "max" in options ? Math.min(current, options.max) : current,
    )(num);
}

/**
 * # compareAsc
 *
 * Compare the numbers in ascending order.
 *
 * ## Example
 *
 * ```ts
 * [1, 9, 2, 8, 3, 7, 4].sort(num.compareAsc) // [1, 2, 3, 4, 7, 8, 9]
 * ```
 */
export function compareAsc(a: number, b: number): number {
    return a > b ? 1 : -1;
}

/**
 * # compareDesc
 *
 * Compare the numbers in descending order.
 *
 * ## Example
 *
 * ```ts
 * [1, 9, 2, 8, 3, 7, 4].sort(num.compareDesc) // [1, 2, 3, 4, 7, 8, 9]
 * ```
 */
export function compareDesc(a: number, b: number): number {
    return a > b ? -1 : 1;
}

/**
 * # isValid
 *
 * Returns false for _undefined_, _null_ and _NaN_. Returns true otherwise.
 *
 * ## Example
 *
 * ```ts
 * num.isValid(undefined) // false
 * num.isValid(null) // false
 * num.isValid(NaN) // false
 * ```
 *
 * ```ts
 * num.isValid(0) // true
 * num.isValid(1) // true
 * num.isValid(Infinity) // true
 * ```
 */
export function isValid(num: number | undefined | null): boolean {
    if (typeof num !== "number") {
        return false;
    }
    if (num === 0) {
        return true;
    }
    return !!num;
}

/**
 * # lazyRange
 *
 * Returns an iterable range from a number to another, respecting the step between each value.
 *
 * ## Example
 *
 * ```ts
 * num.lazyRange(2, -1) // []
 * num.lazyRange(-1, 2, -1) // []
 * ```
 *
 * ```ts
 * num.lazyRange(-1, 2) // [-1, 0, 1, 2]
 * num.lazyRange(4, 5.1) // [4, 5]
 * num.lazyRange(2, -1, -1) // [2, 1, 0, -1]
 * num.lazyRange(10.2, 9, -0.2) // [10.2, 10, 9.8, 9.6, 9.4, 9.2, 9]
 * ```
 */
export function lazyRange(
    from: number,
    to: number,
    step = 1,
): IterableIterator<number> {
    const length = std.pipe(
        () => toFixed(to - from, 10),
        (delta) => toFixed(delta / step, 10),
        (deltaByStep) => Math.floor(deltaByStep) + 1,
        (length) => Math.max(length, 0),
    )(undefined);

    let i = -1;
    return {
        next(): IteratorResult<number> {
            i++;
            const done = i + 1 > length;

            return {
                done,
                value: done ? undefined! : i * step + from,
            };
        },
        [Symbol.iterator](): IterableIterator<number> {
            return this;
        },
    };
}

/**
 * # normalizeZero
 *
 * If the passed value is -0, returns 0. Returns the passed value otherwise.
 *
 * ## Example
 *
 * ```ts
 * num.normalizeZero(-0) // 0
 * num.normalizeZero(0) // 0
 * ```
 */
export function normalizeZero(num: number): number {
    return Object.is(num, -0) ? 0 : num;
}

type parseOptions = {
    readonly prefix: string;
} | {
    readonly suffix: string;
} | {
    readonly prefix: string;
    readonly suffix: string;
};

/**
 * # parse
 *
 * Try to parse a number by the given prefix and suffix. If the prefix or suffix doesn't match the passed value, returns _undefined_.
 *
 * ## Example
 *
 * ```ts
 * num.parse(
 *     'I see penguins',
 *     { prefix: 'I see ', suffix: 'penguins' }
 * ) // undefined
 * num.parse('US$4', { prefix: 'R$' }) // undefined
 * num.parse('4px', { suffix: 'rem' }) // undefined
 * ```
 *
 * ```ts
 * num.parse('$100.00', { prefix: '$' }) // 100.00
 * num.parse(
 *     'width: 100px',
 *     { prefix: 'width: ', suffix: 'px' }
 * ) // 100
 * ```
 */
export function parse(
    num: string,
    options: parseOptions,
): number | undefined {
    if ("prefix" in options && num.indexOf(options.prefix) === -1) {
        return undefined;
    }
    if ("suffix" in options && num.indexOf(options.suffix) === -1) {
        return undefined;
    }
    const startIndex = "prefix" in options
        ? num.indexOf(options.prefix) + options.prefix.length
        : 0;
    const endIndex = "suffix" in options ? num.indexOf(options.suffix) : num.length;
    const slice = num.slice(startIndex, endIndex);
    if (slice === "") {
        return undefined;
    }
    const parsed = Number(slice);
    return !Number.isNaN(parsed) ? parsed : undefined;
}

/**
 * # random
 *
 * Returns a random integer number between the range inclusively.
 *
 * ## Example
 *
 * ```ts
 * num.random(2, -1) // 2 | 1 | 0 | -1
 * num.random(-1, 2) // -1 | 0 | 1 | 2
 * num.random(5, 5) // 5
 * ```
 */
export function random(
    lower: number,
    upper: number,
): number {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

/**
 * # range
 *
 * Returns a range from a number to another, respecting the step between each value.
 *
 * ## Example
 *
 * ```ts
 * num.range(2, -1) // []
 * num.range(-1, 2, -1) // []
 * ```
 *
 * ```ts
 * num.range(-1, 2) // [-1, 0, 1, 2]
 * num.range(4, 5.1) // [4, 5]
 * num.range(2, -1, -1) // [2, 1, 0, -1]
 * num.range(10.2, 9, -0.2) // [10.2, 10, 9.8, 9.6, 9.4, 9.2, 9]
 * ```
 */
export function range(
    from: number,
    to: number,
    step = 1,
): readonly number[] {
    const length = std.pipe(
        () => toFixed(to - from, 10),
        (delta) => toFixed(delta / step, 10),
        (deltaByStep) => Math.floor(deltaByStep) + 1,
        (length) => Math.max(length, 0),
    )(undefined);
    return Array(length)
        .fill(undefined)
        .map((_, i) => i * step + from)
        .map((value) => Number(value.toFixed(10)));
}

/**
 * # toFixed
 *
 * Wrapper of the toFixed function with a cast to number.
 *
 * ## Example
 *
 * ```ts
 * num.toFixed(3, 0) // 3
 * num.toFixed(1.1, 1) // 1.1
 * num.toFixed(10.10101, 1) // 10.1
 * ```
 */
export function toFixed(num: number, digits: number): number {
    return Number(num.toFixed(digits));
}
