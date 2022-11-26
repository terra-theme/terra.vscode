import { buildTokenColors } from "../../../lib/build";
import { Theme } from "../../../typings/theme";
import { buildInterfaceColors } from "../../interface";

import { primaries, palette, semantics } from "./colors";
import { fullTokenMap } from "./token";

const theme: Theme = {
    name: "terra summer day",
    type: "light",
    time: "day",
    season: "summer",
    primaries,
    palette,
    semantics,
    colors: buildInterfaceColors(semantics),
    tokenColors: buildTokenColors(fullTokenMap)
};

export default theme;
