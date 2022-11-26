import { HSL } from "colors-convert/dist/cjs/lib/types/types";

export type HexColor = `#${string}`;

export type BasePrimary = Pick<HSL, "h" | "s">;

export type LuminanceSteps = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];

export interface TerraPrimaryColors {
    0: HexColor;
    1: HexColor;
    2: HexColor;
    3: HexColor;
    4: HexColor;
    5: HexColor;
    6: HexColor;
    7: HexColor;
    8: HexColor;
    9: HexColor;
    10: HexColor;
    11: HexColor;
}

export interface TerraPaletteColors {
    black: HexColor;
    gray: HexColor;
    darkRed: HexColor;
    red: HexColor;
    darkGreen: HexColor;
    green: HexColor;
    darkYellow: HexColor;
    yellow: HexColor;
    darkBlue: HexColor;
    blue: HexColor;
    darkMagenta: HexColor;
    magenta: HexColor;
    darkCyan: HexColor;
    cyan: HexColor;
    lightGray: HexColor;
    white: HexColor;
    transparent: HexColor;
}

export interface TerraSemanticColors {
    debug: HexColor;

    shadow: HexColor;

    bg: {
        dark: HexColor;
        main: HexColor;
        light: HexColor;
        active: HexColor;
        neutral: HexColor;
        info: HexColor;
        warning: HexColor;
        error: HexColor;
        hover: HexColor;
        selection: HexColor;
        transparent: HexColor;
    };

    fg: {
        dark: HexColor;
        main: HexColor;
        light: HexColor;
        invert: HexColor;
        neutral: HexColor;
        warning: HexColor;
        error: HexColor;
        info: HexColor;
        success: HexColor;
        active: HexColor;
        inactive: HexColor;
    };

    border: {
        dark: HexColor;
        main: HexColor;
        light: HexColor;
        active: HexColor;
        transparent: HexColor;
        selection: HexColor;
    };

    vcs: {
        added: HexColor;
        modded: HexColor;
        deleted: HexColor;
        conflict: HexColor;
        neutral: HexColor;
        incoming: HexColor;
        current: HexColor;
    };

    ansi: {
        gray: HexColor;
        blue: HexColor;
        cyan: HexColor;
        green: HexColor;
        magenta: HexColor;
        red: HexColor;
        white: HexColor;
        yellow: HexColor;
        black: HexColor;
        darkBlue: HexColor;
        darkCyan: HexColor;
        darkGreen: HexColor;
        darkMagenta: HexColor;
        darkRed: HexColor;
        darkGray: HexColor;
        darkYellow: HexColor;
    };
}

export interface TerraColors {
    primaries: TerraPrimaryColors;
    palette: TerraPaletteColors;
    semantics: TerraSemanticColors;
}
