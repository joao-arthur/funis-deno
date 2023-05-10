import { throttle } from "./throttle/throttle.ts";
import { debounce } from "./debounce/debounce.ts";

export const chr = {
    throttle,
    debounce,
} as const;
