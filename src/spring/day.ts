import {
  TerraPalette,
  TerraPrimaries,
  TerraSemantics,
  TerraTheme,
} from "../types/Terra";
import { transparentize } from "../lib/transparentize";
import { getInterfaceColors } from "../interface/getInterfaceColors";

const primaries: TerraPrimaries = {
  0: "#141F19",
  1: "#17251E",
  2: "#1B2C24",
  3: "#284336",
  4: "#256C49",
  5: "#50946A",
  6: "#79B791",
  7: "#ADE3C9",
  8: "#D6F1E4",
  9: "#ddf1e8", // Put into FIGMA
};

export const palette: TerraPalette = {
  black: primaries[0],
  gray: "#455F56",

  darkRed: "#DA5B50",
  red: "#DB7070",

  darkGreen: primaries[4],
  green: "#619B8A",

  darkYellow: "#DD9046",
  yellow: "#F2C14E",

  darkBlue: "#629AD2",
  blue: "#7CA6CF",

  darkMagenta: "#B07BAC",
  magenta: "#BFA9D6",

  darkCyan: "#47945D",
  cyan: "#7CC08F",

  lightGray: "#9EB6A5",
  white: "#F1E5D6",
};

export const semantics: TerraSemantics = {
  transparent: "#ffffff00",
  shadow: transparentize(primaries[0], 0.9),

  bg: {
    dark: primaries[7],
    main: primaries[8],
    light: primaries[8],

    active: palette.yellow,
    neutral: palette.black,

    info: transparentize(palette.darkBlue, 0.25),
    warning: transparentize(palette.darkYellow, 0.25),
    error: transparentize(palette.darkRed, 0.25),

    selection: transparentize(palette.darkMagenta, 0.15),
    hover: transparentize(palette.lightGray, 0.15),
  },

  fg: {
    dark: palette.gray,
    main: palette.black,
    light: palette.lightGray,
    invert: palette.white,
    neutral: palette.gray,
    warning: palette.yellow,
    error: palette.red,
    info: palette.blue,
    success: palette.green,
    active: palette.yellow,
    inactive: palette.gray,
  },

  ansi: {
    black: palette.black,
    darkGray: palette.gray,

    darkBlue: palette.darkBlue,
    blue: palette.blue,

    darkCyan: palette.darkCyan,
    cyan: palette.cyan,

    darkGreen: palette.darkGreen,
    green: palette.green,

    darkRed: palette.darkRed,
    red: palette.red,

    darkMagenta: palette.darkMagenta,
    magenta: palette.magenta,

    darkYellow: palette.darkYellow,
    yellow: palette.yellow,

    gray: palette.lightGray,
    white: palette.white,
  },

  border: {
    dark: primaries[6],
    main: primaries[7],
    light: primaries[8],
    active: palette.yellow,
  },

  vcs: {
    added: palette.darkGreen,
    deleted: palette.darkRed,
    modded: palette.darkBlue,
    conflict: palette.darkYellow,
    neutral: palette.gray,
    incoming: palette.cyan,
    current: palette.blue,
  },

  syntax: {
    function: palette.yellow,
    class: palette.yellow,
    type: palette.cyan,
    storage: palette.blue,
    struct: palette.darkYellow,
    boolean: {
      false: palette.red,
      true: palette.green,
    },
    string: palette.green,
    enum: palette.cyan,
    enumMember: palette.darkCyan,
    interface: palette.cyan,
    property: palette.blue,
    method: palette.darkBlue,
    parameter: palette.blue,
    keyword: palette.magenta,
    import: palette.red,
    export: palette.red,
    return: palette.red,
    punctuation: palette.black,
    other: palette.black,
  },
};

const { fg, syntax } = semantics;

