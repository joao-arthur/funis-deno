import { assertEquals } from "std/assert/assert_equals.ts";
import {
    disjoint,
    fromMap,
    intersect,
    mapEntries,
    mapKeys,
    mapValues,
    omit,
    pick,
    serialize,
    serializesToSame,
} from "./object.ts";

Deno.test("disjoint", () => {
    assertEquals(disjoint([]), {});
});

Deno.test("disjoint", () => {
    assertEquals(
        disjoint([{ name: "Steve Harris", country: "UK" }]),
        { name: "Steve Harris", country: "UK" },
    );
    assertEquals(
        disjoint(
            [
                { name: "Steve Harris", country: "UK" },
                { name: "Megadeth", foundation: 1983 },
            ],
        ),
        { country: "UK", foundation: 1983 },
    );
});

Deno.test("fromMap", () => {
    assertEquals(fromMap(new Map([])), {});
});

Deno.test("fromMap", () => {
    assertEquals(
        fromMap(
            new Map([
                ["Paul", "Bass"],
                ["John", "Guitar"],
                ["George", "Guitar"],
                ["Ringo", "Drums"],
            ]),
        ),
        {
            Paul: "Bass",
            John: "Guitar",
            George: "Guitar",
            Ringo: "Drums",
        },
    );
});
Deno.test("intersect", () => {
    assertEquals(intersect([]), {});
});

Deno.test("intersect", () => {
    assertEquals(
        intersect([{ name: "Steve Harris", country: "UK" }]),
        { name: "Steve Harris", country: "UK" },
    );
});

Deno.test("intersect", () => {
    assertEquals(
        intersect(
            [
                {
                    name: "Cliff Burton",
                    band: "Metallica",
                    country: "US",
                },
                {
                    name: "James Hetfield",
                    band: "Metallica",
                    country: "US",
                },
                {
                    name: "Kirk Hammett",
                    band: "Metallica",
                    country: "US",
                },
            ],
        ),
        { band: "Metallica", country: "US" },
    );
});

Deno.test("mapEntries", () => {
    assertEquals(
        mapEntries(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            ([key, value]) => [key, value],
        ),
        {
            a: 1,
            b: "two",
            c: true,
            4: "nada",
        },
    );
    assertEquals(
        mapEntries(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            ([key, value]) => [`key_${key}`, `value_${value}`],
        ),
        {
            key_a: "value_1",
            key_b: "value_two",
            key_c: "value_true",
            key_4: "value_nada",
        },
    );
    assertEquals(
        mapEntries(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            () => ["key", "value"],
        ),
        {
            key: "value",
        },
    );
});

Deno.test("mapKeys", () => {
    assertEquals(
        mapKeys(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            (key) => key,
        ),
        {
            a: 1,
            b: "two",
            c: true,
            4: "nada",
        },
    );
    assertEquals(
        mapKeys(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            (key) => `v2_${key}_test`,
        ),
        {
            v2_a_test: 1,
            v2_b_test: "two",
            v2_c_test: true,
            v2_4_test: "nada",
        },
    );
    assertEquals(
        mapKeys(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            () => "key",
        ),
        {
            key: true,
        },
    );
});

Deno.test("mapValues", () => {
    assertEquals(
        mapValues(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            (value) => value,
        ),
        {
            a: 1,
            b: "two",
            c: true,
            4: "nada",
        },
    );
    assertEquals(
        mapValues(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            (value) => value === true,
        ),
        {
            a: false,
            b: false,
            c: true,
            4: false,
        },
    );
    assertEquals(
        mapValues(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            (value) => `v2_${value}_test`,
        ),
        {
            a: "v2_1_test",
            b: "v2_two_test",
            c: "v2_true_test",
            4: "v2_nada_test",
        },
    );
    assertEquals(
        mapValues(
            {
                a: 1,
                b: "two",
                c: true,
                4: "nada",
            },
            () => "value",
        ),
        {
            a: "value",
            b: "value",
            c: "value",
            4: "value",
        },
    );
});

Deno.test("omit", () => {
    assertEquals(omit({}, []), {});
    assertEquals(omit({}, ["animal", "species", "age"]), {});
});

Deno.test("omit", () => {
    assertEquals(
        omit(
            { animal: "dog", species: "Canis lupus", age: 5 },
            [],
        ),
        { animal: "dog", species: "Canis lupus", age: 5 },
    );
    assertEquals(
        omit(
            { animal: "dog", species: "Canis lupus", age: 5 },
            ["animal"],
        ),
        { species: "Canis lupus", age: 5 },
    );
    assertEquals(
        omit(
            { animal: "dog", species: "Canis lupus", age: 5 },
            ["animal", "species", "age"],
        ),
        {},
    );
});

Deno.test("pick", () => {
    assertEquals(pick({}, []), {});
    assertEquals(pick({}, ["animal", "species", "age"]), {});
});

Deno.test("pick", () => {
    assertEquals(
        pick(
            { animal: "dog", species: "Canis lupus", age: 5 },
            [],
        ),
        {},
    );
    assertEquals(
        pick(
            { animal: "dog", species: "Canis lupus", age: 5 },
            ["animal"],
        ),
        { animal: "dog" },
    );
    assertEquals(
        pick(
            { animal: "dog", species: "Canis lupus", age: 5 },
            ["animal", "species", "age"],
        ),
        { animal: "dog", species: "Canis lupus", age: 5 },
    );
});

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
        serialize(new Dog("Rex") as unknown as PlainObject),
        "{ name: Rex }",
    );
});

Deno.test("serializesToSame", () => {
    assertEquals(serializesToSame([]), true);
    assertEquals(serializesToSame([{ r: 10, a: 57 }]), true);
});

Deno.test("serializesToSame", () => {
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
});

Deno.test("serializesToSame", () => {
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
            ) as unknown as PlainObject,
            { x: 5.25, y: 7.77 },
        ]),
        true,
    );
});
