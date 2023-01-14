import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { values } from "./values.ts";

Deno.test("values", () => {
    assertEquals(values(new Map()), []);

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
