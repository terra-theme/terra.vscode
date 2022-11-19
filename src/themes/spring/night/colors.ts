import { transparentize } from "../../../lib/transparentize";
import {
    TerraColors,
    TerraPaletteColors,
    TerraPrimaryColors,
    TerraSemanticColors
} from "../../../typings/colors";

export const primaries: TerraPrimaryColors = {
    0: "#141F19",
    1: "#17251E",
    2: "#1B2C24",
    3: "#284336",
    4: "#4E7E66",
    5: "#5D9579",
    6: "#71A78C",
    7: "#89B69F",
    8: "#A1C4B2",
    9: "#B8D3C6",
    10: "#D0E2D9",
    11: "#EFF0E7"
};

export const palette: TerraPaletteColors = {
    black: primaries[3],
    gray: primaries[4],

    darkRed: "#d6582e",
    red: "#da714d",

    darkGreen: "#5b9257",
    green: "#83c67f",

    darkYellow: "#faa04c",
    yellow: "#F2C14E",

    darkBlue: "#6199d1",
    blue: "#7CA6CF",

    darkMagenta: "#B07BAC",
    magenta: "#BFA9D6",

    darkCyan: "#5aaf7d",
    cyan: "#75bd93",

    lightGray: primaries[9],
    white: primaries[11],

    transparent: "#ffffff00"
};

export const semantics: TerraSemanticColors = {
    debug: palette.darkRed,

    shadow: transparentize(primaries[2], 0.3),

    bg: {
        dark: primaries[0],
        main: primaries[1],
        light: primaries[2],

        active: palette.yellow,
        neutral: palette.black,
        transparent: palette.transparent,

        info: transparentize(palette.darkBlue, 0.25),
        warning: transparentize(palette.darkYellow, 0.25),
        error: palette.transparent,

        selection: transparentize(palette.magenta, 0.15),
        hover: transparentize(palette.lightGray, 0.15)
    },

    fg: {
        dark: palette.gray,
        main: palette.white,
        light: palette.lightGray,
        invert: palette.black,
        neutral: palette.gray,
        warning: palette.yellow,
        error: palette.red,
        info: palette.blue,
        success: palette.green,
        active: palette.yellow,
        inactive: palette.gray
    },

    ansi: {
        black: palette.black,
        darkGray: palette.gray,
        darkBlue: palette.darkBlue,
        blue: palette.blue,
        darkCyan: palette.darkCyan,
        cyan: palette.cyan,
        darkGreen: palette.darkGreen,
        green: palette.green,
        darkRed: palette.darkRed,
        red: palette.red,
        darkMagenta: palette.darkMagenta,
        magenta: palette.magenta,
        darkYellow: palette.darkYellow,
        yellow: palette.yellow,
        gray: palette.lightGray,
        white: palette.white
    },

    border: {
        dark: primaries[2],
        main: primaries[3],
        light: primaries[4],
        active: palette.yellow,
        transparent: palette.transparent,
        selection: transparentize(palette.yellow, 0.75)
    },

    vcs: {
        added: palette.darkGreen,
        deleted: palette.darkRed,
        modded: palette.darkBlue,
        conflict: palette.darkYellow,
        neutral: palette.gray,
        incoming: palette.cyan,
        current: palette.blue
    }
};

export const colors: TerraColors = {
    primaries,
    palette,
    semantics
};
