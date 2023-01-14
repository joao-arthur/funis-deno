import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { isValid } from "./isValid.ts";

Deno.test("isValid", () => {
    assertEquals(isValid(undefined), false);
    assertEquals(isValid(null), false);

    assertEquals(isValid(""), true);
    assertEquals(isValid(" "), true);
    assertEquals(isValid("Lorem ipsum"), true);
});
