import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { disjoint } from "./disjoint.ts";

Deno.test("disjoint", () => {
    assertEquals(disjoint([]), []);

    assertEquals(disjoint([[1, 2, 3]]), [1, 2, 3]);

    assertEquals(disjoint([[1, 2, 3], [1, 2, 3]]), []);

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
