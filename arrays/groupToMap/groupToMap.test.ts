import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { groupToMap } from "./groupToMap.ts";

Deno.test("groupToMap", () => {
    assertEquals(groupToMap([], (item) => item), new Map());

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
