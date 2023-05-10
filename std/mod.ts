import { compose } from "./compose/compose.ts";
import { pipe } from "./pipe/pipe.ts";
import { self } from "./self/self.ts";
import { throttle } from "./throttle/throttle.ts";
import { debounce } from "./debounce/debounce.ts";

export const std = {
    compose,
    pipe,
    self,
    throttle,
    debounce,
} as const;
