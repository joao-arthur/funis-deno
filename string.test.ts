import { assertEquals } from "std/assert/assert_equals.ts";
import {
    camelCase,
    compareAsc,
    compareDesc,
    isValid,
    kebabCase,
    pascalCase,
    random,
    removeAccentuation,
    replaceAccentuation,
    snakeCase,
} from "./string.ts";

Deno.test("camelCase", () => {
    assertEquals(camelCase(""), "");
});

Deno.test("camelCase", () => {
    assertEquals(camelCase("hey"), "hey");
});

Deno.test("camelCase", () => {
    assertEquals(camelCase("j S o N"), "jSON");
    assertEquals(camelCase("j_S_o_N"), "jSON");
    assertEquals(camelCase("j-S-o-N"), "jSON");
});

Deno.test("camelCase", () => {
    assertEquals(camelCase("hey Jo3"), "heyJo3");
    assertEquals(camelCase("hey_Jo3"), "heyJo3");
    assertEquals(camelCase("hey-Jo3"), "heyJo3");
});

Deno.test("compareAsc", () => {
    assertEquals(
        ["q", "p", "w", "o", "Q", "P", "W", "O"].sort(compareAsc),
        ["O", "P", "Q", "W", "o", "p", "q", "w"],
    );
});

Deno.test("compareDesc", () => {
    assertEquals(
        ["q", "p", "w", "o", "Q", "P", "W", "O"].sort(
            compareDesc,
        ),
        ["w", "q", "p", "o", "W", "Q", "P", "O"],
    );
});

Deno.test("isValid", () => {
    assertEquals(isValid(undefined), false);
    assertEquals(isValid(null), false);
});

Deno.test("isValid", () => {
    assertEquals(isValid(""), true);
    assertEquals(isValid(" "), true);
    assertEquals(isValid("Lorem ipsum"), true);
});

Deno.test("kebabCase", () => {
    assertEquals(kebabCase(""), "");
});

Deno.test("kebabCase", () => {
    assertEquals(kebabCase("hey"), "hey");
});

Deno.test("kebabCase", () => {
    assertEquals(kebabCase("j S o N"), "j-s-o-n");
    assertEquals(kebabCase("j_S_o_N"), "j-s-o-n");
    assertEquals(kebabCase("j-S-o-N"), "j-s-o-n");
});

Deno.test("kebabCase", () => {
    assertEquals(kebabCase("hey Jo3"), "hey-jo3");
    assertEquals(kebabCase("hey_Jo3"), "hey-jo3");
    assertEquals(kebabCase("hey-Jo3"), "hey-jo3");
});

Deno.test("pascalCase", () => {
    assertEquals(pascalCase(""), "");
});

Deno.test("pascalCase", () => {
    assertEquals(pascalCase("hey"), "Hey");
});

Deno.test("pascalCase", () => {
    assertEquals(pascalCase("j S o N"), "JSON");
    assertEquals(pascalCase("j_S_o_N"), "JSON");
    assertEquals(pascalCase("j-S-o-N"), "JSON");
});

Deno.test("pascalCase", () => {
    assertEquals(pascalCase("hey Jo3"), "HeyJo3");
    assertEquals(pascalCase("hey_Jo3"), "HeyJo3");
    assertEquals(pascalCase("hey-Jo3"), "HeyJo3");
});

Deno.test("random", () => {
    assertEquals(random(""), "");
    assertEquals(random("a"), "a");
    assertEquals(random("b"), "b");
    assertEquals(random("c"), "c");
});

Deno.test("random", () => {
    assertEquals(random("Botticelli").length, 1);
    assertEquals("Botticelli".includes(random("Botticelli")), true);
    assertEquals(random("Michelangelo").length, 1);
    assertEquals(
        "Michelangelo".includes(random("Michelangelo")),
        true,
    );
});

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

Deno.test("snakeCase", () => {
    assertEquals(snakeCase(""), "");
});

Deno.test("snakeCase", () => {
    assertEquals(snakeCase("hey"), "hey");
});

Deno.test("snakeCase", () => {
    assertEquals(snakeCase("j S o N"), "j_s_o_n");
    assertEquals(snakeCase("j_S_o_N"), "j_s_o_n");
    assertEquals(snakeCase("j-S-o-N"), "j_s_o_n");
});

Deno.test("snakeCase", () => {
    assertEquals(snakeCase("hey Jo3"), "hey_jo3");
    assertEquals(snakeCase("hey_Jo3"), "hey_jo3");
    assertEquals(snakeCase("hey-Jo3"), "hey_jo3");
});
