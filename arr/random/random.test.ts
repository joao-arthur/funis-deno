import { assertEquals } from "std/assert/assert_equals.ts";
import { random } from "./random.ts";

Deno.test("random", () => {
    assertEquals(random([]), undefined);
});

Deno.test("random", () => {
    assertEquals(random([true]), true);
    assertEquals(random([5]), 5);
    assertEquals(random(["Memento mori"]), "Memento mori");
});

Deno.test("random", () => {
    const result = random([true, false, 0, 1, "y", "n"]);
    assertEquals(
        [true, false, 0, 1, "y", "n"].includes(result!),
        true,
    );
});
