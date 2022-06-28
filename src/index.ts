import fs from "fs";
import springNight from "./spring/night";
import springDay from "./spring/day";
import { TerraTheme } from "./types/Terra";

const themes: TerraTheme[] = [springNight, springDay];

themes.forEach((theme) => {
  const themeAsJson = JSON.stringify(theme, undefined, 2);

  fs.writeFile(
    `./themes/terra-${theme.season}-${theme.time}.json`,
    themeAsJson,
    (err) => {
      if (err) throw err;
    }
  );

  console.log(`Updated [${theme.name}]`);
});
