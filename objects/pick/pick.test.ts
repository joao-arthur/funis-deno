import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { pick } from "./pick.ts";

Deno.test("pick", () => {
    assertEquals(pick({}, []), {});
    assertEquals(pick({}, ["animal", "species", "age"]), {});
});

Deno.test("pick", () => {
    assertEquals(
        pick(
            { animal: "dog", species: "Canis lupus", age: 5 },
            [],
        ),
        {},
    );
    assertEquals(
        pick(
            { animal: "dog", species: "Canis lupus", age: 5 },
            ["animal"],
        ),
        { animal: "dog" },
    );
    assertEquals(
        pick(
            { animal: "dog", species: "Canis lupus", age: 5 },
            ["animal", "species", "age"],
        ),
        { animal: "dog", species: "Canis lupus", age: 5 },
    );
});
