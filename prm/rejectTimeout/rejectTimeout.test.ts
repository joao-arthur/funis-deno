import { assertEquals } from "std/assert/assert_equals.ts";
import { rejectTimeout } from "./rejectTimeout.ts";

Deno.test("rejectTimeout", async () => {
    try {
        await rejectTimeout("Hello, promise!", 50);
    } catch (e) {
        assertEquals(e, "Hello, promise!");
    }
});
