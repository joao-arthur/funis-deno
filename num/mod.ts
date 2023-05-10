import { clamp } from "./clamp/clamp.ts";
import { parse } from "./parse/parse.ts";
import { range } from "./range/range.ts";
import { isValid } from "./isValid/isValid.ts";
import { random } from "./random/random.ts";
import { compareAsc } from "./compareAsc/compareAsc.ts";
import { compareDesc } from "./compareDesc/compareDesc.ts";
import { toFixed } from "./toFixed/toFixed.ts";
import { normalizeZero } from "./normalizeZero/normalizeZero.ts";

export const num = {
    clamp,
    parse,
    range,
    isValid,
    random,
    compareAsc,
    compareDesc,
    toFixed,
    normalizeZero,
} as const;
