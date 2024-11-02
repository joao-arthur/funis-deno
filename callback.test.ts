import { assertEquals } from "std/assert/assert_equals.ts";
import { eq, ge, gt, le, lt, ne } from "./callback.ts";

Deno.test("eq", () => {
    assertEquals(eq(1)(0), false);
    assertEquals(eq(1)(1), true);
    assertEquals(eq(1)(2), false);
});

Deno.test("ge", () => {
    assertEquals(ge(1)(0), false);
    assertEquals(ge(1)(1), true);
    assertEquals(ge(1)(2), true);
});

Deno.test("gt", () => {
    assertEquals(gt(1)(0), false);
    assertEquals(gt(1)(1), false);
    assertEquals(gt(1)(2), true);
});

Deno.test("le", () => {
    assertEquals(le(1)(0), true);
    assertEquals(le(1)(1), true);
    assertEquals(le(1)(2), false);
});

Deno.test("lt", () => {
    assertEquals(lt(1)(0), true);
    assertEquals(lt(1)(1), false);
    assertEquals(lt(1)(2), false);
});

Deno.test("ne", () => {
    assertEquals(ne(1)(0), true);
    assertEquals(ne(1)(1), false);
    assertEquals(ne(1)(2), true);
});
