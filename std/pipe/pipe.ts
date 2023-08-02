type unknownFn = (arg: unknown) => unknown;

export function pipe<T1, T2>(
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T2;

export function pipe<T1, T2, T3>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
): (initialValue: T1) => T3;

export function pipe<T1, T2, T3, T4>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
): (initialValue: T1) => T4;

export function pipe<T1, T2, T3, T4, T5>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
): (initialValue: T1) => T5;

export function pipe<T1, T2, T3, T4, T5, T6>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
): (initialValue: T1) => T6;

export function pipe<T1, T2, T3, T4, T5, T6, T7>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
): (initialValue: T1) => T7;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
): (initialValue: T1) => T8;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
): (initialValue: T1) => T9;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
): (initialValue: T1) => T10;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
): (initialValue: T1) => T11;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
): (initialValue: T1) => T12;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
): (initialValue: T1) => T13;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
): (initialValue: T1) => T14;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
): (initialValue: T1) => T15;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
    fn15: (arg15: T15) => T16,
): (initialValue: T1) => T16;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
    fn15: (arg15: T15) => T16,
    fn16: (arg16: T16) => T17,
): (initialValue: T1) => T17;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
    fn15: (arg15: T15) => T16,
    fn16: (arg16: T16) => T17,
    fn17: (arg17: T17) => T18,
): (initialValue: T1) => T18;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
    fn15: (arg15: T15) => T16,
    fn16: (arg16: T16) => T17,
    fn17: (arg17: T17) => T18,
    fn18: (arg18: T18) => T19,
): (initialValue: T1) => T19;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
    fn15: (arg15: T15) => T16,
    fn16: (arg16: T16) => T17,
    fn17: (arg17: T17) => T18,
    fn18: (arg18: T18) => T19,
    fn19: (arg19: T19) => T20,
): (initialValue: T1) => T20;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
    fn15: (arg15: T15) => T16,
    fn16: (arg16: T16) => T17,
    fn17: (arg17: T17) => T18,
    fn18: (arg18: T18) => T19,
    fn19: (arg19: T19) => T20,
    fn20: (arg20: T20) => T21,
): (initialValue: T1) => T21;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
    fn15: (arg15: T15) => T16,
    fn16: (arg16: T16) => T17,
    fn17: (arg17: T17) => T18,
    fn18: (arg18: T18) => T19,
    fn19: (arg19: T19) => T20,
    fn20: (arg20: T20) => T21,
    fn21: (arg21: T21) => T22,
): (initialValue: T1) => T22;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
    fn15: (arg15: T15) => T16,
    fn16: (arg16: T16) => T17,
    fn17: (arg17: T17) => T18,
    fn18: (arg18: T18) => T19,
    fn19: (arg19: T19) => T20,
    fn20: (arg20: T20) => T21,
    fn21: (arg21: T21) => T22,
    fn22: (arg22: T22) => T23,
): (initialValue: T1) => T23;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
    fn15: (arg15: T15) => T16,
    fn16: (arg16: T16) => T17,
    fn17: (arg17: T17) => T18,
    fn18: (arg18: T18) => T19,
    fn19: (arg19: T19) => T20,
    fn20: (arg20: T20) => T21,
    fn21: (arg21: T21) => T22,
    fn22: (arg22: T22) => T23,
    fn23: (arg23: T23) => T24,
): (initialValue: T1) => T24;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
    T25,
>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
    fn15: (arg15: T15) => T16,
    fn16: (arg16: T16) => T17,
    fn17: (arg17: T17) => T18,
    fn18: (arg18: T18) => T19,
    fn19: (arg19: T19) => T20,
    fn20: (arg20: T20) => T21,
    fn21: (arg21: T21) => T22,
    fn22: (arg22: T22) => T23,
    fn23: (arg23: T23) => T24,
    fn24: (arg24: T24) => T25,
): (initialValue: T1) => T25;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
    T25,
    T26,
>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
    fn15: (arg15: T15) => T16,
    fn16: (arg16: T16) => T17,
    fn17: (arg17: T17) => T18,
    fn18: (arg18: T18) => T19,
    fn19: (arg19: T19) => T20,
    fn20: (arg20: T20) => T21,
    fn21: (arg21: T21) => T22,
    fn22: (arg22: T22) => T23,
    fn23: (arg23: T23) => T24,
    fn24: (arg24: T24) => T25,
    fn25: (arg25: T25) => T26,
): (initialValue: T1) => T26;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
    T25,
    T26,
    T27,
>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
    fn15: (arg15: T15) => T16,
    fn16: (arg16: T16) => T17,
    fn17: (arg17: T17) => T18,
    fn18: (arg18: T18) => T19,
    fn19: (arg19: T19) => T20,
    fn20: (arg20: T20) => T21,
    fn21: (arg21: T21) => T22,
    fn22: (arg22: T22) => T23,
    fn23: (arg23: T23) => T24,
    fn24: (arg24: T24) => T25,
    fn25: (arg25: T25) => T26,
    fn26: (arg26: T26) => T27,
): (initialValue: T1) => T27;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
    T25,
    T26,
    T27,
    T28,
