## References

-   [Visual Studio Code - Syntax Highlight Guide](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)
-   [Visual Studio Code - Color Theme Guide](https://code.visualstudio.com/api/extension-guides/color-theme#syntax-colors)
-   [Visual Studio Code - Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)
-   [Visual Studio Code - Color Themes](https://code.visualstudio.com/docs/getstarted/themes)
-   [TextMate](https://macromates.com/manual/en/)
-   [Intro to TextMate](https://www.apeth.com/nonblog/stories/textmatebundle.html)
-   [Creating a VS Code Theme](https://css-tricks.com/creating-a-vs-code-theme/)

There are two components to syntax highlighting:

-   Breaking text into a list of tokens and scopes using a grammar
-   Using a theme to map these scopes to specific colors and styles

### TextMate Grammars

VS Code uses [TextMate grammars](https://macromates.com/manual/en/language_grammars) to break text into a list of tokens.

TextMate grammars are a structured collection of [Oniguruma regular expressions](https://macromates.com/manual/en/regular_expressions) and are typically written as a plist or JSON.

### Tokens and Scopes

Tokens are one or more characters that are part of the same program element. Example tokens include operators such as `+` and `*`, variable names such as `myVar`, or strings such as `"my string"`.

Each token is associated with a scope that defines the context of the token. A scope is a dot separated list of identifiers that specify the context of the current token. The `+` operation in JavaScript for example has the scope `keyword.operator.arithmetic.js`.

TextMate provides a [list of common scopes](https://macromates.com/manual/en/language_grammars) that many themes target. In order to have your grammar as broadly supported as possible, try to build on existing scopes rather than defining new ones.

Scopes nest so that each token is associated with a list of parent scopes. In a simple JavaScript function, the `+` operator has the following scope hierarchy (from lowest child to highest parent):

-   keyword.operator.arithmetic.js
-   meta.array.literal.js
-   meta.block.js
-   meta.function.js
-   source.js

Parent scope information is used for theming. When a theme targets a scope, all tokens with that parent scope will be colorized unless the theme also provides a more specific colorization for their individual scopes.
