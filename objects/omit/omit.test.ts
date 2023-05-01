import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { omit } from "./omit.ts";

Deno.test("omit", () => {
    assertEquals(omit({}, []), {});
    assertEquals(omit({}, ["animal", "species", "age"]), {});
});

Deno.test("omit", () => {
    assertEquals(
        omit(
            { animal: "dog", species: "Canis lupus", age: 5 },
            [],
        ),
        { animal: "dog", species: "Canis lupus", age: 5 },
    );
    assertEquals(
        omit(
            { animal: "dog", species: "Canis lupus", age: 5 },
            ["animal"],
        ),
        { species: "Canis lupus", age: 5 },
    );
    assertEquals(
        omit(
            { animal: "dog", species: "Canis lupus", age: 5 },
            ["animal", "species", "age"],
        ),
        {},
    );
});
