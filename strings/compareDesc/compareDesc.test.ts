import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { compareDesc } from "./compareDesc.ts";

Deno.test("compareDesc", () => {
    assertEquals(
        ["q", "p", "w", "o", "Q", "P", "W", "O"].sort(
            compareDesc,
        ),
        ["w", "q", "p", "o", "W", "Q", "P", "O"],
    );
});
