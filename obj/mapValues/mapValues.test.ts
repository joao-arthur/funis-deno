import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { mapValues } from "./mapValues.ts";

Deno.test("mapValues", () => {
    assertEquals(
        mapValues(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            (value) => value,
        ),
        {
            a: 1,
            b: "two",
            c: true,
            4: "nada",
        },
    );
    assertEquals(
        mapValues(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            (value) => value === true,
        ),
        {
            a: false,
            b: false,
            c: true,
            4: false,
        },
    );
    assertEquals(
        mapValues(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            (value) => `v2_${value}_test`,
        ),
        {
            a: "v2_1_test",
            b: "v2_two_test",
            c: "v2_true_test",
            4: "v2_nada_test",
        },
    );
    assertEquals(
        mapValues(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            () => "value",
        ),
        {
            a: "value",
            b: "value",
            c: "value",
            4: "value",
        },
    );
});
