import { buildTokenColors } from "../../../lib/build";
import { Theme } from "../../../types/theme";
import { buildInterfaceColors } from "../../interface";
import colors from "./colors";
import fullTokenMap from "./token";

// TODO: export default buildTheme({ ...meta }, colors, tokenColors)
const theme: Theme = {
    name: "Terra Spring Night",
    type: "dark",
    time: "Night",
    season: "Spring",

    colors: buildInterfaceColors(colors.semantics),
    tokenColors: buildTokenColors(fullTokenMap)
};

export default theme;
