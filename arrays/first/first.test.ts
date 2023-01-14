import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { first } from "./first.ts";

Deno.test("first", () => {
    assertEquals(first([]), undefined);

    assertEquals(first([false, true]), false);
    assertEquals(first([4, 5, 6]), 4);
    assertEquals(
        first(["George", "Paul", "John", "Ringo"]),
        "George",
    );
});
