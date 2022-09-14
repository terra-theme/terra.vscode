import { HexColor } from "../types/colors";

/**
 * A function to transparentize a hex color
 * @param color HexColor
 * @param opacity number
 * @returns HexColor
 */
export function transparentize(color: HexColor, opacity = 0.25): HexColor {
    // coerce values so ti is between 0 and 1.
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return (color + _opacity.toString(16).toUpperCase()) as HexColor;
}
