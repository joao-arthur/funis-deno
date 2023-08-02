import { assertEquals } from "std/assert/assert_equals.ts";
import { range } from "./range.ts";

Deno.test("range", () => {
    assertEquals(range(-1, 2), [-1, 0, 1, 2]);
    assertEquals(
        range(0, 10.3),
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    );
    assertEquals(range(4, 5.1), [4, 5]);
});

Deno.test("range", () => {
    assertEquals(range(2, -1), []);
    assertEquals(range(-1, 2, -1), []);
    assertEquals(range(10.2, 0), []);
    assertEquals(range(0, 10.2, -1), []);
    assertEquals(range(5, 4.2), []);
    assertEquals(range(4.2, 5, -1), []);
});

Deno.test("range", () => {
    assertEquals(
        range(2, 5.3, 0.5),
        [2, 2.5, 3, 3.5, 4, 4.5, 5],
    );
    assertEquals(
        range(-3.5, -2.5, 0.2),
        [-3.5, -3.3, -3.1, -2.9, -2.7, -2.5],
    );
});

Deno.test("range", () => {
    assertEquals(range(2, -1, -1), [2, 1, 0, -1]);
    assertEquals(
        range(10.2, 9, -0.2),
        [10.2, 10, 9.8, 9.6, 9.4, 9.2, 9],
    );
    assertEquals(range(5, 4.2, -1), [5]);
});
