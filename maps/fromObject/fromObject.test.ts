import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { fromObject } from "./fromObject.ts";

Deno.test("fromObject", () => {
    assertEquals(fromObject({}), new Map([]));
});

Deno.test("fromObject", () => {
    assertEquals(
        fromObject({
            Paul: "Bass",
            John: "Guitar",
            George: "Guitar",
            Ringo: "Drums",
        }),
        new Map([
            ["Paul", "Bass"],
            ["John", "Guitar"],
            ["George", "Guitar"],
            ["Ringo", "Drums"],
        ] as const),
    );
});
