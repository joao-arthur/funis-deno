import { assertEquals } from "std/assert/assert_equals.ts";
import {
    combinate,
    disjoint,
    groupToArray,
    groupToEntries,
    groupToMap,
    groupToObject,
    intersect,
    once,
    random,
    repeat,
    unique,
} from "./array.ts";

Deno.test("combinate", () => {
    assertEquals(combinate([]), []);
    assertEquals(combinate([10]), []);
});

Deno.test("combinate", () => {
    assertEquals(combinate([10, 20]), [[10, 20]]);
    assertEquals(combinate([10, 20, 30, 40, 50]), [
        [10, 20],
        [10, 30],
        [10, 40],
        [10, 50],
        [20, 30],
        [20, 40],
        [20, 50],
        [30, 40],
        [30, 50],
        [40, 50],
    ]);
});

Deno.test("disjoint", () => {
    assertEquals(disjoint([]), []);
    assertEquals(disjoint([[1, 2, 3], [1, 2, 3]]), []);
});

Deno.test("disjoint", () => {
    assertEquals(disjoint([[1, 2, 3]]), [1, 2, 3]);
    assertEquals(disjoint([[4, 5, 6], [5, 6, 7]]), [4, 7]);
    assertEquals(
        disjoint([
            ["George", "Paul", "John", "Ringo", "George"],
            ["Ringo"],
            ["John"],
        ]),
        ["George", "Paul"],
    );
    assertEquals(disjoint([[false, true], []]), [false, true]);
});

Deno.test("groupToArray", () => {
    assertEquals(groupToArray([], (item) => item), []);
});

Deno.test("groupToArray", () => {
    assertEquals(
        groupToArray([1, 2, 3], (item) => item),
        [[1], [2], [3]],
    );
    assertEquals(
        groupToArray([1, 2, 3], (item) => item % 2),
        [[1, 3], [2]],
    );
    assertEquals(
        groupToArray([1, 1, 2, 2, 3, 3], (item) => item),
        [[1, 1], [2, 2], [3, 3]],
    );
    assertEquals(
        groupToArray(
            ["George", "Paul", "John", "Ringo"],
            (item) => item === "Ringo",
        ),
        [["George", "Paul", "John"], ["Ringo"]],
    );
    assertEquals(
        groupToArray(
            [false, true, false, true, false, true],
            Boolean,
        ),
        [[false, false, false], [true, true, true]],
    );
    assertEquals(
        groupToArray(
            [
                { type: "grass", name: "bulbasaur" },
                { type: "fire", name: "charmander" },
                { type: "water", name: "squirtle" },
                { type: "bug", name: "caterpie" },
                { type: "water", name: "psyduck" },
            ],
            (item) => item.type,
        ),
        [
            [{ type: "grass", name: "bulbasaur" }],
            [{ type: "fire", name: "charmander" }],
            [
                { type: "water", name: "squirtle" },
                { type: "water", name: "psyduck" },
            ],
            [{ type: "bug", name: "caterpie" }],
        ],
    );
});

Deno.test("groupToEntries", () => {
    assertEquals(groupToEntries([], (item) => item), []);
});

Deno.test("groupToEntries", () => {
    assertEquals(
        groupToEntries([1, 2, 3], (item) => item),
        [[1, [1]], [2, [2]], [3, [3]]],
    );
    assertEquals(
        groupToEntries([1, 2, 3], (item) => item % 2),
        [[1, [1, 3]], [0, [2]]],
    );
    assertEquals(
        groupToEntries([1, 1, 2, 2, 3, 3], (item) => item),
        [[1, [1, 1]], [2, [2, 2]], [3, [3, 3]]],
    );
    assertEquals(
        groupToEntries(
            ["George", "Paul", "John", "Ringo"],
            (item) => item === "Ringo",
        ),
        [[false, ["George", "Paul", "John"]], [true, ["Ringo"]]],
    );
    assertEquals(
        groupToEntries(
            [false, true, false, true, false, true],
            Boolean,
        ),
        [
            [false, [false, false, false]],
            [true, [true, true, true]],
        ],
    );
    assertEquals(
        groupToEntries(
            [
                { type: "grass", name: "bulbasaur" },
                { type: "fire", name: "charmander" },
                { type: "water", name: "squirtle" },
                { type: "bug", name: "caterpie" },
                { type: "water", name: "psyduck" },
            ],
            (item) => item.type,
        ),
        [
            ["grass", [{ type: "grass", name: "bulbasaur" }]],
            ["fire", [{ type: "fire", name: "charmander" }]],
            ["water", [
                { type: "water", name: "squirtle" },
                { type: "water", name: "psyduck" },
            ]],
            ["bug", [{ type: "bug", name: "caterpie" }]],
        ],
    );
});

Deno.test("groupToMap", () => {
    assertEquals(groupToMap([], (item) => item), new Map());
});

