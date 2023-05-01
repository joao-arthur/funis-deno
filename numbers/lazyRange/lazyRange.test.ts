import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { lazyRange } from "./lazyRange.ts";

Deno.test("lazyRange", () => {
    const itter = lazyRange(-1, 2);
    assertEquals(itter.next(), { done: false, value: -1 });
    assertEquals(itter.next(), { done: false, value: 0 });
    assertEquals(itter.next(), { done: false, value: 1 });
    assertEquals(itter.next(), { done: false, value: 2 });
    assertEquals(itter.next(), { done: true, value: undefined });
});

Deno.test("lazyRange", () => {
    const itter = lazyRange(2, 5.3, 0.5);
    assertEquals(itter.next(), { done: false, value: 2 });
    assertEquals(itter.next(), { done: false, value: 2.5 });
    assertEquals(itter.next(), { done: false, value: 3 });
    assertEquals(itter.next(), { done: false, value: 3.5 });
    assertEquals(itter.next(), { done: false, value: 4 });
    assertEquals(itter.next(), { done: false, value: 4.5 });
    assertEquals(itter.next(), { done: false, value: 5 });
    assertEquals(itter.next(), { done: true, value: undefined });
});

Deno.test("lazyRange", () => {
    const itter = lazyRange(-1, 2);
    const values: number[] = [];
    for (const value of itter) {
        values.push(value);
    }
    assertEquals(values, [-1, 0, 1, 2]);
});

Deno.test("lazyRange", () => {
    const itter = lazyRange(2, -1);
    assertEquals(itter.next(), { done: true, value: undefined });
});

Deno.test("lazyRange", () => {
    const itter = lazyRange(2, -1);
    const values: number[] = [];
    for (const value of itter) {
        values.push(value);
    }
    assertEquals(values, []);
});

Deno.test("lazyRange", () => {
    const itter = lazyRange(2, 5.3, 0.5);
    const values: number[] = [];
    for (const value of itter) {
        values.push(value);
    }
    assertEquals(values, [2, 2.5, 3, 3.5, 4, 4.5, 5]);
});
