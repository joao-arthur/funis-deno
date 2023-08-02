import { assertEquals } from "std/assert/assert_equals.ts";
import { random } from "./random.ts";

Deno.test("random", () => {
    assertEquals(random(""), "");
    assertEquals(random("a"), "a");
    assertEquals(random("b"), "b");
    assertEquals(random("c"), "c");
});

Deno.test("random", () => {
    assertEquals(random("Botticelli").length, 1);
    assertEquals("Botticelli".includes(random("Botticelli")), true);
    assertEquals(random("Michelangelo").length, 1);
    assertEquals(
        "Michelangelo".includes(random("Michelangelo")),
        true,
    );
});
