import { hslaToHex, transparentizeHex } from "./color";

describe("color", () => {
    const alphaErrorMessage =
        "`alpha` must be a floating point number between 0 or 1, or 0 and 1.";

    describe("hslaToHex()", () => {
        test("Throws error for alpha values below 0", () => {
            expect(() => {
                hslaToHex({
                    h: 150,
                    s: 30,
                    l: 50,
                    a: -1
                });
            }).toThrow(new Error(alphaErrorMessage));
        });

        test("Throws error for alpha values beyond 1", () => {
            expect(() => {
                hslaToHex({
                    h: 150,
                    s: 30,
                    l: 50,
                    a: 2
                });
            }).toThrow(new Error(alphaErrorMessage));
        });

        test("Returns Hex with 100% alpha if `a` is 1", () => {
            expect(
                hslaToHex({
                    h: 150,
                    s: 30,
                    l: 50,
                    a: 1
                })
            ).toBe("#59A680FF");
        });

        test("Returns Hex with 0% alpha if `a` is 0", () => {
            expect(
                hslaToHex({
                    h: 150,
                    s: 30,
                    l: 50,
                    a: 0
                })
            ).toBe("#59A68000");
        });

        test("Returns Hex if no `a` argument is provided", () => {
            expect(
                hslaToHex({
                    h: 150,
                    s: 30,
                    l: 50
                })
            ).toBe("#59A680");
        });
    });

    describe("transparentizeHex()", () => {
        test("throws error when alpha argument is beyond boundary", () => {
            expect(() => {
                transparentizeHex("#273F33", 200);
            }).toThrow(new Error(alphaErrorMessage));
        });

        test("returns transparentized version of provided hex color", () => {
            expect(transparentizeHex("#273F33", 0.2)).toBe("#273F3333");
        });
    });
});
