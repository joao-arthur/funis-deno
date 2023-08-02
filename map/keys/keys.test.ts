import { assertEquals } from "std/assert/assert_equals.ts";
import { keys } from "./keys.ts";

Deno.test("keys", () => {
    assertEquals(keys(new Map()), []);
});

Deno.test("keys", () => {
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
