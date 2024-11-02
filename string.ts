/**
 * # camelCase
 *
 * Transforms a sequence of words into camel case.
 *
 * ## Example
 *
 * ```ts
 * str.camelCase('hey') // 'hey'
 * str.camelCase('j S o N') // 'jSON'
 * str.camelCase('j_S_o_N') // 'jSON'
 * str.camelCase('j-S-o-N') // 'jSON'
 * ```
 */
export function camelCase(str: string): string {
    if (str === "") {
        return "";
    }
    return str
        .split(/ |_|-/g)
        .map((word, index) =>
            index > 0
                ? word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
                : word.toLocaleLowerCase()
        )
        .join("");
}
/**
 * # compareAsc
 *
 * Compare the numbers in ascending order.
 *
 * ## Example
 *
 * ```ts
 * ['q', 'p', 'Q', 'P'].sort(str.compareAsc) // ['P', 'Q', 'p', 'q']
 * ```
 */
export function compareAsc(a: string, b: string): number {
    return a > b ? 1 : -1;
}
/**
 * # compareDesc
 *
 * Compare the numbers in descending order.
 *
 * ## Example
 *
 * ```ts
 * ['q', 'p', 'Q', 'P'].sort(str.compareDesc) // ['Q', 'P', 'q', 'p']
 * ```
 */
