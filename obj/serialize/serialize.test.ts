import { assertEquals } from "std/assert/assert_equals.ts";
import { plainObject } from "../../types/plainObject.ts";
import { serialize } from "./serialize.ts";

Deno.test("serialize", () => {
    assertEquals(
        serialize({
            name: "Paul",
            numberOfBands: 4,
            bigNumberOfBands: 4n,
            alive: true,
            birthday: new Date("1942-06-18T03:00:00.000Z"),
            unique: Symbol("Paul"),
        }),
        "{ name: Paul, numberOfBands: 4, bigNumberOfBands: 4, alive: true, birthday: 1942-06-18T03:00:00.000Z, unique: Symbol(Paul) }",
    );
});

Deno.test("serialize", () => {
    assertEquals(
        serialize({
            sayHi: (): string => "hi, my name is Eminem",
            sayGoodbye: (): string => "bye, bye, baby",
        }),
        "{ }",
    );
});

Deno.test("serialize", () => {
    assertEquals(
        serialize({
            empty: [],
            oneValue: [1],
            multiValue: [true, false, "zaphod", 42n],
        }),
        "{ empty: , oneValue: 1, multiValue: true, false, zaphod, 42 }",
    );
});

Deno.test("serialize", () => {
    class Dog {
        constructor(private readonly name: string) {}

        bark(): string {
            return `wolf! wolf! I'm ${this.name}!`;
        }
    }

    assertEquals(
        serialize(new Dog("Rex") as unknown as plainObject),
        "{ name: Rex }",
    );
});
