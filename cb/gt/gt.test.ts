import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { gt } from "./gt.ts";

Deno.test("gt", () => {
    assertEquals(gt(1)(0), false);
    assertEquals(gt(1)(1), false);
    assertEquals(gt(1)(2), true);
});
