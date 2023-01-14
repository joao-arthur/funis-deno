import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { resolveTimeout } from "./resolveTimeout.ts";

Deno.test("resolveTimeout", async () => {
    assertEquals(
        await resolveTimeout("Hello, promise!", 50),
        "Hello, promise!",
    );
});
