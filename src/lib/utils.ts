export const sortObjectByKey = <T>(object: T): T => {
    return (Object.keys(object) as Array<keyof T>).sort().reduce((acc, key) => {
        acc[key] = object[key];
        return acc;
    }, {} as T);
};
