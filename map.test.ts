import { assertEquals } from "std/assert/assert_equals.ts";
import {
    entries,
    fromObject,
    fromObjectArray,
    keys,
    mapEntries,
    mapKeys,
    mapValues,
    values,
} from "./map.ts";

Deno.test("entries", () => {
    assertEquals(entries(new Map()), []);
});

Deno.test("entries", () => {
    assertEquals(
        entries(
            new Map([
                [1, { name: "Paul McCartney" }],
                [2, { name: "George Harrison" }],
            ]),
        ),
        [
            [1, { name: "Paul McCartney" }],
            [2, { name: "George Harrison" }],
        ],
    );
});

Deno.test("fromObject", () => {
    assertEquals(fromObject({}), new Map([]));
});

Deno.test("fromObject", () => {
    assertEquals(
        fromObject({
            Paul: "Bass",
            John: "Guitar",
            George: "Guitar",
            Ringo: "Drums",
        }),
        new Map(
            [
                ["Paul", "Bass"],
                ["John", "Guitar"],
                ["George", "Guitar"],
                ["Ringo", "Drums"],
            ] as const,
        ),
    );
});

Deno.test("fromObjectArray", () => {
    assertEquals(
        fromObjectArray([], "id"),
        new Map(),
    );
});

Deno.test("fromObjectArray", () => {
    assertEquals(
        fromObjectArray(
            [
                { name: "Alex Lifeson", instrument: "Guitar" },
                { name: "Geddy Lee", instrument: "Bass" },
                { name: "Neil Peart", instrument: "Drums" },
            ],
            "instrument",
        ),
        new Map([
            ["Guitar", { name: "Alex Lifeson", instrument: "Guitar" }],
            ["Bass", { name: "Geddy Lee", instrument: "Bass" }],
            ["Drums", { name: "Neil Peart", instrument: "Drums" }],
        ]),
    );
});
Deno.test("keys", () => {
    assertEquals(keys(new Map()), []);
});

Deno.test("keys", () => {
    assertEquals(
        keys(
            new Map([
                [1, { name: "Paul McCartney" }],
                [2, { name: "George Harrison" }],
            ]),
        ),
        [1, 2],
    );
});

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

Deno.test("values", () => {
    assertEquals(values(new Map()), []);
});

Deno.test("values", () => {
    assertEquals(
        values(
            new Map([
                [1, { name: "Paul McCartney" }],
                [2, { name: "George Harrison" }],
            ]),
        ),
        [
            { name: "Paul McCartney" },
            { name: "George Harrison" },
        ],
    );
});
