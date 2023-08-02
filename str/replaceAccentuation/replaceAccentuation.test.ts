import { assertEquals } from "std/assert/assert_equals.ts";
import { replaceAccentuation } from "./replaceAccentuation.ts";

Deno.test("replaceAccentuation", () => {
    assertEquals(replaceAccentuation("áéíóú"), "aeiou");
    assertEquals(replaceAccentuation("àèìòù"), "aeiou");
    assertEquals(replaceAccentuation("ãẽĩõũ"), "aeiou");
    assertEquals(replaceAccentuation("äëïöü"), "aeiou");
    assertEquals(replaceAccentuation("âêîôû"), "aeiou");
    assertEquals(replaceAccentuation("ȁȅȉȍȕ"), "aeiou");
    assertEquals(replaceAccentuation("āēīōū"), "aeiou");
    assertEquals(replaceAccentuation("ăĕ"), "ae");
    assertEquals(replaceAccentuation("ęį"), "ei");
    assertEquals(replaceAccentuation("őű"), "ou");
    assertEquals(replaceAccentuation("åů"), "au");
    assertEquals(replaceAccentuation("ė"), "e");
    assertEquals(replaceAccentuation("ě"), "e");
    assertEquals(replaceAccentuation("ø"), "o");
    assertEquals(replaceAccentuation("ǘ"), "u");
    assertEquals(replaceAccentuation("ǜ"), "u");
});

Deno.test("replaceAccentuation", () => {
    assertEquals(replaceAccentuation("ÁÉÍÓÚ"), "AEIOU");
    assertEquals(replaceAccentuation("ÀÈÌÒÙ"), "AEIOU");
    assertEquals(replaceAccentuation("ÃẼĨÕŨ"), "AEIOU");
    assertEquals(replaceAccentuation("ÄËÏÖÜ"), "AEIOU");
    assertEquals(replaceAccentuation("ÂÊÎÔÛ"), "AEIOU");
    assertEquals(replaceAccentuation("ȀȄȈȌȔ"), "AEIOU");
    assertEquals(replaceAccentuation("ĀĒĪŌŪ"), "AEIOU");
    assertEquals(replaceAccentuation("ĂĔ"), "AE");
    assertEquals(replaceAccentuation("ĘĮ"), "EI");
    assertEquals(replaceAccentuation("ŐŰ"), "OU");
    assertEquals(replaceAccentuation("ÅŮ"), "AU");
    assertEquals(replaceAccentuation("Ė"), "E");
    assertEquals(replaceAccentuation("Ě"), "E");
    assertEquals(replaceAccentuation("Ø"), "O");
    assertEquals(replaceAccentuation("Ǘ"), "U");
    assertEquals(replaceAccentuation("Ǜ"), "U");
});

Deno.test("replaceAccentuation", () => {
    assertEquals(
        replaceAccentuation("ćǵḱĺḿńṕŕśẃýź"),
        "cgklmnprswyz",
    );
    assertEquals(replaceAccentuation("ĉĝĥĵŝŵŷẑ"), "cghjswyz");
    assertEquals(replaceAccentuation("čňřšž"), "cnrsz");
    assertEquals(replaceAccentuation("ḧẗẅẍÿ"), "htwxy");
    assertEquals(replaceAccentuation("ķļņț"), "klnt");
    assertEquals(replaceAccentuation("çḉşţ"), "ccst");
    assertEquals(replaceAccentuation("đħłŧ"), "dhlt");
    assertEquals(replaceAccentuation("ǹẁỳ"), "nwy");
    assertEquals(replaceAccentuation("ñṽỹ"), "nvy");
    assertEquals(replaceAccentuation("ďľť"), "dlt");
    assertEquals(replaceAccentuation("ȑ"), "r");
    assertEquals(replaceAccentuation("ģ"), "g");
    assertEquals(replaceAccentuation("ğ"), "g");
    assertEquals(replaceAccentuation("ż"), "z");
});

Deno.test("replaceAccentuation", () => {
    assertEquals(
        replaceAccentuation("ĆǴḰĹḾŃṔŔŚẂÝŹ"),
        "CGKLMNPRSWYZ",
    );
    assertEquals(replaceAccentuation("ĈĜĤĴŜŴŶẐ"), "CGHJSWYZ");
    assertEquals(replaceAccentuation("ČĎŇŘŠŤŽ"), "CDNRSTZ");
    assertEquals(replaceAccentuation("ḦẄẌŸ"), "HWXY");
    assertEquals(replaceAccentuation("ÇḈŞŢ"), "CCST");
    assertEquals(replaceAccentuation("ĐĦŁŦ"), "DHLT");
    assertEquals(replaceAccentuation("ǸẀỲ"), "NWY");
    assertEquals(replaceAccentuation("ÑṼỸ"), "NVY");
    assertEquals(replaceAccentuation("ĻŅȚ"), "LNT");
    assertEquals(replaceAccentuation("ĢĶ"), "GK");
    assertEquals(replaceAccentuation("Ȑ"), "R");
    assertEquals(replaceAccentuation("Ğ"), "G");
    assertEquals(replaceAccentuation("Ľ"), "L");
    assertEquals(replaceAccentuation("Ż"), "Z");
});

Deno.test("replaceAccentuation", () => {
    assertEquals(
        replaceAccentuation(
            "abcdefghijklmnopqrstuvwyxz0123456789",
        ),
        "abcdefghijklmnopqrstuvwyxz0123456789",
    );
    assertEquals(
        replaceAccentuation(
            "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789",
        ),
        "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789",
    );
    assertEquals(
        replaceAccentuation(
            "¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ",
        ),
        "¹²³£¢¬{[]}!@#$%¨&*()_+§/?°®←↓→þ´ªæßªĸ´~º«»©“”nµ",
    );
});
