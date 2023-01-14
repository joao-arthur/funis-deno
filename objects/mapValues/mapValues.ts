import { pipe } from "../../standard/pipe/pipe.ts";
import { plainObject } from "../../types/plainObject.ts";

export function mapValues<T>(
    obj: plainObject<T>,
    cb: (value: T) => T,
): plainObject<T> {
    return pipe(
        (obj: plainObject<T>) => Object.entries(obj),
        (entries) => entries.map(([key, value]) => [key, cb(value)]),
        Object.fromEntries,
    )(obj);
}
