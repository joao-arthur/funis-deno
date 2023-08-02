import { assertEquals } from "std/assert/assert_equals.ts";
import { isValid } from "./isValid.ts";

Deno.test("isValid", () => {
    assertEquals(isValid(undefined), false);
    assertEquals(isValid(null), false);
});

Deno.test("isValid", () => {
    assertEquals(isValid(""), true);
    assertEquals(isValid(" "), true);
    assertEquals(isValid("Lorem ipsum"), true);
});
