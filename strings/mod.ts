import { camelCase } from "./camelCase/camelCase.ts";
import { pascalCase } from "./pascalCase/pascalCase.ts";
import { kebabCase } from "./kebabCase/kebabCase.ts";
import { snakeCase } from "./snakeCase/snakeCase.ts";
import { replaceAccentuation } from "./replaceAccentuation/replaceAccentuation.ts";
import { removeAccentuation } from "./removeAccentuation/removeAccentuation.ts";
import { isValid } from "./isValid/isValid.ts";
import { random } from "./random/random.ts";
import { compareAsc } from "./compareAsc/compareAsc.ts";
import { compareDesc } from "./compareDesc/compareDesc.ts";

export const strings = {
    camelCase,
    pascalCase,
    kebabCase,
    snakeCase,
    replaceAccentuation,
    removeAccentuation,
    isValid,
    random,
    compareAsc,
    compareDesc,
} as const;
