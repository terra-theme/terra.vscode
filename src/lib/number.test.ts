import { isFloat, isInt } from "./number";

describe("number", () => {
    describe("isInt()", () => {
        test("returns false if provided with 0.255", () => {
            expect(isInt(0.255)).toBe(false);
        });

        test("returns true if provided with 1.0", () => {
            expect(isInt(1.0)).toBe(true);
        });

        test("returns true if provided with 0.0", () => {
            expect(isInt(0.0)).toBe(true);
        });
        test("returns true if provided with 5", () => {
            expect(isInt(5)).toBe(true);
        });
    });

    describe("isFloat()", () => {
        test("returns false if provided with 1.0", () => {
            expect(isFloat(1.0)).toBe(false);
        });

        test("returns false if provided with 0.0", () => {
            expect(isFloat(0.0)).toBe(false);
        });
        test("returns false if provided with 5", () => {
            expect(isFloat(5)).toBe(false);
        });

        test("returns true if provided with 0.255", () => {
            expect(isFloat(0.255)).toBe(true);
        });
    });
});