Deno.test("groupToMap", () => {
    assertEquals(
        groupToMap([1, 2, 3], (item) => item),
        new Map([[1, [1]], [2, [2]], [3, [3]]]),
    );
    assertEquals(
        groupToMap([1, 2, 3], (item) => item % 2),
        new Map([[1, [1, 3]], [0, [2]]]),
    );
    assertEquals(
        groupToMap([1, 1, 2, 2, 3, 3], (item) => item),
        new Map([[1, [1, 1]], [2, [2, 2]], [3, [3, 3]]]),
    );
    assertEquals(
        groupToMap(
            ["George", "Paul", "John", "Ringo"],
            (item) => item === "Ringo",
        ),
        new Map([
            [false, ["George", "Paul", "John"]],
            [true, ["Ringo"]],
        ]),
    );
    assertEquals(
        groupToMap(
            [false, true, false, true, false, true],
            Boolean,
        ),
        new Map([
            [false, [false, false, false]],
            [true, [true, true, true]],
        ]),
    );
    assertEquals(
        groupToMap(
            [
                { type: "grass", name: "bulbasaur" },
                { type: "fire", name: "charmander" },
                { type: "water", name: "squirtle" },
                { type: "bug", name: "caterpie" },
                { type: "water", name: "psyduck" },
            ],
            (item) => item.type,
        ),
        new Map([
            ["grass", [{ type: "grass", name: "bulbasaur" }]],
            ["fire", [{ type: "fire", name: "charmander" }]],
            ["water", [
                { type: "water", name: "squirtle" },
                { type: "water", name: "psyduck" },
            ]],
            ["bug", [{ type: "bug", name: "caterpie" }]],
        ]),
    );
});

Deno.test("groupToObject", () => {
    assertEquals(groupToObject([], (item) => item), {});
});

Deno.test("groupToObject", () => {
    assertEquals(
        groupToObject([1, 2, 3], (item) => item),
        { 1: [1], 2: [2], 3: [3] },
    );
    assertEquals(
        groupToObject([1, 2, 3], (item) => item % 2),
        { 1: [1, 3], 0: [2] },
    );
    assertEquals(
        groupToObject([1, 1, 2, 2, 3, 3], (item) => item),
        { 1: [1, 1], 2: [2, 2], 3: [3, 3] },
    );
    assertEquals(
        groupToObject(
            ["George", "Paul", "John", "Ringo"],
            (item) => item === "Ringo",
        ),
        {
            false: ["George", "Paul", "John"],
            true: ["Ringo"],
        },
    );
    assertEquals(
        groupToObject(
            [false, true, false, true, false, true],
            Boolean,
        ),
        {
            false: [false, false, false],
            true: [true, true, true],
        },
    );
    assertEquals(
        groupToObject(
            [
                { type: "grass", name: "bulbasaur" },
                { type: "fire", name: "charmander" },
                { type: "water", name: "squirtle" },
                { type: "bug", name: "caterpie" },
                { type: "water", name: "psyduck" },
            ],
            (item) => item.type,
        ),
        {
            grass: [{ type: "grass", name: "bulbasaur" }],
            fire: [{ type: "fire", name: "charmander" }],
            water: [
                { type: "water", name: "squirtle" },
                { type: "water", name: "psyduck" },
            ],
            bug: [{ type: "bug", name: "caterpie" }],
        },
    );
});

Deno.test("intersect", () => {
    assertEquals(intersect([[1, 2, 3], [4, 5, 6]]), []);
    assertEquals(intersect([[false, true], []]), []);
});

Deno.test("intersect", () => {
    assertEquals(intersect([[""]]), [""]);
    assertEquals(intersect([[1]]), [1]);
});

Deno.test("intersect", () => {
    assertEquals(intersect([[4, 5, 6], [5, 6, 7]]), [5, 6]);
    assertEquals(
        intersect([
            ["George", "Paul", "John", "Ringo", "Ringo"],
            ["Ringo"],
            ["Ringo", "John"],
        ]),
        ["Ringo"],
    );
});

Deno.test("once", () => {
    assertEquals(
        once(
            ["Axl", "Slash", "Duff", "Buckethead"],
            (item) => item.indexOf("Roses") >= 0,
        ),
        false,
    );
    assertEquals(once([5, 3, 1], (item) => item < 0), false);
});

Deno.test("once", () => {
    assertEquals(
        once(
            ["Axl", "Slash", "Duff", "Buckethead"],
            (item) => item === "Buckethead",
        ),
        true,
    );
    assertEquals(once([5, 3, 1], (item) => item > 4), true);
});

Deno.test("once", () => {
    assertEquals(
        once(
            ["Axl", "Slash", "Duff", "Buckethead"],
            (item) =>
                [
                    "Axl",
                    "Slash",
                    "Duff",
                    "Buckethead",
                ].includes(item),
        ),
        false,
    );
    assertEquals(once([5, 3, 1], (item) => item > 0), false);
});

Deno.test("random", () => {
    assertEquals(random([]), undefined);
});

Deno.test("random", () => {
    assertEquals(random([true]), true);
    assertEquals(random([5]), 5);
    assertEquals(random(["Memento mori"]), "Memento mori");
});

Deno.test("random", () => {
    const result = random([true, false, 0, 1, "y", "n"]);
    assertEquals(
        [true, false, 0, 1, "y", "n"].includes(result!),
        true,
    );
});

const items = [0, 1, 2];

Deno.test("repeat", () => {
    assertEquals(repeat(items, -1), []);
    assertEquals(repeat(items, 0), []);
    assertEquals(repeat(items, 1), [0, 1, 2]);
    assertEquals(repeat(items, 2), [0, 1, 2, 0, 1, 2]);
});

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
