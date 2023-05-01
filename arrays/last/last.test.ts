import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { last } from "./last.ts";

Deno.test("last", () => {
    assertEquals(last([]), undefined);
});

Deno.test("last", () => {
    assertEquals(last([4, 5, 6]), 6);
    assertEquals(
        last(["George", "Paul", "John", "Ringo"]),
        "Ringo",
    );
    assertEquals(last([false, true]), true);
});
