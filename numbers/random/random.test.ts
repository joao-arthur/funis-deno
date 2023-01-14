import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { random } from "./random.ts";

Deno.test("random", () => {
    assertEquals(random(0, 0), 0);
    assertEquals(random(5, 5), 5);
    assertEquals(random(10, 10), 10);

    for (let i = 0; i < 10; i++) {
        assertEquals(random(0, 10) >= 0, true);
        assertEquals(random(0, 10) <= 10, true);
    }
    for (let i = 0; i < 10; i++) {
        assertEquals(random(0, -10) >= -10, true);
        assertEquals(random(0, -10) <= 0, true);
    }
    for (let i = 0; i < 10; i++) {
        assertEquals(random(30, 90) >= 30, true);
        assertEquals(random(30, 90) <= 90, true);
    }
    for (let i = 0; i < 10; i++) {
        assertEquals(random(30, -90) >= -90, true);
        assertEquals(random(30, -90) <= 30, true);
    }
    for (let i = 0; i < 10; i++) {
        assertEquals(random(-10, 10) >= -10, true);
        assertEquals(random(-10, 10) <= 10, true);
    }
    for (let i = 0; i < 10; i++) {
        assertEquals(random(10, -10) >= -10, true);
        assertEquals(random(10, -10) <= 10, true);
    }
});
