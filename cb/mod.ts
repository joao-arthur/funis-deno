import { eq } from "./eq/eq.ts";
import { ne } from "./ne/ne.ts";
import { gt } from "./gt/gt.ts";
import { ge } from "./ge/ge.ts";
import { lt } from "./lt/lt.ts";
import { le } from "./le/le.ts";

export const cb = {
    eq,
    ne,
    gt,
    ge,
    lt,
    le,
} as const;
