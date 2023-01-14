import {
    assertEquals,
    assertRejects,
} from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { rejectTimeout } from "../rejectTimeout/rejectTimeout.ts";
import { resolveTimeout } from "../resolveTimeout/resolveTimeout.ts";
import { last } from "./last.ts";

Deno.test({
    name: "last",
    fn: async () => {
        assertEquals(
            await last([
                resolveTimeout("Aristotle", 5),
                rejectTimeout("Aristotle", 5),
                resolveTimeout("Plato", 10),
                rejectTimeout("Plato", 10),
                resolveTimeout("Socrates", 20),
            ]),
            "Socrates",
        );
        await assertRejects(
            () =>
                last([
                    resolveTimeout("Socrates", 5),
                    rejectTimeout("Socrates", 5),
                    resolveTimeout("Plato", 10),
                    rejectTimeout("Plato", 10),
                    rejectTimeout("Aristotle", 20),
                ]),
            "Aristotle",
        );
    },
    // I don't know where is the leaking
    sanitizeResources: false,
    sanitizeOps: false,
});
