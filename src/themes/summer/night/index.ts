import { buildTokenColors } from "../../../lib/build";
import { Theme } from "../../../typings/theme";
import { buildInterfaceColors } from "../../interface";

import { fullTokenMap } from "./token";
import { semantics } from "./colors";

const theme: Theme = {
    name: "terra summer night",
    type: "dark",
    time: "night",
    season: "summer",
    colors: buildInterfaceColors(semantics),
    tokenColors: buildTokenColors(fullTokenMap)
};

export default theme;
