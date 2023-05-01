import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { camelCase } from "./camelCase.ts";

Deno.test("camelCase", () => {
    assertEquals(camelCase(""), "");
});

Deno.test("camelCase", () => {
    assertEquals(camelCase("hey"), "hey");
});

Deno.test("camelCase", () => {
    assertEquals(camelCase("j S o N"), "jSON");
    assertEquals(camelCase("j_S_o_N"), "jSON");
    assertEquals(camelCase("j-S-o-N"), "jSON");
});

Deno.test("camelCase", () => {
    assertEquals(camelCase("hey Jo3"), "heyJo3");
    assertEquals(camelCase("hey_Jo3"), "heyJo3");
    assertEquals(camelCase("hey-Jo3"), "heyJo3");
});
