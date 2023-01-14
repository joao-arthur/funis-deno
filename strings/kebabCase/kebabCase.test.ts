import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { kebabCase } from "./kebabCase.ts";

Deno.test("kebabCase", () => {
    assertEquals(kebabCase(""), "");

    assertEquals(kebabCase("hey"), "hey");

    assertEquals(kebabCase("j S o N"), "j-s-o-n");
    assertEquals(kebabCase("hey Jo3"), "hey-jo3");

    assertEquals(kebabCase("j_S_o_N"), "j-s-o-n");
    assertEquals(kebabCase("hey_Jo3"), "hey-jo3");

    assertEquals(kebabCase("j-S-o-N"), "j-s-o-n");
    assertEquals(kebabCase("hey-Jo3"), "hey-jo3");
});
