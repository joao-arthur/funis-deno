import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { toFixed } from "./toFixed.ts";

Deno.test("toFixed", () => {
    assertEquals(toFixed(0, 0), 0);
    assertEquals(toFixed(3, 0), 3);
    assertEquals(toFixed(0.2, 0), 0);
    assertEquals(toFixed(0.4, 0), 0);
    assertEquals(toFixed(1.1, 0), 1);
    assertEquals(toFixed(9.9999, 0), 10);
    assertEquals(toFixed(10.10101, 0), 10);
});

Deno.test("toFixed", () => {
    assertEquals(toFixed(0, 1), 0);
    assertEquals(toFixed(3, 1), 3);
    assertEquals(toFixed(0.2, 1), 0.2);
    assertEquals(toFixed(0.4, 1), 0.4);
    assertEquals(toFixed(1.1, 1), 1.1);
    assertEquals(toFixed(9.9999, 1), 10);
    assertEquals(toFixed(10.10101, 1), 10.1);
});

Deno.test("toFixed", () => {
    assertEquals(toFixed(0, 2), 0);
    assertEquals(toFixed(3, 2), 3);
    assertEquals(toFixed(0.2, 2), 0.2);
    assertEquals(toFixed(0.4, 2), 0.4);
    assertEquals(toFixed(1.1, 2), 1.1);
    assertEquals(toFixed(9.9999, 2), 10);
    assertEquals(toFixed(10.10101, 2), 10.1);
});

Deno.test("toFixed", () => {
    assertEquals(toFixed(0, 3), 0);
    assertEquals(toFixed(3, 3), 3);
    assertEquals(toFixed(0.2, 3), 0.2);
    assertEquals(toFixed(0.4, 3), 0.4);
    assertEquals(toFixed(1.1, 3), 1.1);
    assertEquals(toFixed(9.9999, 3), 10);
    assertEquals(toFixed(10.10101, 3), 10.101);
});

Deno.test("toFixed", () => {
    assertEquals(toFixed(0, 4), 0);
    assertEquals(toFixed(3, 4), 3);
    assertEquals(toFixed(0.2, 4), 0.2);
    assertEquals(toFixed(0.4, 4), 0.4);
    assertEquals(toFixed(1.1, 4), 1.1);
    assertEquals(toFixed(9.9999, 4), 9.9999);
    assertEquals(toFixed(10.10101, 4), 10.101);
});

Deno.test("toFixed", () => {
    assertEquals(toFixed(9.9999999999, 10), 9.9999999999);
});
