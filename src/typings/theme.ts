import { VscInterfaceColors } from "./interface";
import { TokenColor } from "./token";

export type ThemeTime = "day" | "night";

export type ThemeSeason = "spring" | "summer" | "fall" | "winter";

export type ThemeName = `terra ${ThemeSeason} ${ThemeTime}`;

export type ThemeType = "dark" | "light";

export interface Theme {
    name: ThemeName;
    time: ThemeTime;
    season: ThemeSeason;
    type: ThemeType;
    colors: VscInterfaceColors;
    tokenColors: TokenColor[];
}
