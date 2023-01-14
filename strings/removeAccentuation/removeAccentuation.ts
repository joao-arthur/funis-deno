import { accents } from "../internal/accents.ts";

export function removeAccentuation(str: string): string {
    return Array.from(str)
        .map((letter) => accents.has(letter) ? "" : letter).join("");
}
