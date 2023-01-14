import { once } from "../once/once.ts";
import { unique } from "../unique/unique.ts";

export function disjoint<T>(
    arrs: readonly (readonly T[])[],
): readonly T[] {
    return unique(arrs.flat())
        .filter(
            (item) => once(arrs, (arr) => arr.includes(item)),
        );
}
