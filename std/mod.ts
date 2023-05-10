import { compose } from "./compose/compose.ts";
import { pipe } from "./pipe/pipe.ts";
import { self } from "./self/self.ts";

export const std = {
    compose,
    pipe,
    self,
} as const;
