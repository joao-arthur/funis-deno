import { assertEquals } from "std/assert/assert_equals.ts";
import { compose, pipe, self } from "./standard.ts";

Deno.test("self", () => {
    const symbol = Symbol("symbol");

    assertEquals(self(1), 1);
    assertEquals(self("hello world"), "hello world");
    assertEquals(self(true), true);
    assertEquals(self({ a: "a" }), { a: "a" });
    assertEquals(self([3, 2, 1]), [3, 2, 1]);
    assertEquals(self(symbol), symbol);
});

Deno.test("pipe", () => {
    assertEquals(
        pipe(
            (num: number) => num - 90,
            (num) => num / 2,
            (num) => `${num}${num}.${num}${num}`,
        )(100),
        "55.55",
    );
    assertEquals(
        pipe(
            (num: number) => num - 90,
            (num) => num / 2,
            (num) => num - 2,
            (num) => -num,
            (num) => num + 10,
        )(100),
        7,
    );
});

Deno.test("compose", () => {
    assertEquals(
        compose(
            (num) => `${num}${num}.${num}${num}`,
            (num: number) => num / 2,
            (num: number) => num - 90,
        )(100),
        "55.55",
    );
    assertEquals(
        compose(
            (num) => num + 10,
            (num: number) => -num,
            (num: number) => num - 2,
            (num: number) => num / 2,
            (num: number) => num - 90,
        )(100),
        7,
    );
});
