import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { compareDesc } from "./compareDesc.ts";

Deno.test("compareDesc", () => {
    assertEquals(
        [1, 9, 2, 8, 3, 7, 4].sort(compareDesc),
        [9, 8, 7, 4, 3, 2, 1],
    );
});
