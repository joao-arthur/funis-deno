import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { entries } from "./entries.ts";

Deno.test("entries", () => {
    assertEquals(entries(new Map()), []);
});

Deno.test("entries", () => {
    assertEquals(
        entries(
            new Map([
                [1, { name: "Paul McCartney" }],
                [2, { name: "George Harrison" }],
            ]),
        ),
        [
            [1, { name: "Paul McCartney" }],
            [2, { name: "George Harrison" }],
        ],
    );
});
