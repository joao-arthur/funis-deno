import { accents } from "../internal/accents.ts";

export function replaceAccentuation(str: string): string {
    return Array.from(str)
        .map((letter) => accents.get(letter) || letter)
        .join("");
}
