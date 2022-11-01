import { buildTokenColors } from "../../../lib/build";
import { Theme } from "../../../typings/theme";
import { buildInterfaceColors } from "../../interface";

import { semantics } from "./colors";
import { fullTokenMap } from "./token";

const theme: Theme = {
    name: "terra spring day",
    type: "light",
    time: "day",
    season: "spring",
    colors: buildInterfaceColors(semantics),
    tokenColors: buildTokenColors(fullTokenMap)
};

export default theme;
