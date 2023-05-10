import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { groupToEntries } from "./groupToEntries.ts";

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
