export function lazyRange(
    from: number,
    to: number,
    step = 1,
): IterableIterator<number> {
    const delta = Number((to - from).toFixed(10));
    const deltaByStep = Number((delta / step).toFixed(10));
    const length = Math.floor(deltaByStep) + 1;
    const treatedLength = Math.max(length, 0);

    let i = -1;

    return {
        next(): IteratorResult<number> {
            i++;
            const done = i + 1 > treatedLength;

            return {
                done,
                value: done ? undefined! : i * step + from,
            };
        },
        [Symbol.iterator](): IterableIterator<number> {
            return this;
        },
    };
}
