import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { camelCase } from "./camelCase.ts";

Deno.test("camelCase", () => {
    assertEquals(camelCase(""), "");

    assertEquals(camelCase("hey"), "hey");

    assertEquals(camelCase("j S o N"), "jSON");
    assertEquals(camelCase("hey Jo3"), "heyJo3");

    assertEquals(camelCase("j_S_o_N"), "jSON");
    assertEquals(camelCase("hey_Jo3"), "heyJo3");

    assertEquals(camelCase("j-S-o-N"), "jSON");
    assertEquals(camelCase("hey-Jo3"), "heyJo3");
});
