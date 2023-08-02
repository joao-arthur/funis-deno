import { assertEquals } from "std/assert/assert_equals.ts";
import { resolveTimeout } from "../../prm/resolveTimeout/resolveTimeout.ts";
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
