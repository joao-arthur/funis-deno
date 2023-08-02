import { assertEquals } from "std/assert/assert_equals.ts";
import { lt } from "./lt.ts";

Deno.test("lt", () => {
    assertEquals(lt(1)(0), true);
    assertEquals(lt(1)(1), false);
    assertEquals(lt(1)(2), false);
});
