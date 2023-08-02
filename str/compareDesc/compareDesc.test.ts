import { assertEquals } from "std/assert/assert_equals.ts";
import { compareDesc } from "./compareDesc.ts";

Deno.test("compareDesc", () => {
    assertEquals(
        ["q", "p", "w", "o", "Q", "P", "W", "O"].sort(
            compareDesc,
        ),
        ["w", "q", "p", "o", "W", "Q", "P", "O"],
    );
});