>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
    fn15: (arg15: T15) => T16,
    fn16: (arg16: T16) => T17,
    fn17: (arg17: T17) => T18,
    fn18: (arg18: T18) => T19,
    fn19: (arg19: T19) => T20,
    fn20: (arg20: T20) => T21,
    fn21: (arg21: T21) => T22,
    fn22: (arg22: T22) => T23,
    fn23: (arg23: T23) => T24,
    fn24: (arg24: T24) => T25,
    fn25: (arg25: T25) => T26,
    fn26: (arg26: T26) => T27,
    fn27: (arg27: T27) => T28,
): (initialValue: T1) => T28;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
    T25,
    T26,
    T27,
    T28,
    T29,
>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
    fn15: (arg15: T15) => T16,
    fn16: (arg16: T16) => T17,
    fn17: (arg17: T17) => T18,
    fn18: (arg18: T18) => T19,
    fn19: (arg19: T19) => T20,
    fn20: (arg20: T20) => T21,
    fn21: (arg21: T21) => T22,
    fn22: (arg22: T22) => T23,
    fn23: (arg23: T23) => T24,
    fn24: (arg24: T24) => T25,
    fn25: (arg25: T25) => T26,
    fn26: (arg26: T26) => T27,
    fn27: (arg27: T27) => T28,
    fn28: (arg28: T28) => T29,
): (initialValue: T1) => T29;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
    T25,
    T26,
    T27,
    T28,
    T29,
    T30,
>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
    fn15: (arg15: T15) => T16,
    fn16: (arg16: T16) => T17,
    fn17: (arg17: T17) => T18,
    fn18: (arg18: T18) => T19,
    fn19: (arg19: T19) => T20,
    fn20: (arg20: T20) => T21,
    fn21: (arg21: T21) => T22,
    fn22: (arg22: T22) => T23,
    fn23: (arg23: T23) => T24,
    fn24: (arg24: T24) => T25,
    fn25: (arg25: T25) => T26,
    fn26: (arg26: T26) => T27,
    fn27: (arg27: T27) => T28,
    fn28: (arg28: T28) => T29,
    fn29: (arg29: T29) => T30,
): (initialValue: T1) => T30;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
    T25,
    T26,
    T27,
    T28,
    T29,
    T30,
    T31,
>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
    fn15: (arg15: T15) => T16,
    fn16: (arg16: T16) => T17,
    fn17: (arg17: T17) => T18,
    fn18: (arg18: T18) => T19,
    fn19: (arg19: T19) => T20,
    fn20: (arg20: T20) => T21,
    fn21: (arg21: T21) => T22,
    fn22: (arg22: T22) => T23,
    fn23: (arg23: T23) => T24,
    fn24: (arg24: T24) => T25,
    fn25: (arg25: T25) => T26,
    fn26: (arg26: T26) => T27,
    fn27: (arg27: T27) => T28,
    fn28: (arg28: T28) => T29,
    fn29: (arg29: T29) => T30,
    fn30: (arg30: T30) => T31,
): (initialValue: T1) => T31;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
    T25,
    T26,
    T27,
    T28,
    T29,
    T30,
    T31,
    T32,
>(
    fn1: (arg1: T1) => T2,
    fn2: (arg2: T2) => T3,
    fn3: (arg3: T3) => T4,
    fn4: (arg4: T4) => T5,
    fn5: (arg5: T5) => T6,
    fn6: (arg6: T6) => T7,
    fn7: (arg7: T7) => T8,
    fn8: (arg8: T8) => T9,
    fn9: (arg9: T9) => T10,
    fn10: (arg10: T10) => T11,
    fn11: (arg11: T11) => T12,
    fn12: (arg12: T12) => T13,
    fn13: (arg13: T13) => T14,
    fn14: (arg14: T14) => T15,
    fn15: (arg15: T15) => T16,
    fn16: (arg16: T16) => T17,
    fn17: (arg17: T17) => T18,
    fn18: (arg18: T18) => T19,
    fn19: (arg19: T19) => T20,
    fn20: (arg20: T20) => T21,
    fn21: (arg21: T21) => T22,
    fn22: (arg22: T22) => T23,
    fn23: (arg23: T23) => T24,
    fn24: (arg24: T24) => T25,
    fn25: (arg25: T25) => T26,
    fn26: (arg26: T26) => T27,
    fn27: (arg27: T27) => T28,
    fn28: (arg28: T28) => T29,
    fn29: (arg29: T29) => T30,
    fn30: (arg30: T30) => T31,
    fn31: (arg31: T31) => T32,
): (initialValue: T1) => T32;

/**
 * # pipe
 *
 * Returns a function that apply the result of each function to the next one in the order they are defined.
 *
 * > Typescript does not infer the type of the first function argument when you call the function.
 * > To ensure type-safety, you have to explicit type the first function.
 *
 * ## Example
 *
 * ```ts
 * std.pipe(
 *    (value: number) => value * 2, // 20
 *    value => value - 5, // 15
 *    value => value / 3, // 5
 *    value => `${value} is the result` // '5 is the result'
 * )(10) // '5 is the result'
 * ```
 */
export function pipe(...fns: readonly unknownFn[]): unknownFn {
    return (initialParam) => fns.reduce((curr, fn) => fn(curr), initialParam);
}
