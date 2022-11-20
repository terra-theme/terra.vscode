import { BasePrimary } from "../typings/colors";
import { buildPrimary } from "./build";

describe("build", () => {
    describe("buildPrimary()", () => {
        const basePrimary: BasePrimary = {
            h: 150,
            s: 23
        };

        test("throws error, if l is below 0", () => {
            expect(() => {
                buildPrimary(basePrimary, -100);
            }).toThrow(
                new Error(
                    "l: '-100' must an integer between 0 an 100, or 0 and 100."
                )
            );
        });

        test("throws error, if l is greater than 100", () => {
            expect(() => {
                buildPrimary(basePrimary, 200);
            }).toThrow(
                new Error("l: '200' must an integer between 0 an 100, or 0 and 100.")
            );
        });

        test("accepts 0 and returns black", () => {
            expect(buildPrimary(basePrimary, 0)).toBe("#000000");
        });

        test("accepts 100 and returns white", () => {
            expect(buildPrimary(basePrimary, 100)).toBe("#FFFFFF");
        });

        test("returns a base primary", () => {
            expect(buildPrimary(basePrimary, 10)).toBe("#141F1A");
        });

        test("returns a brighter version of the base primary", () => {
            expect(buildPrimary(basePrimary, 20)).toBe("#273F33");
        });
    });
});