export function compareDesc(a: string, b: string): number {
    return a > b ? -1 : 1;
}
export const accents = new Map([
    ["á", "a"],
    ["Á", "A"],
    ["à", "a"],
    ["À", "A"],
    ["ã", "a"],
    ["Ã", "A"],
    ["ä", "a"],
    ["Ä", "A"],
    ["â", "a"],
    ["Â", "A"],
    ["ȁ", "a"],
    ["Ȁ", "A"],
    ["å", "a"],
    ["Å", "A"],
    ["ā", "a"],
    ["Ā", "A"],
    ["ă", "a"],
    ["Ă", "A"],
    ["é", "e"],
    ["É", "E"],
    ["è", "e"],
    ["È", "E"],
    ["ẽ", "e"],
    ["Ẽ", "E"],
    ["ë", "e"],
    ["Ë", "E"],
    ["ê", "e"],
    ["Ê", "E"],
    ["ȅ", "e"],
    ["Ȅ", "E"],
    ["ē", "e"],
    ["Ē", "E"],
    ["ė", "e"],
    ["Ė", "E"],
    ["ę", "e"],
    ["Ę", "E"],
    ["ě", "e"],
    ["Ě", "E"],
    ["ĕ", "e"],
    ["Ĕ", "E"],
    ["í", "i"],
    ["Í", "I"],
    ["ì", "i"],
    ["Ì", "I"],
    ["ĩ", "i"],
    ["Ĩ", "I"],
    ["ï", "i"],
    ["Ï", "I"],
    ["î", "i"],
    ["Î", "I"],
    ["ȉ", "i"],
    ["Ȉ", "I"],
    ["į", "i"],
    ["Į", "I"],
    ["ī", "i"],
    ["Ī", "I"],
    ["ó", "o"],
    ["Ó", "O"],
    ["ò", "o"],
    ["Ò", "O"],
    ["õ", "o"],
    ["Õ", "O"],
    ["ö", "o"],
    ["Ö", "O"],
    ["ô", "o"],
    ["Ô", "O"],
    ["ȍ", "o"],
    ["Ȍ", "O"],
    ["ø", "o"],
    ["Ø", "O"],
    ["ő", "o"],
    ["Ő", "O"],
    ["ō", "o"],
    ["Ō", "O"],
    ["ú", "u"],
    ["Ú", "U"],
    ["ù", "u"],
    ["Ù", "U"],
    ["ũ", "u"],
    ["Ũ", "U"],
    ["ü", "u"],
    ["Ü", "U"],
    ["û", "u"],
    ["Û", "U"],
    ["ȕ", "u"],
    ["Ȕ", "U"],
    ["ǘ", "u"],
    ["Ǘ", "U"],
    ["ǜ", "u"],
    ["Ǜ", "U"],
    ["ű", "u"],
    ["Ű", "U"],
    ["ů", "u"],
    ["Ů", "U"],
    ["ū", "u"],
    ["Ū", "U"],
    ["ç", "c"],
    ["Ç", "C"],
    ["ḉ", "c"],
    ["Ḉ", "C"],
    ["ć", "c"],
    ["Ć", "C"],
    ["ĉ", "c"],
    ["Ĉ", "C"],
    ["č", "c"],
    ["Č", "C"],
    ["đ", "d"],
    ["Đ", "D"],
    ["ď", "d"],
    ["Ď", "D"],
    ["ǵ", "g"],
    ["Ǵ", "G"],
    ["ĝ", "g"],
    ["Ĝ", "G"],
    ["ģ", "g"],
    ["Ģ", "G"],
    ["ğ", "g"],
    ["Ğ", "G"],
    ["ḧ", "h"],
    ["Ḧ", "H"],
    ["ĥ", "h"],
    ["Ĥ", "H"],
    ["ħ", "h"],
    ["Ħ", "H"],
    ["ĵ", "j"],
    ["Ĵ", "J"],
    ["ḱ", "k"],
    ["Ḱ", "K"],
    ["ķ", "k"],
    ["Ķ", "K"],
    ["ĺ", "l"],
    ["Ĺ", "L"],
    ["ł", "l"],
    ["Ł", "L"],
    ["ľ", "l"],
    ["Ľ", "L"],
    ["ļ", "l"],
    ["Ļ", "L"],
    ["ḿ", "m"],
    ["Ḿ", "M"],
    ["ń", "n"],
    ["Ń", "N"],
    ["ǹ", "n"],
    ["Ǹ", "N"],
    ["ñ", "n"],
    ["Ñ", "N"],
    ["ň", "n"],
    ["Ň", "N"],
    ["ņ", "n"],
    ["Ņ", "N"],
    ["ṕ", "p"],
    ["Ṕ", "P"],
    ["ŕ", "r"],
    ["Ŕ", "R"],
    ["ȑ", "r"],
    ["Ȑ", "R"],
    ["ř", "r"],
    ["Ř", "R"],
    ["ś", "s"],
    ["Ś", "S"],
    ["ŝ", "s"],
    ["Ŝ", "S"],
    ["š", "s"],
    ["Š", "S"],
    ["ş", "s"],
    ["Ş", "S"],
    ["ẗ", "t"],
    ["ŧ", "t"],
    ["Ŧ", "T"],
    ["ť", "t"],
    ["Ť", "T"],
    ["ț", "t"],
    ["Ț", "T"],
    ["ţ", "t"],
    ["Ţ", "T"],
    ["ṽ", "v"],
    ["Ṽ", "V"],
    ["ẃ", "w"],
    ["Ẃ", "W"],
    ["ẁ", "w"],
    ["Ẁ", "W"],
    ["ẅ", "w"],
    ["Ẅ", "W"],
    ["ŵ", "w"],
    ["Ŵ", "W"],
    ["ẍ", "x"],
    ["Ẍ", "X"],
    ["ý", "y"],
    ["Ý", "Y"],
    ["ỳ", "y"],
    ["Ỳ", "Y"],
    ["ỹ", "y"],
    ["ÿ", "y"],
    ["Ÿ", "Y"],
    ["ŷ", "y"],
    ["Ŷ", "Y"],
    ["Ỹ", "Y"],
    ["ź", "z"],
    ["Ź", "Z"],
    ["ẑ", "z"],
    ["Ẑ", "Z"],
    ["ż", "z"],
    ["Ż", "Z"],
    ["ž", "z"],
    ["Ž", "Z"],
]);
/**
 * # isValid
 *
 * Returns false for _undefined_ and _null_. Returns true otherwise.
 *
 * ## Example
 *
 * ```ts
 * str.isValid(undefined) // false
 * str.isValid(null) // false
 * ```
 *
 * ```ts
 * str.isValid('') // true
 * str.isValid(' ') // true
 * str.isValid('Lorem ipsum') // true
 * ```
 */
