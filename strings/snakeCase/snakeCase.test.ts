import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { snakeCase } from "./snakeCase.ts";

Deno.test("snakeCase", () => {
    assertEquals(snakeCase(""), "");

    assertEquals(snakeCase("hey"), "hey");

    assertEquals(snakeCase("j S o N"), "j_s_o_n");
    assertEquals(snakeCase("hey Jo3"), "hey_jo3");

    assertEquals(snakeCase("j_S_o_N"), "j_s_o_n");
    assertEquals(snakeCase("hey_Jo3"), "hey_jo3");

    assertEquals(snakeCase("j-S-o-N"), "j_s_o_n");
    assertEquals(snakeCase("hey-Jo3"), "hey_jo3");
});
