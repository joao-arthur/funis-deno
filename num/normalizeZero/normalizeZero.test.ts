import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { normalizeZero } from "./normalizeZero.ts";

Deno.test("normalizeZero", () => {
    assertEquals(normalizeZero(-0), 0);
    assertEquals(normalizeZero(0), 0);
    assertEquals(normalizeZero(10), 10);
    assertEquals(normalizeZero(-10), -10);
});
