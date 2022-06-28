import { HexColor } from "./Color";
import { VscTokenColor, VscInterfaceColors } from "./VisualStudioCode";

export interface TerraPrimaries {
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
}

export interface TerraPalette {
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
}

export interface TerraSemantics {
  transparent: HexColor;
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

  syntax: {
    function: HexColor;
    storage: HexColor;
    class: HexColor;
    struct: HexColor;
    type: HexColor;
    boolean: {
      false: HexColor;
      true: HexColor;
    };
    string: HexColor;
    interface: HexColor;
    enum: HexColor;
    method: HexColor;
    parameter: HexColor;
    property: HexColor;
    enumMember: HexColor;
    keyword: HexColor;
    return: HexColor;
    import: HexColor;
    export: HexColor;
    punctuation: HexColor;
    other: HexColor;
  };
}

export type TerraThemeTime = "Day" | "Night";

export type TerraThemeSeason = "Spring" | "Summer" | "Fall" | "Winter";

export type TerraName = `Terra ${TerraThemeSeason} ${TerraThemeTime}`;

export interface TerraTheme {
  name: TerraName;
  type: "dark" | "light";
  time: TerraThemeTime;
  season: TerraThemeSeason;

  colors: VscInterfaceColors;
  tokenColors: VscTokenColor[];
}
