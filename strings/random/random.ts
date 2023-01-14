import { random as randomNum } from "../../numbers/random/random.ts";

export function random(str: string): string {
    if (!str.length) {
        return "";
    }

    return str[randomNum(0, str.length - 1)];
}
