import { assertEquals } from "std/assert/assert_equals.ts";
import { compareDesc } from "./compareDesc.ts";

Deno.test("compareDesc", () => {
    assertEquals(
        [1, 9, 2, 8, 3, 7, 4].sort(compareDesc),
        [9, 8, 7, 4, 3, 2, 1],
    );
});
