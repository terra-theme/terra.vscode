import { DefaultTokenScope } from "./default";
import { CssTokenScope } from "./css";
import { ScssTokenScope } from "./scss";
import { ShellTokenScope } from "./shell";

/** TokenScope
 * @description VS Code uses TextMate grammars to break text into a list of tokens.
 * @see https://macromates.com/manual/en/language_grammars
 **/
export type TokenScope =
    | DefaultTokenScope
    | CssTokenScope
    | ScssTokenScope
    | ShellTokenScope;
