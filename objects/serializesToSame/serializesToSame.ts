import { combinations } from "../../arrays/combinations/combinations.ts";
import { plainObject } from "../../types/plainObject.ts";
import { serialize } from "../serialize/serialize.ts";

export function serializesToSame(
    objs: plainObject[],
): boolean {
    return combinations(objs)
        .every(([a, b]) => serialize(a) === serialize(b));
}
