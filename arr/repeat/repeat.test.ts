import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { repeat } from "./repeat.ts";

const items = [0, 1, 2];

Deno.test("repeat", () => {
    assertEquals(repeat(items, -1), []);
    assertEquals(repeat(items, 0), []);
    assertEquals(repeat(items, 1), [0, 1, 2]);
    assertEquals(repeat(items, 2), [0, 1, 2, 0, 1, 2]);
});
