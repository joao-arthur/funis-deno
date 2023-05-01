import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { snakeCase } from "./snakeCase.ts";

Deno.test("snakeCase", () => {
    assertEquals(snakeCase(""), "");
});

Deno.test("snakeCase", () => {
    assertEquals(snakeCase("hey"), "hey");
});

Deno.test("snakeCase", () => {
    assertEquals(snakeCase("j S o N"), "j_s_o_n");
    assertEquals(snakeCase("j_S_o_N"), "j_s_o_n");
    assertEquals(snakeCase("j-S-o-N"), "j_s_o_n");
});

Deno.test("snakeCase", () => {
    assertEquals(snakeCase("hey Jo3"), "hey_jo3");
    assertEquals(snakeCase("hey_Jo3"), "hey_jo3");
    assertEquals(snakeCase("hey-Jo3"), "hey_jo3");
});
