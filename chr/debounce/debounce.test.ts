import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import { resolveTimeout } from "../../prm/resolveTimeout/resolveTimeout.ts";
import { debounce } from "./debounce.ts";

Deno.test("debounce", () => {
    const emptyArr: string[] = [];
    debounce(() => emptyArr.push("Salvator mundi"), 0)();
    assertEquals(emptyArr, []);
});

Deno.test("debounce", async () => {
    const emptyArr: string[] = [];
    debounce(() => emptyArr.push("Salvator mundi"), 0)();
    await resolveTimeout(undefined, 5);
    assertEquals(emptyArr, ["Salvator mundi"]);
});

Deno.test("debounce", async () => {
    const emptyArr: string[] = [];
    const returnedFn = debounce(
        () => emptyArr.push("Salvator mundi"),
        1,
    );
    returnedFn();
    returnedFn();
    returnedFn();
    await resolveTimeout(undefined, 10);
    assertEquals(emptyArr, ["Salvator mundi"]);
});

Deno.test({
    name: "debounce",
    fn: async () => {
        const emptyArr: string[] = [];
        const returnedFn = debounce(
            () => emptyArr.push("Salvator mundi"),
            30,
        );
        returnedFn();
        await resolveTimeout(undefined, 8);
        returnedFn();
        await resolveTimeout(undefined, 8);
        returnedFn();
        await resolveTimeout(undefined, 8);
        returnedFn();
        await resolveTimeout(undefined, 8);
        assertEquals(emptyArr, []);
    },
    // I don't know where is the leaking
    sanitizeResources: false,
    sanitizeOps: false,
});

Deno.test("debounce", async () => {
    const emptyArr: string[] = [];
    const returnedFn = debounce(
        () => emptyArr.push("Salvator mundi"),
        1,
    );
    returnedFn();
    await resolveTimeout(undefined, 5);
    returnedFn();
    await resolveTimeout(undefined, 5);
    assertEquals(emptyArr, [
        "Salvator mundi",
        "Salvator mundi",
    ]);
});
