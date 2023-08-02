import { assertEquals } from "std/assert/assert_equals.ts";
import { compareAsc } from "./compareAsc.ts";

Deno.test("compareAsc", () => {
    assertEquals(
        ["q", "p", "w", "o", "Q", "P", "W", "O"].sort(compareAsc),
        ["O", "P", "Q", "W", "o", "p", "q", "w"],
    );
});
