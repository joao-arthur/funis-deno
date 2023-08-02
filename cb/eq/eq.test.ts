import { assertEquals } from "std/assert/assert_equals.ts";
import { eq } from "./eq.ts";

Deno.test("eq", () => {
    assertEquals(eq(1)(0), false);
    assertEquals(eq(1)(1), true);
    assertEquals(eq(1)(2), false);
});
