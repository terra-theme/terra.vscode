export const isInt = (num: number): boolean => {
    return Number.isSafeInteger(num);
};

export const isFloat = (num: number): boolean => {
    return Number(num) === num && num % 1 !== 0;
};
