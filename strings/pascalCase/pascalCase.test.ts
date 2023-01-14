import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { pascalCase } from "./pascalCase.ts";

Deno.test("pascalCase", () => {
    assertEquals(pascalCase(""), "");

    assertEquals(pascalCase("hey"), "Hey");

    assertEquals(pascalCase("j S o N"), "JSON");
    assertEquals(pascalCase("hey Jo3"), "HeyJo3");

    assertEquals(pascalCase("j_S_o_N"), "JSON");
    assertEquals(pascalCase("hey_Jo3"), "HeyJo3");

    assertEquals(pascalCase("j-S-o-N"), "JSON");
    assertEquals(pascalCase("hey-Jo3"), "HeyJo3");
});
