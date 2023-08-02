import { assertEquals } from "std/assert/assert_equals.ts";
import { fromMap } from "./fromMap.ts";

Deno.test("fromMap", () => {
    assertEquals(fromMap(new Map([])), {});
});

Deno.test("fromMap", () => {
    assertEquals(
        fromMap(
            new Map([
                ["Paul", "Bass"],
                ["John", "Guitar"],
                ["George", "Guitar"],
                ["Ringo", "Drums"],
            ]),
        ),
        {
            Paul: "Bass",
            John: "Guitar",
            George: "Guitar",
            Ringo: "Drums",
        },
    );
});
