import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { objectify } from "./objectify.ts";

Deno.test("objectify", async () => {
    assertEquals(
        await objectify(Promise.resolve(undefined)),
        { value: undefined, error: undefined, type: "resolved" },
    );
    assertEquals(
        await objectify(Promise.reject(undefined)),
        { value: undefined, error: undefined, type: "rejected" },
    );
});

Deno.test("objectify", async () => {
    assertEquals(
        await objectify(Promise.resolve("Symbolic acts")),
        {
            value: "Symbolic acts",
            error: undefined,
            type: "resolved",
        },
    );
    assertEquals(
        await objectify(Promise.resolve(undefined)),
        { value: undefined, error: undefined, type: "resolved" },
    );
});
