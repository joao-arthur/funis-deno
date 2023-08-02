import { assertEquals } from "std/assert/assert_equals.ts";
import { compareAsc } from "./compareAsc.ts";

Deno.test("compareAsc", () => {
    assertEquals(
        [1, 9, 2, 8, 3, 7, 4].sort(compareAsc),
        [1, 2, 3, 4, 7, 8, 9],
    );
});
