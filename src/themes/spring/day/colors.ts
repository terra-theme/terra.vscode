import { defaultDayLuminanceMap } from "../../../constants/luminance";
import { buildPrimaries } from "../../../lib/build";
import { hslaToHex, transparentizeHex } from "../../../lib/color";
import {
    BasePrimary,
    TerraColors,
    TerraPaletteColors,
    TerraPrimaryColors,
    TerraSemanticColors
} from "../../../typings/colors";

const basePrimary: BasePrimary = {
    h: 150,
    s: 15
};

export const primaries: TerraPrimaryColors = buildPrimaries(
    basePrimary,
    defaultDayLuminanceMap
);

export const palette: TerraPaletteColors = {
    black: primaries[3],
    gray: primaries[4],

    darkRed: hslaToHex({ h: 10, s: 67, l: 50 }),
    red: hslaToHex({ h: 10, s: 60, l: 60 }),

    darkGreen: hslaToHex({ h: 115, s: 40, l: 40 }),
    green: hslaToHex({ h: 115, s: 45, l: 45 }),

    darkYellow: hslaToHex({ h: 25, s: 65, l: 55 }),
    yellow: hslaToHex({ h: 35, s: 65, l: 60 }),

    darkBlue: hslaToHex({ h: 210, s: 55, l: 40 }),
    blue: hslaToHex({ h: 210, s: 45, l: 50 }),

    darkMagenta: hslaToHex({ h: 265, s: 30, l: 55 }),
    magenta: hslaToHex({ h: 265, s: 45, l: 65 }),

    darkCyan: hslaToHex({ h: 145, s: 49, l: 40 }),
    cyan: hslaToHex({ h: 137, s: 35, l: 50 }),

    lightGray: primaries[9],
    white: primaries[11],

    transparent: hslaToHex({ h: 255, s: 100, l: 100, a: 0 })
};

export const semantics: TerraSemanticColors = {
    debug: "#FF0000",

    shadow: transparentizeHex(primaries[0], 0.1),

    bg: {
        dark: primaries[9],
        main: primaries[10],
        light: primaries[11],

        active: palette.yellow,
        neutral: palette.black,
        transparent: palette.transparent,

        info: transparentizeHex(palette.darkBlue, 0.25),
        warning: transparentizeHex(palette.darkYellow, 0.25),
        error: transparentizeHex(palette.darkRed, 0.25),

        selection: transparentizeHex(palette.magenta, 0.15),
        hover: transparentizeHex(palette.lightGray, 0.15)
    },

    border: {
        dark: primaries[7],
        main: primaries[8],
        light: primaries[9],
        active: palette.magenta,
        transparent: palette.transparent,
        selection: transparentizeHex(palette.magenta, 0.75)
    },

    fg: {
        dark: primaries[1],
        main: primaries[2],
        light: primaries[3],

        invert: primaries[9],
        neutral: primaries[5],

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
