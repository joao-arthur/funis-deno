import { assertEquals } from "std/assert/assert_equals.ts";
import { ge } from "./ge.ts";

Deno.test("ge", () => {
    assertEquals(ge(1)(0), false);
    assertEquals(ge(1)(1), true);
    assertEquals(ge(1)(2), true);
});
