import DefaultTokenMap from "./default";
import CssTokenMap from "./css";
import ScssTokenMap from "./scss";
import { HexColor } from "../colors";

export type TokenForeground = HexColor;

export type TokenFontStyle = "normal" | "italic" | "italic bold" | "bold";

export type TokenSettings = {
    foreground?: TokenForeground;
    fontStyle?: TokenFontStyle;
};

/** TokenScope
 * @description VS Code uses TextMate grammars to break text into a list of tokens.
 * @see https://macromates.com/manual/en/language_grammars
 **/
export type TokenScope = string;

export type TokenMap = Record<TokenScope, TokenSettings>;

export interface TokenColor {
    name?: string;
    scope: TokenScope | TokenScope[];
    settings?: TokenSettings;
}

/** FullTokenMap
 *
 * @description
 * A full map of all language token maps.
 * The keys like `css` serve **no other** purpose than human readability,
 * and will get omited during the building process.
 **/
export interface FullTokenMap {
    default: DefaultTokenMap;
    css: CssTokenMap;
    scss: ScssTokenMap;
}
