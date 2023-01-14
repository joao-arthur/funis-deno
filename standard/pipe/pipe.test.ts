import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { pipe } from "./pipe.ts";

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
