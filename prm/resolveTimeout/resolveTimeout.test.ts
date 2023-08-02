import { assertEquals } from "std/assert/assert_equals.ts";
import { resolveTimeout } from "./resolveTimeout.ts";

Deno.test("resolveTimeout", async () => {
    assertEquals(
        await resolveTimeout("Hello, promise!", 50),
        "Hello, promise!",
    );
});
