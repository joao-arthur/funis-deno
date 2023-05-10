import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { le } from "./le.ts";

Deno.test("le", () => {
    assertEquals(le(1)(0), false);
    assertEquals(le(1)(1), true);
    assertEquals(le(1)(2), true);
});
