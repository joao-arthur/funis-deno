import { assertEquals } from "std/assert/assert_equals.ts";
import { kebabCase } from "./kebabCase.ts";

Deno.test("kebabCase", () => {
    assertEquals(kebabCase(""), "");
});

Deno.test("kebabCase", () => {
    assertEquals(kebabCase("hey"), "hey");
});

Deno.test("kebabCase", () => {
    assertEquals(kebabCase("j S o N"), "j-s-o-n");
    assertEquals(kebabCase("j_S_o_N"), "j-s-o-n");
    assertEquals(kebabCase("j-S-o-N"), "j-s-o-n");
});

Deno.test("kebabCase", () => {
    assertEquals(kebabCase("hey Jo3"), "hey-jo3");
    assertEquals(kebabCase("hey_Jo3"), "hey-jo3");
    assertEquals(kebabCase("hey-Jo3"), "hey-jo3");
});
