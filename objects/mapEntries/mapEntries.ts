import { pipe } from "../../standard/pipe/pipe.ts";
import { plainObject } from "../../types/plainObject.ts";

export function mapEntries<T>(
    obj: plainObject<T>,
    cb: (
        entry: readonly [string | number, T],
    ) => readonly [string | number, T],
): plainObject<T> {
    return pipe(
        (obj: plainObject<T>) => Object.entries(obj),
        (entries) => entries.map(cb),
        Object.fromEntries,
    )(obj);
}
