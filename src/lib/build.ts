import {
    TokenScope,
    TokenFontStyle,
    TokenForeground,
    TokenSettings,
    TokenColor,
    TokenMap,
    FullTokenMap
} from "../types/token";

export const buildTokenSettings = (
    foreground?: TokenForeground,
    fontStyle?: TokenFontStyle
): TokenSettings => ({
    ...(foreground && { foreground }),
    ...(fontStyle && { fontStyle })
});

export const buildToken = (
    scope: TokenScope,
    settings: TokenSettings
): TokenColor => ({
    scope,
    settings
});

/** buildTokenColors
 * @description
 * Build TokenColors from FullTokenMap
 **/
export const buildTokenColors = (fullTokenMap: FullTokenMap): TokenColor[] => {
    // Omit and ignore the language keys (e.g. `css`) from the fullTokenMap by grabbing only the values from it
    const allTokenMapsWithoutLangKeys: TokenMap[] = Object.values(fullTokenMap);

    // Traverse through all language tokenMaps and build token-styles from it
    const allTokenColors = allTokenMapsWithoutLangKeys.reduce(
        (acc: TokenColor[], tokenMap: TokenMap) => {
            return [
                ...acc,
                ...Object.entries(tokenMap).map(([tokenScope, tokenSetting]) => {
                    return buildToken(tokenScope, tokenSetting);
                })
            ];
        },
        []
    );

    return allTokenColors;
};
