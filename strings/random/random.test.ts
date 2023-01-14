import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { random } from "./random.ts";

Deno.test("random", () => {
    assertEquals(random(""), "");
    assertEquals(random("a"), "a");
    assertEquals(random("b"), "b");
    assertEquals(random("c"), "c");

    assertEquals(random("Botticelli").length, 1);
    assertEquals("Botticelli".includes(random("Botticelli")), true);

    assertEquals(random("Michelangelo").length, 1);
    assertEquals(
        "Michelangelo".includes(random("Michelangelo")),
        true,
    );
});
