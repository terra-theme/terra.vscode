import { defaultNightLuminanceMap } from "../../../constants/luminance";
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
    h: 200,
    s: 10
};

export const primaries: TerraPrimaryColors = buildPrimaries(
    basePrimary,
    defaultNightLuminanceMap
);

export const palette: TerraPaletteColors = {
    black: primaries[3],
    gray: primaries[4],

    darkRed: hslaToHex({ h: 15, s: 65, l: 50 }),
    red: hslaToHex({ h: 15, s: 65, l: 57 }),

    darkGreen: hslaToHex({ h: 115, s: 25, l: 45 }),
    green: hslaToHex({ h: 115, s: 40, l: 65 }),

    darkYellow: hslaToHex({ h: 28, s: 90, l: 65 }),
    yellow: hslaToHex({ h: 42, s: 75, l: 65 }),

    darkBlue: hslaToHex({ h: 210, s: 55, l: 60 }),
    blue: hslaToHex({ h: 210, s: 55, l: 65 }),

    darkMagenta: hslaToHex({ h: 304, s: 25, l: 60 }),
    magenta: hslaToHex({ h: 269, s: 35, l: 75 }),

    darkCyan: hslaToHex({ h: 155, s: 40, l: 51 }),
    cyan: hslaToHex({ h: 145, s: 40, l: 60 }),

    lightGray: primaries[9],
    white: primaries[11],

    transparent: hslaToHex({ h: 255, s: 100, l: 100, a: 0 })
};

export const semantics: TerraSemanticColors = {
    debug: palette.darkRed,

    shadow: transparentizeHex(primaries[2], 0.3),

    bg: {
        dark: primaries[0],
        main: primaries[1],
        light: primaries[2],

        active: palette.blue,
        neutral: palette.black,
        transparent: palette.transparent,

        info: transparentizeHex(palette.darkBlue, 0.25),
        warning: transparentizeHex(palette.darkYellow, 0.25),
        error: palette.transparent,

        selection: transparentizeHex(palette.blue, 0.1),
        hover: transparentizeHex(palette.lightGray, 0.1)
    },

    border: {
        dark: primaries[2],
        main: primaries[3],
        light: primaries[4],
        active: palette.blue,
        transparent: palette.transparent,
        selection: transparentizeHex(palette.blue, 0.75)
    },

    fg: {
        dark: primaries[9],
        main: primaries[10],
        light: primaries[11],

        invert: primaries[1],
        neutral: primaries[5],

        warning: palette.yellow,
        error: palette.red,
        info: palette.blue,
        success: palette.green,

        active: palette.blue,
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