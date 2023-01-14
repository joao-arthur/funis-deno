export type plainObject<T = unknown> = {
    readonly [key: string | number]: T;
};
