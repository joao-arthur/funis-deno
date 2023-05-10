import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { last } from "./last.ts";

Deno.test("last", () => {
    assertEquals(last(new Map()), undefined);
});

Deno.test("last", () => {
    assertEquals(
        last(
            new Map([
                [1, { name: "Paul McCartney" }],
                [2, { name: "John Lennon" }],
            ]),
        ),
        [2, { name: "John Lennon" }],
    );
    assertEquals(
        last(
            new Map([
                ["RF", { birthday: "1834-10-01T11:18:35.000Z" }],
                ["FJW", { birthday: "2022-11-13T22:55:55.036Z" }],
            ]),
        ),
        ["FJW", { birthday: "2022-11-13T22:55:55.036Z" }],
    );
});
