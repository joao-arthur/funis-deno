import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { first } from "./first.ts";

Deno.test("first", () => {
    assertEquals(first(new Map()), undefined);
});

Deno.test("first", () => {
    assertEquals(
        first(
            new Map([
                [1, { name: "Paul McCartney" }],
                [2, { name: "John Lennon" }],
            ]),
        ),
        [1, { name: "Paul McCartney" }],
    );
    assertEquals(
        first(
            new Map([
                ["RF", { birthday: "1834-10-01T11:18:35.000Z" }],
                ["FJW", { birthday: "2022-11-13T22:55:55.036Z" }],
            ]),
        ),
        ["RF", { birthday: "1834-10-01T11:18:35.000Z" }],
    );
});
