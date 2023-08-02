import { assertEquals } from "std/assert/assert_equals.ts";
import { combinations } from "./combinations.ts";

Deno.test("combinations", () => {
    assertEquals(combinations([]), []);
    assertEquals(combinations([10]), []);
});

Deno.test("combinations", () => {
    assertEquals(combinations([10, 20]), [[10, 20]]);
    assertEquals(combinations([10, 20, 30, 40, 50]), [
        [10, 20],
        [10, 30],
        [10, 40],
        [10, 50],
        [20, 30],
        [20, 40],
        [20, 50],
        [30, 40],
        [30, 50],
        [40, 50],
    ]);
});
