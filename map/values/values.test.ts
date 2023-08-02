import { assertEquals } from "std/assert/assert_equals.ts";
import { values } from "./values.ts";

Deno.test("values", () => {
    assertEquals(values(new Map()), []);
});

Deno.test("values", () => {
    assertEquals(
        values(
            new Map([
                [1, { name: "Paul McCartney" }],
                [2, { name: "George Harrison" }],
            ]),
        ),
        [
            { name: "Paul McCartney" },
            { name: "George Harrison" },
        ],
    );
});
