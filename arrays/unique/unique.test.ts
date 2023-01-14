import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { unique } from "./unique.ts";

Deno.test("unique", () => {
    assertEquals(unique([]), []);

    assertEquals(unique([1]), [1]);

    const symbolValue = Symbol(1);
    assertEquals(
        unique([
            1,
            1,
            "john",
            "john",
            true,
            false,
            true,
            symbolValue,
            symbolValue,
        ]),
        [1, "john", true, false, symbolValue],
    );
});
