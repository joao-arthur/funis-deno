/**
 * # eq
 *
 * Returns a function that compares val1 === val2.
 *
 * ## Example
 *
 * ```ts
 * cb.eq(1)(1) // true
 * ```
 *
 * ```ts
 * cb.eq(2)(2) // true
 * ```
 */
export const eq = <T>(val2: T) => (val1: T) => {
    return val1 === val2;
};

/**
 * # ge
 *
 * Returns a function that compares val1 >= val2.
 *
 * ## Example
 *
 * ```ts
 * cb.ge(1)(2) // true
 * ```
 *
 * ```ts
 * cb.ge(1)(1) // true
 * ```
 */
export const ge = <T>(val2: T) => (val1: T) => {
    return val1 >= val2;
};

/**
 * # gt
 *
 * Returns a function that compares val1 > val2.
 *
 * ## Example
 *
 * ```ts
 * cb.gt(1)(2) // true
 * ```
 *
 * ```ts
 * cb.gt(1)(1) // false
 * ```
 */
export const gt = <T>(val2: T) => (val1: T) => {
    return val1 > val2;
};

/**
 * # le
 *
 * Returns a function that compares val1 <= val2.
 *
 * ## Example
 *
 * ```ts
 * cb.le(2)(1) // true
 * ```
 *
 * ```ts
 * cb.le(1)(1) // true
 * ```
 */
export const le = <T>(val2: T) => (val1: T) => {
    return val1 <= val2;
};

/**
 * # lt
 *
 * Returns a function that compares val1 < val2.
 *
 * ## Example
 *
 * ```ts
 * cb.lt(2)(1) // true
 * ```
 *
 * ```ts
 * cb.lt(1)(1) // false
 * ```
 */
export const lt = <T>(val2: T) => (val1: T) => {
    return val1 < val2;
};

/**
 * # ne
 *
 * Returns a function that compares val1 !== val2.
 *
 * ## Example
 *
 * ```ts
 * cb.ne(1)(2) // true
 * ```
 *
 * ```ts
 * cb.ne(2)(1) // true
 * ```
 */
export const ne = <T>(val2: T) => (val1: T) => {
    return val1 !== val2;
};
