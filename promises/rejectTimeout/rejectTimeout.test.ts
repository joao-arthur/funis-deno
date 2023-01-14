import {
    assertEquals,
} from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { rejectTimeout } from "./rejectTimeout.ts";

Deno.test("rejectTimeout", async () => {
    try {
        await rejectTimeout("Hello, promise!", 50);
    } catch (e) {
        assertEquals(e, "Hello, promise!");
    }
});
