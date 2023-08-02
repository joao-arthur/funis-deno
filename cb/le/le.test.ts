import { assertEquals } from "std/assert/assert_equals.ts";
import { le } from "./le.ts";

Deno.test("le", () => {
    assertEquals(le(1)(0), true);
    assertEquals(le(1)(1), true);
    assertEquals(le(1)(2), false);
});
