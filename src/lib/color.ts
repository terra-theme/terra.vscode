import {
    hslaToHex as hslaToHexFromLib,
    isHsla,
    hslToHex as hslToHexFromLib,
    isHsl,
    hexToHexWithAlpha
} from "colors-convert";
import { HSL, HSLA } from "colors-convert/dist/esm/lib/types/types";
import { HexColor } from "../typings/colors";

const validateAlpha = (alpha: number | undefined): void => {
    if (alpha && (alpha < 0 || alpha > 1)) {
        throw Error(
            "`alpha` must be a floating point number between 0 or 1, or 0 and 1."
        );
    }
};

export const hslaToHex = (color: HSLA | HSL): HexColor => {
    if ("a" in color) {
        validateAlpha(color.a);
    }

    if (isHsla(color)) {
        return hslaToHexFromLib(color) as HexColor;
    } else if (isHsl(color)) {
        return hslToHexFromLib(color) as HexColor;
    } else {
        throw Error("Color is not in HSL or HSLA format!");
    }
};

export const transparentizeHex = (
    hex: Parameters<typeof hexToHexWithAlpha>["0"],
    a: Parameters<typeof hexToHexWithAlpha>["1"]
): HexColor => {
    validateAlpha(a);
    return hexToHexWithAlpha(hex, a) as HexColor;
};
