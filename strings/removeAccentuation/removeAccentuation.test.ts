import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { removeAccentuation } from "./removeAccentuation.ts";

Deno.test("removeAccentuation", () => {
    assertEquals(removeAccentuation("áéíóú"), "");
    assertEquals(removeAccentuation("àèìòù"), "");
    assertEquals(removeAccentuation("ãẽĩõũ"), "");
    assertEquals(removeAccentuation("äëïöü"), "");
    assertEquals(removeAccentuation("âêîôû"), "");
    assertEquals(removeAccentuation("ȁȅȉȍȕ"), "");
    assertEquals(removeAccentuation("āēīōū"), "");
    assertEquals(removeAccentuation("ăĕ"), "");
    assertEquals(removeAccentuation("ęį"), "");
    assertEquals(removeAccentuation("őű"), "");
    assertEquals(removeAccentuation("åů"), "");
    assertEquals(removeAccentuation("ė"), "");
    assertEquals(removeAccentuation("ě"), "");
    assertEquals(removeAccentuation("ø"), "");
    assertEquals(removeAccentuation("ǘ"), "");
    assertEquals(removeAccentuation("ǜ"), "");
});

Deno.test("removeAccentuation", () => {
    assertEquals(removeAccentuation("ÁÉÍÓÚ"), "");
    assertEquals(removeAccentuation("ÀÈÌÒÙ"), "");
    assertEquals(removeAccentuation("ÃẼĨÕŨ"), "");
    assertEquals(removeAccentuation("ÄËÏÖÜ"), "");
    assertEquals(removeAccentuation("ÂÊÎÔÛ"), "");
    assertEquals(removeAccentuation("ȀȄȈȌȔ"), "");
    assertEquals(removeAccentuation("ĀĒĪŌŪ"), "");
    assertEquals(removeAccentuation("ĂĔ"), "");
    assertEquals(removeAccentuation("ĘĮ"), "");
    assertEquals(removeAccentuation("ŐŰ"), "");
    assertEquals(removeAccentuation("ÅŮ"), "");
    assertEquals(removeAccentuation("Ė"), "");
    assertEquals(removeAccentuation("Ě"), "");
    assertEquals(removeAccentuation("Ø"), "");
    assertEquals(removeAccentuation("Ǘ"), "");
    assertEquals(removeAccentuation("Ǜ"), "");
});

Deno.test("removeAccentuation", () => {
    assertEquals(removeAccentuation("ćǵḱĺḿńṕŕśẃýź"), "");
    assertEquals(removeAccentuation("ĉĝĥĵŝŵŷẑ"), "");
    assertEquals(removeAccentuation("čňřšž"), "");
    assertEquals(removeAccentuation("ḧẗẅẍÿ"), "");
    assertEquals(removeAccentuation("ķļņț"), "");
    assertEquals(removeAccentuation("çḉşţ"), "");
    assertEquals(removeAccentuation("đħłŧ"), "");
    assertEquals(removeAccentuation("ǹẁỳ"), "");
    assertEquals(removeAccentuation("ñṽỹ"), "");
    assertEquals(removeAccentuation("ďľť"), "");
    assertEquals(removeAccentuation("ȑ"), "");
    assertEquals(removeAccentuation("ģ"), "");
    assertEquals(removeAccentuation("ğ"), "");
    assertEquals(removeAccentuation("ż"), "");
});

Deno.test("removeAccentuation", () => {
    assertEquals(removeAccentuation("ĆǴḰĹḾŃṔŔŚẂÝŹ"), "");
    assertEquals(removeAccentuation("ĈĜĤĴŜŴŶẐ"), "");
    assertEquals(removeAccentuation("ČĎŇŘŠŤŽ"), "");
    assertEquals(removeAccentuation("ḦẄẌŸ"), "");
    assertEquals(removeAccentuation("ÇḈŞŢ"), "");
    assertEquals(removeAccentuation("ĐĦŁŦ"), "");
    assertEquals(removeAccentuation("ǸẀỲ"), "");
    assertEquals(removeAccentuation("ÑṼỸ"), "");
    assertEquals(removeAccentuation("ĻŅȚ"), "");
    assertEquals(removeAccentuation("ĢĶ"), "");
    assertEquals(removeAccentuation("Ȑ"), "");
    assertEquals(removeAccentuation("Ğ"), "");
    assertEquals(removeAccentuation("Ľ"), "");
    assertEquals(removeAccentuation("Ż"), "");
});

Deno.test("removeAccentuation", () => {
    assertEquals(
        removeAccentuation(
            "abcdefghijklmnopqrstuvwyxz0123456789",
        ),
        "abcdefghijklmnopqrstuvwyxz0123456789",
    );
    assertEquals(
        removeAccentuation(
            "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789",
        ),
        "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789",
    );
    assertEquals(
        removeAccentuation(
            "¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ",
        ),
        "¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ",
    );
});