export function isValid(str: string | undefined | null): boolean {
    if (typeof str !== "string") {
        return false;
    }
    if (str === "") {
        return true;
    }
    return !!str;
}
/**
 * # kebabCase
 *
 * Transforms a sequence of words into kebab case.
 *
 * ## Example
 *
 * ```ts
 * str.kebabCase('hey') // 'hey'
 * str.kebabCase('j S o N') // 'j-s-o-n'
 * str.kebabCase('j_S_o_N') // 'j-s-o-n'
 * str.kebabCase('j-S-o-N') // 'j-s-o-n'
 * ```
 */
export function kebabCase(str: string): string {
    return str
        .split(/ |_|-/g)
        .map((word) => word.toLocaleLowerCase())
        .join("-");
}
/**
 * # pascalCase
 *
 * Transforms a sequence of words into pascal case.
 *
 * ## Example
 *
 * ```ts
 * str.pascalCase('hey') // 'Hey'
 * str.pascalCase('j S o N') // 'JSON'
 * str.pascalCase('j_S_o_N') // 'JSON'
 * str.pascalCase('j-S-o-N') // 'JSON'
 * ```
 */
export function pascalCase(str: string): string {
    if (str === "") {
        return "";
    }
    return str
        .split(/ |_|-/g)
        .map((word) => word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase())
        .join("");
}

/**
 * # random
 *
 * Returns a random character of the string.
 *
 * ## Example
 *
 * ```ts
 * str.random('') // ''
 * str.random('a') // 'a'
 * str.random('Rafael') // 'R' | 'a' | 'f' | 'a' | 'e' | 'l'
 * ```
 */
export function random(str: string): string {
    if (!str.length) {
        return "";
    }
    return str[randomNum(0, str.length - 1)];
}

/**
 * # removeAccentuation
 *
 * Remove accentuated characters.
 *
 * ## Example
 *
 * ```ts
 * str.removeAccentuation('loção') // loo
 * str.removeAccentuation('fianceé') // fiance
 * str.removeAccentuation('Äpfel') // pfel
 * str.removeAccentuation('këndon') // kndon
 * str.removeAccentuation('pálmafák') // plmafk
 * ```
 */
export function removeAccentuation(str: string): string {
    return Array.from(str)
        .filter((letter) => !accents.has(letter))
        .join("");
}

/**
 * # replaceAccentuation
 *
 * Replace accentuated characters by unaccentuated ones.
 *
 * ## Example
 *
 * ```ts
 * str.replaceAccentuation('loção') // locao
 * str.replaceAccentuation('fianceé') // fiancee
 * str.replaceAccentuation('Äpfel') // Apfel
 * str.replaceAccentuation('këndon') // kendon
 * str.replaceAccentuation('pálmafák') // palmafak
 * ```
 */
export function replaceAccentuation(str: string): string {
    return Array.from(str)
        .map((letter) => accents.get(letter) || letter)
        .join("");
}
/**
 * # snakeCase
 *
 * Transforms a sequence of words into snake case.
 *
 * ## Example
 *
 * ```ts
 * str.snakeCase('hey') // 'hey'
 * str.snakeCase('j S o N') // 'j_s_o_n'
 * str.snakeCase('j_S_o_N') // 'j_s_o_n'
 * str.snakeCase('j-S-o-N') // 'j_s_o_n'
 * ```
 */
export function snakeCase(str: string): string {
    return str
        .split(/ |_|-/g)
        .map((word) => word.toLocaleLowerCase())
        .join("_");
}
