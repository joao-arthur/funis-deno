import { assertEquals } from "std/assert/assert_equals.ts";
import { mapKeys } from "./mapKeys.ts";

Deno.test("mapKeys", () => {
    assertEquals(
        mapKeys(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            (key) => key,
        ),
        {
            a: 1,
            b: "two",
            c: true,
            4: "nada",
        },
    );
    assertEquals(
        mapKeys(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            (key) => `v2_${key}_test`,
        ),
        {
            v2_a_test: 1,
            v2_b_test: "two",
            v2_c_test: true,
            v2_4_test: "nada",
        },
    );
    assertEquals(
        mapKeys(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            () => "key",
        ),
        {
            key: true,
        },
    );
});
