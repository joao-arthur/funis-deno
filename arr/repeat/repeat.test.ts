import { assertEquals } from "std/assert/assert_equals.ts";
import { repeat } from "./repeat.ts";

const items = [0, 1, 2];

Deno.test("repeat", () => {
    assertEquals(repeat(items, -1), []);
    assertEquals(repeat(items, 0), []);
    assertEquals(repeat(items, 1), [0, 1, 2]);
    assertEquals(repeat(items, 2), [0, 1, 2, 0, 1, 2]);
});
