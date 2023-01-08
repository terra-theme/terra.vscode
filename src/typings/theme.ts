import {
    TerraPaletteColors,
    TerraPrimaryColors,
    TerraSemanticColors
} from "./colors";
import { VscInterfaceColors } from "./interface";
import { TokenColor } from "./token";

export type TerraThemeTime = "day" | "night" | "dark_night";

export type TerraThemeSeason = "spring" | "summer" | "fall" | "winter";

export type TerraThemeName = `terra ${TerraThemeSeason} ${TerraThemeTime}`;

export type VscCodeThemeType = "dark" | "light";

export interface Theme {
    name: TerraThemeName;
    time: TerraThemeTime;
    season: TerraThemeSeason;
    type: VscCodeThemeType;
    primaries: TerraPrimaryColors;
    palette: TerraPaletteColors;
    semantics: TerraSemanticColors;
    colors: VscInterfaceColors;
    tokenColors: TokenColor[];
}
