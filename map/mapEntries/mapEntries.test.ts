import { assertEquals } from "std/assert/assert_equals.ts";
import { mapEntries } from "./mapEntries.ts";

Deno.test("mapEntries", () => {
    assertEquals(
        mapEntries(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            ([key, value]) => [key, value],
        ),
        new Map<string | number, string | number | boolean>([
            ["a", 1],
            ["b", "two"],
            ["c", true],
            [4, "nada"],
        ]),
    );
    assertEquals(
        mapEntries(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            ([key, value]) => [`key_${key}`, `value_${value}`],
        ),
        new Map([
            ["key_a", "value_1"],
            ["key_b", "value_two"],
            ["key_c", "value_true"],
            ["key_4", "value_nada"],
        ]),
    );
    assertEquals(
        mapEntries(
            new Map<string | number, string | number | boolean>([
                ["a", 1],
                ["b", "two"],
                ["c", true],
                [4, "nada"],
            ]),
            () => ["key", "value"],
        ),
        new Map([["key", "value"]]),
    );
});
