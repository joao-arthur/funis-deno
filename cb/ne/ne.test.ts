import { assertEquals } from "std/assert/assert_equals.ts";
import { ne } from "./ne.ts";

Deno.test("ne", () => {
    assertEquals(ne(1)(0), true);
    assertEquals(ne(1)(1), false);
    assertEquals(ne(1)(2), true);
});
