import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { eq } from "./eq.ts";

Deno.test("eq", () => {
    assertEquals(eq(1)(0), false);
    assertEquals(eq(1)(1), true);
    assertEquals(eq(1)(2), false);
});
