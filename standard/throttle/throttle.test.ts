import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { resolveTimeout } from "../../promises/resolveTimeout/resolveTimeout.ts";
import { throttle } from "./throttle.ts";

Deno.test("throttle", () => {
    const emptyArr: string[] = [];
    throttle(() => emptyArr.push("Salvator mundi"), 0)();
    assertEquals(emptyArr, []);
});

Deno.test("throttle", async () => {
    const emptyArr: string[] = [];
    throttle(() => emptyArr.push("Salvator mundi"), 0)();
    await resolveTimeout(undefined, 5);
    assertEquals(emptyArr, ["Salvator mundi"]);
});

Deno.test("throttle", async () => {
    const emptyArr: string[] = [];
    const returnedFn = throttle(
        () => emptyArr.push("Salvator mundi"),
        2,
    );
    returnedFn();
    returnedFn();
    returnedFn();
    await resolveTimeout(undefined, 10);
    assertEquals(emptyArr, ["Salvator mundi"]);
});

Deno.test("throttle", async () => {
    const emptyArr: string[] = [];
    const returnedFn = throttle(
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
