import * as fs from "fs";

import { TokenScope } from "../typings/scopes";
import { Theme } from "../typings/theme";
import { TokenColor, TokenMap } from "../typings/token";

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
