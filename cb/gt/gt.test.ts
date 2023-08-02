import { assertEquals } from "std/assert/assert_equals.ts";
import { gt } from "./gt.ts";

Deno.test("gt", () => {
    assertEquals(gt(1)(0), false);
    assertEquals(gt(1)(1), false);
    assertEquals(gt(1)(2), true);
});
