import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { ge } from "./ge.ts";

Deno.test("ge", () => {
    assertEquals(ge(1)(0), false);
    assertEquals(ge(1)(1), true);
    assertEquals(ge(1)(2), true);
});
