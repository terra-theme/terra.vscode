export const sortObjectByKey = <T extends Record<string, unknown>>(object: T): T => {
    return (Object.keys(object) as Array<keyof T>).sort().reduce((acc, key) => {
        acc[key] = object[key];
        return acc;
    }, {} as T);
};
