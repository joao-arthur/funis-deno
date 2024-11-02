import { assertEquals } from "std/assert/assert_equals.ts";
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

Deno.test("compareAsc", () => {
    assertEquals(
        [1, 9, 2, 8, 3, 7, 4].sort(compareAsc),
        [1, 2, 3, 4, 7, 8, 9],
    );
});

Deno.test("compareDesc", () => {
    assertEquals(
        [1, 9, 2, 8, 3, 7, 4].sort(compareDesc),
        [9, 8, 7, 4, 3, 2, 1],
    );
});
Deno.test("isValid", () => {
    assertEquals(isValid(Number.NaN), false);
    assertEquals(isValid(undefined), false);
    assertEquals(isValid(null), false);
});

Deno.test("isValid", () => {
    assertEquals(isValid(1), true);
    assertEquals(isValid(-1), true);
    assertEquals(isValid(0), true);
    assertEquals(isValid(3.1), true);
    assertEquals(isValid(-1.82), true);
    assertEquals(isValid(+0), true);
    assertEquals(isValid(-0), true);
    assertEquals(isValid(Number.EPSILON), true);
    assertEquals(isValid(Number.MAX_SAFE_INTEGER), true);
    assertEquals(isValid(Number.NEGATIVE_INFINITY), true);
    assertEquals(isValid(Number.POSITIVE_INFINITY), true);
});

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
Deno.test("normalizeZero", () => {
    assertEquals(normalizeZero(-0), 0);
    assertEquals(normalizeZero(0), 0);
    assertEquals(normalizeZero(10), 10);
    assertEquals(normalizeZero(-10), -10);
});

Deno.test("parse", () => {
    assertEquals(parse("US$4", { prefix: "R$" }), undefined);
    assertEquals(parse("R$-6", { prefix: "rem" }), undefined);
    assertEquals(parse("@-1", { prefix: "km/h" }), undefined);
    assertEquals(parse("4px", { suffix: "rem" }), undefined);
    assertEquals(parse("-6em", { suffix: "rem" }), undefined);
    assertEquals(parse("-1m/s", { suffix: "km/h" }), undefined);
});

Deno.test("parse", () => {
    assertEquals(parse("$100.00", { prefix: "$" }), 100.00);
    assertEquals(parse("US$0", { prefix: "US$" }), 0);
    assertEquals(parse("R$-1.53", { prefix: "R$" }), -1.53);
    assertEquals(parse("^1.4", { prefix: "^" }), 1.4);
});

Deno.test("parse", () => {
    assertEquals(parse("100px", { suffix: "px" }), 100);
    assertEquals(parse("0px", { suffix: "px" }), 0);
    assertEquals(parse("-1.53m/s", { suffix: "m/s" }), -1.53);
    assertEquals(parse("1.4kº", { suffix: "kº" }), 1.4);
    assertEquals(parse("74%", { suffix: "%" }), 74);
});

Deno.test("parse", () => {
    assertEquals(
        parse(
            "width: 100px",
            { prefix: "width: ", suffix: "px" },
        ),
        100,
    );
    assertEquals(
        parse(
            "speed: -1.53m/s",
            { prefix: "speed: ", suffix: "m/s" },
        ),
        -1.53,
    );
});

Deno.test("parse", () => {
    assertEquals(
        parse(
            "US$4 donnut",
            { prefix: "R$", suffix: "apple" },
        ),
        undefined,
    );
    assertEquals(
        parse(
            "US$4 donnut",
            { prefix: "US$", suffix: "apple" },
        ),
        undefined,
    );
});

Deno.test("parse", () => {
    assertEquals(
        parse(
            "speed: -4px",
            { prefix: "speed: " },
        ),
        undefined,
    );
    assertEquals(
        parse(
            "speed: -4px",
            { suffix: "px" },
        ),
        undefined,
    );
    assertEquals(parse(":2em", { prefix: ":" }), undefined);
    assertEquals(parse(":2em", { suffix: "em" }), undefined);
});

Deno.test("parse", () => {
    assertEquals(
        parse("I see", { prefix: "I see" }),
        undefined,
    );
    assertEquals(
        parse("penguins", { suffix: "penguins" }),
        undefined,
    );
    assertEquals(
        parse("I see penguins", {
            prefix: "I see ",
            suffix: "penguins",
        }),
        undefined,
    );
});

Deno.test("random", () => {
    assertEquals(random(0, 0), 0);
    assertEquals(random(5, 5), 5);
    assertEquals(random(10, 10), 10);
});

Deno.test("random", () => {
    for (let i = 0; i < 10; i++) {
        assertEquals(random(10, -10) >= -10, true);
        assertEquals(random(10, -10) <= 10, true);
    }
});

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
