import { LuminanceSteps } from "../typings/colors";

export const defaultDayLuminanceMap: LuminanceSteps = [
    // Lows
    20, 25, 30, 35,
    // Mids
    50, 55, 60, 65,
    // Highs
    75, 80, 85, 90
];

export const defaultNightLuminanceMap: LuminanceSteps = [
    // Lows
    10, 12, 14, 16,
    // Mids
    35, 45, 55, 65,
    // Highs
    70, 75, 85, 90
];
