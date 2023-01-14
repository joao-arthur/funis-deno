import { pipe } from "../../standard/pipe/pipe.ts";
import { plainObject } from "../../types/plainObject.ts";

export function mapKeys<T>(
    obj: plainObject<T>,
    cb: (key: string | number) => string | number,
): plainObject<T> {
    return pipe(
        (obj: plainObject<T>) => Object.entries(obj),
        (entries) => entries.map(([key, value]) => [cb(key), value]),
        Object.fromEntries,
    )(obj);
}
