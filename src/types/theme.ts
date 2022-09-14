import VscInterfaceColors from "./interface";
import { TokenColor } from "./token";

export type ThemeTime = "Day" | "Night";

export type ThemeSeason = "Spring" | "Summer" | "Fall" | "Winter";

export type ThemeName = `Terra ${ThemeSeason} ${ThemeTime}`;

export interface Theme {
    name: ThemeName;
    time: ThemeTime;
    season: ThemeSeason;
    type: "dark" | "light";

    colors: VscInterfaceColors;
    tokenColors: TokenColor[];
}
