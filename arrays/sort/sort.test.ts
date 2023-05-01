import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { sort } from "./sort.ts";

Deno.test("sort", () => {
    const original = [9, 1, true, "olá mundo"];
    const sorted = sort(original);

    assertEquals(original, [9, 1, true, "olá mundo"]);
    assertEquals(sorted, [1, 9, "olá mundo", true]);
});

Deno.test("sort", () => {
    assertEquals(
        sort([1, 9, 2, 8, 3, 7, 4, 6, 5], (a, b) => a - b),
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
    );
    assertEquals(
        sort([1, 9, 2, 8, 3, 7, 4, 6, 5], (a, b) => b - a),
        [9, 8, 7, 6, 5, 4, 3, 2, 1],
    );
    assertEquals(
        sort([1, 9, 2, 8, 3, 7, 4, 6, 5], () => 0),
        [1, 9, 2, 8, 3, 7, 4, 6, 5],
    );
});
