import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { lt } from "./lt.ts";

Deno.test("lt", () => {
    assertEquals(lt(1)(0), false);
    assertEquals(lt(1)(1), false);
    assertEquals(lt(1)(2), true);
});
