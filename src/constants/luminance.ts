import { LuminanceSteps } from "../typings/colors";

export const defaultDayLuminanceMap: LuminanceSteps = [
    // Lows
    // 25, 30, 35, 40,
    30, 32, 34, 36,
    // Mids
    50, 55, 60, 65,
    // Highs
    75, 80, 85, 90
];

export const defaultNightLuminanceMap: LuminanceSteps = [
    // Lows
    10, 12, 14, 16,
    // Mids
    // 45, 50, 55, 65,
    35, 45, 55, 65,
    // Highs
    70, 75, 85, 90
];
