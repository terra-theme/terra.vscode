import {
    defaultDayLuminanceMap,
    defaultNightLuminanceMap
} from "../constants/luminance";
import { BasePrimary } from "../typings/colors";
import { buildPrimaries, buildPrimary } from "./build";

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

    describe("buildPrimaries()", () => {
        test("builds primary with day luminance map", () => {
            expect(
                buildPrimaries(
                    {
                        h: 150,
                        s: 25
                    },
                    defaultDayLuminanceMap
                )
            ).toEqual({
                "0": "#305040",
                "1": "#39604D",
                "2": "#437059",
                "3": "#4D8066",
                "4": "#609F80",
                "5": "#70A98C",
                "6": "#80B399",
                "7": "#8FBCA6",
                "8": "#AFCFBF",
                "9": "#BFD9CC",
                "10": "#CFE2D9",
                "11": "#DFECE6"
            });
        });

        test("builds primary with night luminance map", () => {
            expect(
                buildPrimaries(
                    {
                        h: 150,
                        s: 25
                    },
                    defaultNightLuminanceMap
                )
            ).toEqual({
                "0": "#13201A",
                "1": "#17261F",
                "2": "#1B2D24",
                "3": "#1F3329",
                "4": "#568F73",
                "5": "#609F80",
                "6": "#70A98C",
                "7": "#8FBCA6",
                "8": "#9FC6B3",
                "9": "#AFCFBF",
                "10": "#CFE2D9",
                "11": "#DFECE6"
            });
        });
    });
});
