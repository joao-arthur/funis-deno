import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { clamp } from "./clamp.ts";

Deno.test("clamp", () => {
    assertEquals(clamp(10, { min: 8, max: 12 }), 10);
    assertEquals(clamp(10, { min: 0, max: 9 }), 9);
    assertEquals(clamp(10, { min: 20, max: 100 }), 20);
    assertEquals(clamp(10, { min: -100, max: -1 }), -1);
});

Deno.test("clamp", () => {
    assertEquals(clamp(-1, { min: -1, max: -1 }), -1);
    assertEquals(clamp(10, { min: 10, max: 10 }), 10);
});

Deno.test("clamp", () => {
    assertEquals(clamp(5, { min: -1, max: 5 }), 5);
    assertEquals(clamp(12, { min: 8, max: 12 }), 12);
});

Deno.test("clamp", () => {
    assertEquals(clamp(-1, { min: -1, max: 5 }), -1);
    assertEquals(clamp(8, { min: 8, max: 12 }), 8);
});

Deno.test("clamp", () => {
    assertEquals(clamp(-1, { min: -1, max: 5 }), -1);
    assertEquals(clamp(8, { min: 8, max: 12 }), 8);
});

Deno.test("clamp", () => {
    assertEquals(clamp(77, { min: 99 }), 99);
    assertEquals(clamp(10, { min: 8 }), 10);
});

Deno.test("clamp", () => {
    assertEquals(clamp(-10, { max: 5 }), -10);
    assertEquals(clamp(846, { max: -1 }), -1);
});
