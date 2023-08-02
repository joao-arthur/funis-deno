import { assertEquals } from "std/assert/assert_equals.ts";
import { normalizeZero } from "./normalizeZero.ts";

Deno.test("normalizeZero", () => {
    assertEquals(normalizeZero(-0), 0);
    assertEquals(normalizeZero(0), 0);
    assertEquals(normalizeZero(10), 10);
    assertEquals(normalizeZero(-10), -10);
});
