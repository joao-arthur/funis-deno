import { assertEquals } from "std/assert/assert_equals.ts";
import { mapKeys } from "./mapKeys.ts";

Deno.test("mapKeys", () => {
    assertEquals(
        mapKeys(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            (key) => key,
        ),
        new Map<string | number, string | number | boolean>([
            ["a", 1],
            ["b", "two"],
            ["c", true],
            [4, "nada"],
        ]),
    );
    assertEquals(
        mapKeys(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            (key) => `v2_${key}_test`,
        ),
        new Map<string | number, string | number | boolean>([
            ["v2_a_test", 1],
            ["v2_b_test", "two"],
            ["v2_c_test", true],
            ["v2_4_test", "nada"],
        ]),
    );
    assertEquals(
        mapKeys(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            () => "key",
        ),
        new Map([["key", "nada"]]),
    );
});
