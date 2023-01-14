import { plainObject } from "../../types/plainObject.ts";

export function fromObject<T>(
    obj: plainObject<T>,
): Map<string | number, T> {
    return new Map(Object.entries(obj));
}
