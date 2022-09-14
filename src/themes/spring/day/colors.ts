import { transparentize } from "../../../lib/transparentize";
import {
    TerraColors,
    TerraPaletteColors,
    TerraPrimaryColors,
    TerraSemanticColors
} from "../../../types/colors";

const primaries: TerraPrimaryColors = {
    0: "#141F19",
    1: "#17251E",
    2: "#1B2C24",
    3: "#284336",
    4: "#4E7E66",
    5: "#5D9579",
    6: "#71A78C",
    7: "#89B69F",
    8: "#a8ccba",
    9: "#c1d9ce",
    10: "#D0E2D9",
    11: "#E7F0EC"
};

const palette: TerraPaletteColors = {
    black: primaries[3],
    gray: primaries[4],

    darkRed: "#d6582e",
    red: "#da714d",

    darkGreen: "#44913e",
    green: "#55b44e",

    darkYellow: "#dd813d",
    yellow: "#e3a934",

    darkBlue: "#6199d1",
    blue: "#5a8dc1",

    darkMagenta: "#B07BAC",
    magenta: "#b294d2",

    darkCyan: "#4bb477",
    cyan: "#5cc279",

    lightGray: primaries[9],
    white: primaries[11],

    transparent: "#ffffff00"
};

const semantics: TerraSemanticColors = {
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

        selection: transparentize(palette.darkMagenta, 0.15),
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
        transparent: palette.transparent
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

const colors: TerraColors = {
    primaries,
    palette,
    semantics
};

export default colors;
