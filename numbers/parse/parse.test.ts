import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { parse } from "./parse.ts";

Deno.test("parse", () => {
    assertEquals(parse("$100.00", { prefix: "$" }), 100.00);
    assertEquals(parse("US$0", { prefix: "US$" }), 0);
    assertEquals(parse("R$-1.53", { prefix: "R$" }), -1.53);
    assertEquals(parse("^1.4", { prefix: "^" }), 1.4);

    assertEquals(parse("100px", { suffix: "px" }), 100);
    assertEquals(parse("0px", { suffix: "px" }), 0);
    assertEquals(parse("-1.53m/s", { suffix: "m/s" }), -1.53);
    assertEquals(parse("1.4kº", { suffix: "kº" }), 1.4);
    assertEquals(parse("74%", { suffix: "%" }), 74);

    assertEquals(
        parse(
            "width: 100px",
            { prefix: "width: ", suffix: "px" },
        ),
        100,
    );
    assertEquals(
        parse(
            "speed: -1.53m/s",
            { prefix: "speed: ", suffix: "m/s" },
        ),
        -1.53,
    );

    assertEquals(parse("US$4", { prefix: "R$" }), undefined);
    assertEquals(parse("R$-6", { prefix: "rem" }), undefined);
    assertEquals(parse("@-1", { prefix: "km/h" }), undefined);

    assertEquals(parse("4px", { suffix: "rem" }), undefined);
    assertEquals(parse("-6em", { suffix: "rem" }), undefined);
    assertEquals(parse("-1m/s", { suffix: "km/h" }), undefined);

    assertEquals(
        parse(
            "US$4 donnut",
            { prefix: "R$", suffix: "apple" },
        ),
        undefined,
    );
    assertEquals(
        parse(
            "US$4 donnut",
            { prefix: "US$", suffix: "apple" },
        ),
        undefined,
    );

    assertEquals(
        parse(
            "speed: -4px",
            { prefix: "speed: " },
        ),
        undefined,
    );
    assertEquals(parse(":2em", { prefix: ":" }), undefined);

    assertEquals(
        parse(
            "speed: -4px",
            { suffix: "px" },
        ),
        undefined,
    );
    assertEquals(parse(":2em", { suffix: "em" }), undefined);

    assertEquals(
        parse("I see", { prefix: "I see" }),
        undefined,
    );
    assertEquals(
        parse("penguins", { suffix: "penguins" }),
        undefined,
    );
    assertEquals(
        parse("I see penguins", {
            prefix: "I see ",
            suffix: "penguins",
        }),
        undefined,
    );
});
