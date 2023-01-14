import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { mapValues } from "./mapValues.ts";

Deno.test("mapValues", () => {
    assertEquals(
        mapValues(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            (value) => value,
        ),
        new Map<string | number, string | number | boolean>([
            ["a", 1],
            ["b", "two"],
            ["c", true],
            [4, "nada"],
        ]),
    );
    assertEquals(
        mapValues(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            (value) => value === true,
        ),
        new Map<string | number, string | number | boolean>([
            ["a", false],
            ["b", false],
            ["c", true],
            [4, false],
        ]),
    );
    assertEquals(
        mapValues(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            (value) => `v2_${value}_test`,
        ),
        new Map<string | number, string | number | boolean>([
            ["a", "v2_1_test"],
            ["b", "v2_two_test"],
            ["c", "v2_true_test"],
            [4, "v2_nada_test"],
        ]),
    );
});
