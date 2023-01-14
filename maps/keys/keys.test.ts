import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { keys } from "./keys.ts";

Deno.test("keys", () => {
    assertEquals(keys(new Map()), []);

    assertEquals(
        keys(
            new Map([
                [1, { name: "Paul McCartney" }],
                [2, { name: "George Harrison" }],
            ]),
        ),
        [1, 2],
    );
});
