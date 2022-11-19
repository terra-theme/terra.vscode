import { transparentize } from "../../../lib/transparentize";
import {
    TerraColors,
    TerraPaletteColors,
    TerraPrimaryColors,
    TerraSemanticColors
} from "../../../typings/colors";

export const primaries: TerraPrimaryColors = {
    0: "#0d1116",
    1: "#111720",
    2: "#1b222c",
    3: "#283343",
    4: "#4e627e",
    5: "#5b7497",
    6: "#6f87a9",
    7: "#899bb6",
    8: "#a1b0c4",
    9: "#b8c3d3",
    10: "#d0d8e2",
    11: "#e7ebf0"
};

export const palette: TerraPaletteColors = {
    black: primaries[3],
    gray: primaries[4],

    darkRed: "#af4522",
    red: "#d4592f",

    darkGreen: "#44913e",
    green: "#47a940",

    darkYellow: "#e07221",
    yellow: "#e1a122",

    darkBlue: "#2f69a2",
    blue: "#4780ba",

    darkMagenta: "#a1619c",
    magenta: "#a582cb",

    darkCyan: "#33995E",
    cyan: "#46ba67",

    lightGray: primaries[9],
    white: primaries[11],

    transparent: "#ffffff00"
};

export const semantics: TerraSemanticColors = {
    debug: palette.darkRed,

    shadow: transparentize(primaries[0], 0.1),

    bg: {
        dark: primaries[9],
        main: primaries[10],
        light: primaries[11],

        active: palette.yellow,
        neutral: palette.black,
        transparent: palette.transparent,

        info: transparentize(palette.darkBlue, 0.25),
        warning: transparentize(palette.darkYellow, 0.25),
        error: transparentize(palette.darkRed, 0.25),

        selection: transparentize(palette.magenta, 0.15),
        hover: transparentize(palette.lightGray, 0.15)
    },

    fg: {
        dark: palette.gray,
        main: primaries[3],
        light: palette.lightGray,
        invert: palette.white,
        neutral: palette.gray,
        warning: palette.yellow,
        error: palette.red,
        info: palette.blue,
        success: palette.green,
        active: palette.magenta,
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
        dark: primaries[8],
        main: primaries[9],
        light: primaries[10],
        active: palette.magenta,
        transparent: palette.transparent,
        selection: transparentize(palette.magenta, 0.75)
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
