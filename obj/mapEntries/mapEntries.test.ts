import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { mapEntries } from "./mapEntries.ts";

Deno.test("mapEntries", () => {
    assertEquals(
        mapEntries(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            ([key, value]) => [key, value],
        ),
        {
            a: 1,
            b: "two",
            c: true,
            4: "nada",
        },
    );
    assertEquals(
        mapEntries(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            ([key, value]) => [`key_${key}`, `value_${value}`],
        ),
        {
            key_a: "value_1",
            key_b: "value_two",
            key_c: "value_true",
            key_4: "value_nada",
        },
    );
    assertEquals(
        mapEntries(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            () => ["key", "value"],
        ),
        {
            key: "value",
        },
    );
});
