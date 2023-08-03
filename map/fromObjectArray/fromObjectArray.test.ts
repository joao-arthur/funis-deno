import { assertEquals } from "std/assert/assert_equals.ts";
import { fromObjectArray } from "./fromObjectArray.ts";

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
