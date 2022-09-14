# Terra Theme for Visual Studio Code

Terra will be a multi-platform theme collection with various nature inspired themes for each season, with a day and night variant.

### 🚧 &nbsp;Status: Early development &nbsp;🚧</p>

I am starting with the spring theme to gather experience, than will work on the infrastructure to be able to work with color variables and build th theme files dynamically, to be able to create the follow themes a bit faster and smarter.

## Themes

### Spring

| Name         | Theme Code | Hex       | Color                                                     |
| ------------ | ---------- | --------- | --------------------------------------------------------- |
| Black        | `tsn0`     | `#141F19` | ![](https://via.placeholder.com/250x25/141F19/141F19.png) |
| Dark Grey    | `tsn8`     | `#455F56` | ![](https://via.placeholder.com/250x25/455F56/455F56.png) |
| Dark Red     | `tsn1`     | `#DA5B50` | ![](https://via.placeholder.com/250x25/DA5B50/DA5B50.png) |
| Red          | `tsn9`     | `#D67676` | ![](https://via.placeholder.com/250x25/D67676/D67676.png) |
| Dark Green   | `tsn2`     | `#256C49` | ![](https://via.placeholder.com/250x25/256C49/256C49.png) |
| Green        | `tsn10`    | `#619B8A` | ![](https://via.placeholder.com/250x25/619B8A/619B8A.png) |
| Dark Yellow  | `tsn3`     | `#DD9046` | ![](https://via.placeholder.com/250x25/DD9046/DD9046.png) |
| Yellow       | `tsn11`    | `#F2C14E` | ![](https://via.placeholder.com/250x25/F2C14E/F2C14E.png) |
| Dark Blue    | `tsn4`     | `#629AD2` | ![](https://via.placeholder.com/250x25/629AD2/629AD2.png) |
| Blue         | `tsn12`    | `#7CA6CF` | ![](https://via.placeholder.com/250x25/7CA6CF/7CA6CF.png) |
| Dark Magenta | `tsn5`     | `#B07BAC` | ![](https://via.placeholder.com/250x25/B07BAC/B07BAC.png) |
| Magenta      | `tsn13`    | `#BFA9D6` | ![](https://via.placeholder.com/250x25/BFA9D6/BFA9D6.png) |
| Dark Cyan    | `tsn6`     | `#47945D` | ![](https://via.placeholder.com/250x25/47945D/47945D.png) |
| Cyan         | `tsn14`    | `#7CC08F` | ![](https://via.placeholder.com/250x25/7CC08F/7CC08F.png) |
| Light Grey   | `tsn7`     | `#9EB6A5` | ![](https://via.placeholder.com/250x25/9EB6A5/9EB6A5.png) |
| White        | `tsn15`    | `#F1E5D6` | ![](https://via.placeholder.com/250x25/F1E5D6/F1E5D6.png) |

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

## TODO

[TODO](./TODO.md)

## Credits and Inspiration

-   [dracula/visual-studio-code](https://github.dev/dracula/visual-studio-code)
-   [ayu](https://github.dev/ayu-theme/vscode-ayu)
