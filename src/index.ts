import * as fs from "fs";

import springNight from "./themes/spring/night";
import springDay from "./themes/spring/day";
import { Theme } from "./types/theme";

const themes: Theme[] = [springNight, springDay];

themes.forEach(theme => {
    const themeAsJson = JSON.stringify(theme, undefined, 4);

    fs.writeFile(
        `./dist/terra-${theme.season}-${theme.time}.json`,
        themeAsJson,
        err => {
            if (err) throw err;
        }
    );

    console.log(`Updated [${theme.name}]`);
});