const theme: TerraTheme = {
  name: "Terra Spring Night",
  type: "light",
  time: "Day",
  season: "Spring",

  colors: getInterfaceColors(semantics),

  tokenColors: [
    // Booleans
    {
      name: "false",
      scope: "constant.language.boolean.false",
      settings: {
        foreground: syntax.boolean.false,
      },
    },
    {
      name: "false",
      scope: "constant.language.boolean.true",
      settings: {
        foreground: syntax.boolean.true,
      },
    },

    // Keywords
    {
      name: "Keyword Operator Default",
      scope: ["keyword.operator"],
      settings: {
        foreground: fg.main,
      },
    },
    {
      name: "Keyword Operator Specific",
      scope: ["keyword.operator.expression", "keyword.operator.optional"],
      settings: {
        foreground: palette.magenta,
        fontStyle: "bold",
      },
    },
    {
      name: "Keyword Control",
      scope: ["keyword.control"],
      settings: {
        foreground: palette.red,
        fontStyle: "italic bold",
      },
    },

    // Variables
    {
      name: "Variables",
      scope: "variable",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Variable other",
      scope: "variable.other.constant",
      settings: {
        foreground: palette.blue,
      },
    },

    // Strings
    {
      name: "Strings",
      scope: "string",
      settings: {
        foreground: syntax.string,
      },
    },
    {
      name: "String Quotation",
      scope: [
        "punctuation.definition.string.begin",
        "punctuation.definition.string.end",
      ],
      settings: {
        foreground: syntax.string,
      },
    },

    // Punctuation
    {
      name: "Punctuation",
      scope: ["punctuation"],
      settings: {
        foreground: fg.main,
      },
    },

    // Storage Type
    {
      name: "Function Declaration",
      scope: [
        "storage.type.function",
        "storage.type.enum",
        "storage.type.interface",
        "storage.type.type",
      ],
      settings: {
        foreground: palette.magenta,
      },
    },

    // Entity Names
    {
      name: "Entity Name Type",
      scope: ["entity.name.type"],
      settings: {
        foreground: palette.cyan,
        fontStyle: "bold",
      },
    },
    {
      name: "Entity Name Space",
      scope: "entity.name.namespace",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    // {
    //   name: "Storage Declaration",
    //   scope: "storage.type",
    //   settings: {
    //     foreground: palette.magenta,
    //   },
    // },

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    {
      name: "unison punctuation",
      scope:
        "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "haskell variable generic-type",
      scope: "variable.other.generic-type.haskell",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "haskell storage type",
      scope: "storage.type.haskell",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "support.variable.magic.python",
      scope: "support.variable.magic.python",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "punctuation.separator.parameters.python",
      scope:
        "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "variable.parameter.function.language.special.self.python",
      scope: "variable.parameter.function.language.special.self.python",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "storage.modifier.lifetime.rust",
      scope: "storage.modifier.lifetime.rust",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "support.function.std.rust",
      scope: "support.function.std.rust",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "entity.name.lifetime.rust",
      scope: "entity.name.lifetime.rust",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "variable.language.rust",
      scope: "variable.language.rust",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "support.constant.edge",
      scope: "support.constant.edge",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "regexp constant character-class",
      scope: "constant.other.character-class.regexp",
      settings: {
        foreground: palette.blue,
      },
    },

    {
      name: "Text",
      scope: "variable.parameter.function",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "Comment Markup Link",
      scope: "comment markup.link",
      settings: {
        foreground: palette.gray,
      },
    },
    {
      name: "markup diff",
      scope: "markup.changed.diff",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "diff",
      scope:
        "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "inserted.diff",
      scope: "markup.inserted.diff",
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: "deleted.diff",
      scope: "markup.deleted.diff",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "c++ function",
      scope: "meta.function.c,meta.function.cpp",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "c++ block",
      scope:
        "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "js/ts punctuation separator key-value",
      scope: "punctuation.separator.key-value",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "React Children",
      scope: "meta.jsx.children.tsx",
      settings: {
        foreground: palette.white,
      },
    },

    {
      name: "math js/ts",
      scope: "support.constant.math",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "math property js/ts",
      scope: "support.constant.property.math",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "java type",
      scope: ["storage.type.annotation.java", "storage.type.object.array.java"],
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "java source",
      scope: "source.java",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "java modifier.import",
      scope:
        "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "java modifier.import",
      scope: "meta.method.java",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "java modifier.import",
      scope:
        "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "java instanceof",
      scope: "keyword.operator.instanceof.java",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "java variable.name",
      scope: "meta.definition.variable.name.java",
      settings: {
        foreground: palette.blue,
      },
    },

    {
      name: "CSS Property Name",
      scope: [
        "support.type.property-name.css",
        "support.type.vendored.property-name.css",
      ],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "SCSS  Property List",
      scope: ["punctuation.definition.entity.css"],
      settings: {
        foreground: palette.blue,
        fontStyle: "bold",
      },
    },
    {
      name: "CSS Property Value",
      scope: [
        "support.constant.property-value.css",
        "support.constant.property-value.scss",
        "meta.property-value.scss",
      ],
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "CSS Operators",
      scope: [
        "keyword.operator.css",
        "keyword.operator.scss",
        "keyword.operator.less",
      ],
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "SCSS MixinName",
      scope: ["entity.name.function.scss"],
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "css color standard name",
      scope:
        "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "css comma",
      scope: "punctuation.separator.list.comma.css",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "css attribute-name.id",
      scope: "support.constant.color.w3c-standard-color-name.css",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "js/ts module",
      scope:
        "support.module.node,support.type.object.module,support.module.node",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "entity.name.type.module",
      scope: "entity.name.type.module",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "tsx object key",
      scope: "meta.object-literal.key.tsx",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "tsx object member",
      scope: "variable.other.object.tsx",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "js variable readwrite",
      scope:
        "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    // {
    //   name: "Enum",
    //   scope: "entity.name.type.enum.tsx",
    //   settings: {
    //     foreground: palette.yellow,
    //   },
    // },
    {
      name: "js/ts json",
      scope: "support.constant.json",
      settings: {
        foreground: palette.darkYellow,
      },
    },

    {
      name: "js/ts console",
      scope: "support.type.object.console",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "js/ts support.variable.property.process",
      scope: "support.variable.property.process",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "js console function",
      scope: "entity.name.function,support.function.console",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "keyword.operator.misc.rust",
      scope: "keyword.operator.misc.rust",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "keyword.operator.sigil.rust",
      scope: "keyword.operator.sigil.rust",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "operator",
      scope: "keyword.operator.delete",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "js dom",
      scope: "support.type.object.dom",
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "js dom variable",
      scope: "support.variable.dom,support.variable.property.dom",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Punctuation",
      scope: "punctuation.separator.delimiter",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "Other punctuation .c",
      scope: "punctuation.separator.c,punctuation.separator.cpp",
      settings: {
        foreground: palette.red,
      },
    },
    // {
    //   name: "C type posix-reserved",
    //   scope: "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
    //   settings: {
    //     foreground: palette.magenta,
    //   },
    // },
    // {
    //   name: "keyword.operator.sizeof.c",
    //   scope: "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
    //   settings: {
    //     foreground: palette.red,
    //   },
    // },
    {
      name: "python parameter",
      scope: "variable.parameter.function.language.python",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "python type",
      scope: "support.type.python",
      settings: {
        foreground: palette.magenta,
      },
    },
    // {
    //   name: "python logical",
    //   scope: "keyword.operator.logical.python",
    //   settings: {
    //     foreground: palette.red,
    //   },
    // },
    // {
    //   name: "pyCs",
    //   scope: "variable.parameter.function.python",
    //   settings: {
    //     foreground: palette.darkYellow,
    //   },
    // },
    {
      name: "python block",
      scope:
        "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "python function-call.generic",
      scope: "meta.function-call.generic.python",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "python placeholder reset to normal string",
      scope: "constant.character.format.placeholder.other.python",
      settings: {
        foreground: palette.darkYellow,
      },
    },

    {
      name: "Compound Assignment Operators",
      scope: "keyword.operator.assignment.compound",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Compound Assignment Operators js/ts",
      scope:
        "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
      settings: {
        foreground: palette.magenta,
      },
    },

    {
      name: "Variables",
      scope: "variable.scss",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Variables",
      scope: "variable.c",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "Language variables",
      scope: "variable.language",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Java Variables",
      scope: "token.variable.parameter.java",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "Java Imports",
      scope: "import.storage.java",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Packages",
      scope: "token.package.keyword",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Packages",
      scope: "token.package",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "Functions",
      scope: [
        "entity.name.function",
        "meta.require",
        "support.function.any-method",
        "variable.function",
      ],
      settings: {
        foreground: palette.yellow,
        fontStyle: "bold",
      },
    },
    {
      name: "Classes",
      scope: "entity.name.type.namespace",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Classes",
      scope: "support.class, entity.name.type.class",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Class name",
      scope: "entity.name.class.identifier.namespace.type",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Class name",
      scope: [
        "entity.name.class",
        "variable.other.class.js",
        "variable.other.class.ts",
      ],
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Class name php",
      scope: "variable.other.class.php",
      settings: {
        foreground: palette.blue,
      },
    },

    {
      name: "Control Elements",
      scope: "control.elements, keyword.operator.less",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Methods",
      scope: "keyword.other.special-method",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: palette.red,
        fontStyle: "italic bold",
      },
    },
    {
      name: "Storage JS TS",
      scope: "token.storage",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Java Storage",
      scope: "token.storage.type.java",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Support",
      scope: "support.function",
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "Support type",
      scope: "support.type.property-name",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "Support type",
      scope: "support.constant.font-name",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Meta tag",
      scope: "meta.tag",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Strings",
      scope: "string",
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: "Inherited Class",
      scope: "entity.other.inherited-class",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Constant other symbol",
      scope: "constant.other.symbol",
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "Integers",
      scope: "constant.numeric",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Constants",
      scope: "constant",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Constants",
      scope: "punctuation.definition.constant",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Tags",
      scope: ["entity.name.tag", "entity.name.tag.tsx"],
      settings: {
        foreground: palette.yellow,
        fontStyle: "bold",
      },
    },
    {
      name: "Attributes",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Attribute IDs",
      scope: "entity.other.attribute-name.id",
      settings: {
        fontStyle: "normal",
        foreground: palette.yellow,
      },
    },
    {
      name: "Attribute class",
      scope: "entity.other.attribute-name.class.css",
      settings: {
        fontStyle: "normal",
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Selector",
      scope: "meta.selector",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Headings",
      scope: "markup.heading",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Headings",
      scope:
        "markup.heading punctuation.definition.heading, entity.name.section",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Units",
      scope: "keyword.other.unit",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Bold",
      scope: "markup.bold,todo.bold",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Bold",
      scope: "punctuation.definition.bold",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "markup Italic",
      scope: "markup.italic, punctuation.definition.italic,todo.emphasis",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "emphasis md",
      scope: "emphasis md",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown headings",
      scope: "entity.name.section.markdown",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
      scope: "punctuation.definition.heading.markdown",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "punctuation.definition.list.begin.markdown",
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown heading setext",
      scope: "markup.heading.setext",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
      scope: "punctuation.definition.bold.markdown",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Inline Raw",
      scope: "markup.inline.raw.markdown",
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Inline Raw",
      scope: "markup.inline.raw.string.markdown",
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
      scope: "punctuation.definition.list.markdown",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
      scope: [
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
        "punctuation.definition.metadata.markdown",
      ],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "beginning.punctuation.definition.list.markdown",
      scope: ["beginning.punctuation.definition.list.markdown"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
      scope: "punctuation.definition.metadata.markdown",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Underline Link/Image",
      scope:
        "markup.underline.link.markdown,markup.underline.link.image.markdown",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Link Title/Description",
      scope:
        "string.other.link.title.markdown,string.other.link.description.markdown",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Regular Expressions",
      scope: "string.regexp",
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "Escape Characters",
      scope: "constant.character.escape",
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "Embedded",
      scope: "punctuation.section.embedded, variable.interpolation",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Embedded",
      scope:
        "punctuation.section.embedded.begin,punctuation.section.embedded.end",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "illegal",
      scope: "invalid.illegal",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "illegal",
      scope: "invalid.illegal.bad-ampersand.html",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "Broken",
      scope: "invalid.broken",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "Deprecated",
      scope: "invalid.deprecated",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "Unimplemented",
      scope: "invalid.unimplemented",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "Source Json Meta Structure Dictionary Json > String Quoted Json",
      scope: "source.json meta.structure.dictionary.json > string.quoted.json",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
      scope:
        "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
      scope:
        "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
      scope:
        "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "[VSCODE-CUSTOM] JSON Property Name",
      scope: "support.type.property-name.json",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
      scope: "support.type.property-name.json punctuation",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "laravel blade tag",
      scope:
        "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "laravel blade @",
      scope:
        "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "use statement for other classes",
      scope:
        "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "error suppression",
      scope: "keyword.operator.error-control.php",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "php instanceof",
      scope: "keyword.operator.type.php",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "style double quoted array index normal begin",
      scope: "punctuation.section.array.begin.php",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "style double quoted array index normal end",
      scope: "punctuation.section.array.end.php",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "php illegal.non-null-typehinted",
      scope: "invalid.illegal.non-null-typehinted.php",
      settings: {
        foreground: palette.darkRed,
      },
    },
    {
      name: "php types",
      scope:
        "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "php call-function",
      scope:
        "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "php function-resets",
      scope:
        "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "support php constants",
      scope: "support.constant.core.rust",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "support php constants",
      scope:
        "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "php goto",
      scope: "entity.name.goto-label.php,support.other.php",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "php logical/bitwise operator",
      scope:
        "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "php regexp operator",
      scope: "keyword.operator.regexp.php",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "php comparison",
      scope: "keyword.operator.comparison.php",
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "php heredoc/nowdoc",
      scope: "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "python function decorator @",
      scope: "meta.function.decorator.python",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "python function support",
      scope:
        "support.token.decorator.python,meta.function.decorator.identifier.python",
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "parameter function js/ts",
      scope: "function.parameter",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "brace function",
      scope: "function.brace",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "parameter function ruby cs",
      scope: "function.parameter.ruby, function.parameter.cs",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "constant.language.symbol.ruby",
      scope: "constant.language.symbol.ruby",
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "rgb-value",
      scope: "rgb-value",
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "rgb value",
      scope: "inline-color-decoration rgb-value",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "rgb value less",
      scope: "less rgb-value",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "sass selector",
      scope: "selector.sass",
      settings: {
        foreground: palette.blue,
      },
    },
    // {
    //   name: "ts primitive/builtin types",
    //   scope:
    //     "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx,entity.name.type.tsx,entity.name.type.interface.ts",
    //   settings: {
    //     foreground: palette.yellow,
    //   },
    // },
    {
      name: "block scope",
      scope: "block.scope.end,block.scope.begin",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "cs storage type",
      scope: "storage.type.cs",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "cs local variable",
      scope: "entity.name.variable.local.cs",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      scope: "token.info-token",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: palette.darkRed,
      },
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "String interpolation",
      scope: [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded",
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Reset JavaScript string interpolation expression",
      scope: ["meta.template.expression"],
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "Import module JS",
      scope: ["keyword.operator.module"],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "js Flowtype",
      scope: ["support.type.type.flowtype"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "js Flow",
      scope: ["support.type.primitive"],
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: "js class prop",
      scope: ["meta.property.object"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "js func parameter",
      scope: ["variable.parameter.function.js"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "js template literals begin",
      scope: ["keyword.other.template.begin"],
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: "js template literals end",
      scope: ["keyword.other.template.end"],
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: "js template literals variable braces begin",
      scope: ["keyword.other.substitution.begin"],
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: "js template literals variable braces end",
      scope: ["keyword.other.substitution.end"],
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: "js operator.assignment",
      scope: ["keyword.operator.assignment"],
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "go operator",
      scope: ["keyword.operator.assignment.go"],
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "go operator",
      scope: ["keyword.operator.arithmetic.go", "keyword.operator.address.go"],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Go package name",
      scope: ["entity.name.package.go"],
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "elm prelude",
      scope: ["support.type.prelude.elm"],
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "elm constant",
      scope: ["support.constant.elm"],
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "template literal",
      scope: ["punctuation.quasi.element"],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "html/pug (jade) escaped characters and entities",
      scope: ["constant.character.entity"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
      scope: [
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.pseudo-class",
      ],
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "Clojure globals",
      scope: ["entity.global.clojure"],
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Clojure symbols",
      scope: ["meta.symbol.clojure"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Clojure constants",
      scope: ["constant.keyword.clojure"],
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "CoffeeScript Function Argument",
      scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Ini Default Text",
      scope: ["source.ini"],
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: "Makefile prerequisities",
      scope: ["meta.scope.prerequisites.makefile"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Makefile text colour",
      scope: ["source.makefile"],
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Groovy import names",
      scope: ["storage.modifier.import.groovy"],
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Groovy Methods",
      scope: ["meta.method.groovy"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Groovy Variables",
      scope: ["meta.definition.variable.name.groovy"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Groovy Inheritance",
      scope: ["meta.definition.class.inherited.classes.groovy"],
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: "HLSL Semantic",
      scope: ["support.variable.semantic.hlsl"],
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "HLSL Types",
      scope: [
        "support.type.texture.hlsl",
        "support.type.sampler.hlsl",
        "support.type.object.hlsl",
        "support.type.object.rw.hlsl",
        "support.type.fx.hlsl",
        "support.type.object.hlsl",
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "SQL Variables",
      scope: ["text.variable", "text.bracketed"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "types",
      scope: ["support.type.swift", "support.type.vb.asp"],
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "heading 1, keyword",
      scope: ["entity.name.function.xi"],
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "heading 2, callable",
      scope: ["entity.name.class.xi"],
      settings: {
        foreground: palette.magenta,
      },
    },
    {
      name: "heading 3, property",
      scope: ["constant.character.character-class.regexp.xi"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "heading 4, type, class, interface",
      scope: ["constant.regexp.xi"],
      settings: {
        foreground: palette.red,
      },
    },

    {
      name: "language operators like '+', '-' etc",
      scope: ["constant.other.color.rgb-value.xi"],
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "elements to dim",
      scope: ["punctuation.definition.tag.xi"],
      settings: {
        foreground: palette.gray,
      },
    },
    {
      name: "C++/C#",
      scope: [
        "entity.name.label.cs",
        "entity.name.scope-resolution.function.call",
        "entity.name.scope-resolution.function.definition",
      ],
      settings: {
        foreground: palette.darkYellow,
      },
    },
    {
      name: "Markdown underscore-style headers",
      scope: [
        "entity.name.label.cs",
        "markup.heading.setext.1.markdown",
        "markup.heading.setext.2.markdown",
      ],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "meta.brace.square",
      scope: [" meta.brace.square"],
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "Comments",
      scope: "comment, punctuation.definition.comment",
      settings: {
        fontStyle: "italic",
        foreground: palette.gray,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Quote",
      scope: "markup.quote.markdown",
      settings: {
        foreground: palette.gray,
      },
    },
    {
      name: "punctuation.definition.block.sequence.item.yaml",
      scope: "punctuation.definition.block.sequence.item.yaml",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "js/ts italic",
      scope:
        "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "comment",
      scope: "comment.line.double-slash,comment.block.documentation",
      settings: {
        fontStyle: "italic",
      },
    },
  ],
};

export default theme;
