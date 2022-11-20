import { buildPrimary } from "../../../lib/build";
import { hslaToHex, transparentizeHex } from "../../../lib/color";
import {
    BasePrimary,
    TerraColors,
    TerraPaletteColors,
    TerraPrimaryColors,
    TerraSemanticColors
} from "../../../typings/colors";

const basePrimary: BasePrimary = {
    h: 215,
    s: 25
};

export const primaries: TerraPrimaryColors = {
    0: buildPrimary(basePrimary, 6),
    1: buildPrimary(basePrimary, 9),
    2: buildPrimary(basePrimary, 13),
    3: buildPrimary(basePrimary, 20),

    4: buildPrimary(basePrimary, 40),
    5: buildPrimary(basePrimary, 47),
    6: buildPrimary(basePrimary, 54),
    7: buildPrimary(basePrimary, 62),

    8: buildPrimary(basePrimary, 70),
    9: buildPrimary(basePrimary, 77),
    10: buildPrimary(basePrimary, 85),
    11: buildPrimary(basePrimary, 92)
};

export const palette: TerraPaletteColors = {
    black: primaries[3],
    gray: primaries[4],

    darkRed: hslaToHex({ h: 14, s: 67, l: 40 }),
    red: hslaToHex({ h: 14, s: 65, l: 50 }),

    darkGreen: hslaToHex({ h: 115, s: 40, l: 40 }),
    green: hslaToHex({ h: 115, s: 45, l: 45 }),

    darkYellow: hslaToHex({ h: 25, s: 75, l: 50 }),
    yellow: hslaToHex({ h: 39, s: 76, l: 50 }),

    darkBlue: hslaToHex({ h: 210, s: 55, l: 40 }),
    blue: hslaToHex({ h: 210, s: 45, l: 50 }),

    darkMagenta: hslaToHex({ h: 304, s: 25, l: 50 }),
    magenta: hslaToHex({ h: 268, s: 41, l: 65 }),

    darkCyan: hslaToHex({ h: 145, s: 49, l: 40 }),
    cyan: hslaToHex({ h: 137, s: 45, l: 50 }),

    lightGray: primaries[9],
    white: primaries[11],

    transparent: hslaToHex({ h: 255, s: 100, l: 100 })
};

export const semantics: TerraSemanticColors = {
    debug: palette.darkRed,

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
        selection: transparentizeHex(palette.magenta, 0.75)
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
