import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { groupToArray } from "./groupToArray.ts";

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
