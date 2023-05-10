import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { compareAsc } from "./compareAsc.ts";

Deno.test("compareAsc", () => {
    assertEquals(
        ["q", "p", "w", "o", "Q", "P", "W", "O"].sort(compareAsc),
        ["O", "P", "Q", "W", "o", "p", "q", "w"],
    );
});
