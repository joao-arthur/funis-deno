import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { isValid } from "./isValid.ts";

Deno.test("isValid", () => {
    assertEquals(isValid(Number.NaN), false);
    assertEquals(isValid(undefined), false);
    assertEquals(isValid(null), false);
});

Deno.test("isValid", () => {
    assertEquals(isValid(1), true);
    assertEquals(isValid(-1), true);
    assertEquals(isValid(0), true);
    assertEquals(isValid(3.1), true);
    assertEquals(isValid(-1.82), true);
    assertEquals(isValid(+0), true);
    assertEquals(isValid(-0), true);
    assertEquals(isValid(Number.EPSILON), true);
    assertEquals(isValid(Number.MAX_SAFE_INTEGER), true);
    assertEquals(isValid(Number.NEGATIVE_INFINITY), true);
    assertEquals(isValid(Number.POSITIVE_INFINITY), true);
});
