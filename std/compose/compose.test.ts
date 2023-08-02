import { assertEquals } from "std/assert/assert_equals.ts";
import { compose } from "./compose.ts";

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
