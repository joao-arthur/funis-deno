import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { plainObject } from "../../types/plainObject.ts";
import { serializesToSame } from "./serializesToSame.ts";

Deno.test("serializesToSame", () => {
    assertEquals(serializesToSame([]), true);
    assertEquals(serializesToSame([{ r: 10, a: 57 }]), true);

    assertEquals(
        serializesToSame([
            { x: 10.12, y: -1.53 },
            { x: 10.12, y: -1.53 },
        ]),
        true,
    );
    assertEquals(
        serializesToSame([
            { x: 10.9, y: -1.5 },
            { x: 10.12, y: -1.53 },
        ]),
        false,
    );
    assertEquals(serializesToSame([{}, {}, {}]), true);

    class CartesianPoint {
        constructor(
            private readonly x: number,
            private readonly y: number,
        ) {}

        public serialize(): string {
            return `(${this.x}, ${this.y})`;
        }
    }

    assertEquals(
        serializesToSame([
            new CartesianPoint(
                5.25,
                7.77,
            ) as unknown as plainObject,
            { x: 5.25, y: 7.77 },
        ]),
        true,
    );
});
