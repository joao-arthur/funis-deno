import { last } from "./last/last.ts";
import { rejectTimeout } from "./rejectTimeout/rejectTimeout.ts";
import { resolveTimeout } from "./resolveTimeout/resolveTimeout.ts";
import { objectify } from "./objectify/objectify.ts";
import { retry } from "./retry/retry.ts";

export const prm = {
    last,
    resolveTimeout,
    rejectTimeout,
    objectify,
    retry,
} as const;
