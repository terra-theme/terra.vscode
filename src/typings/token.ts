import { HexColor } from "./colors";
import { TokenScope } from "./scopes";

export type TokenForeground = HexColor;

export type TokenFontStyle = "normal" | "italic" | "italic bold" | "bold";

export type TokenSettings = {
    foreground?: TokenForeground;
    fontStyle?: TokenFontStyle;
};

export interface TokenColor {
    name?: string;
    scope: TokenScope;
    settings?: TokenSettings;
}

export type TokenMap<Scope extends TokenScope> = {
    [key in Scope]: TokenSettings;
};
