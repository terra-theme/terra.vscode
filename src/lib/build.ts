import { HSL } from "colors-convert/dist/cjs/lib/types/types";
import * as fs from "fs";
import {
    BasePrimary,
    HexColor,
    LuminanceSteps,
    TerraPrimaryColors
} from "../typings/colors";

import { TokenScope } from "../typings/scopes";
import { Theme } from "../typings/theme";
import { TokenColor, TokenMap } from "../typings/token";
import { hslaToHex } from "./color";
import { isFloat } from "./number";
import { sortObjectByKey } from "./utils";

export const buildPrimary = (basePrimary: BasePrimary, l: HSL["l"]): HexColor => {
    if (isFloat(l)) {
        throw Error(`l: '${l}' must be an integer.`);
    } else if (l < 0 || l > 100) {
        throw Error(`l: '${l}' must an integer between 0 an 100, or 0 and 100.`);
    }

    return hslaToHex({
        ...basePrimary,
        l
    });
};

export const buildPrimaries = (
    basePrimary: BasePrimary,
    luminanceSteps: LuminanceSteps
): TerraPrimaryColors => {
    const primaries = luminanceSteps.reduce(
        (acc: TerraPrimaryColors, luminance: number, index: number) => {
            return {
                ...acc,
                [index]: buildPrimary(basePrimary, luminance)
            };
        },
        {} as TerraPrimaryColors
    );

    return sortObjectByKey(primaries);
};

export const buildTokenColors = (
    fullTokenMap: TokenMap<TokenScope>
): TokenColor[] => {
    return Object.entries(fullTokenMap).map(([scope, settings]) => ({
        scope: scope as TokenScope,
        settings
    }));
};

export const buildThemes = (themes: Theme[]): void => {
    const PROJECT_DIR_PATH = process.env.PWD;
    const DISTRIBUTION_DIR_NAME = "dist";
    const DISTRIBUTION_DIR_PATH = `${PROJECT_DIR_PATH}/${DISTRIBUTION_DIR_NAME}`;

    const ensureDirectory = (dirPath: string): void => {
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);

            console.log(
                "✅".padEnd(2, " "),
                "Created distribution folder..".padEnd(40, " "),
                `📂 "/${dirPath}"`
            );
        }
    };

    const writeThemeFile = (theme: Theme): void => {
        const themeAsJson = JSON.stringify(theme, undefined, 4);
        const THEME_FILE_PATH = `${DISTRIBUTION_DIR_PATH}/terra-${theme.season}-${theme.time}.json`;

        ensureDirectory(DISTRIBUTION_DIR_PATH);

        fs.writeFile(THEME_FILE_PATH, themeAsJson, err => {
            if (err) throw err;
        });

        console.log(
            "✅".padEnd(2, " "),
            `Updated [${theme.name}]..`.padEnd(40, " "),
            `📁 "${THEME_FILE_PATH}"`
        );
    };

    themes.forEach(writeThemeFile);
};
