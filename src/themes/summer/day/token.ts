import { TokenMap } from "../../../typings/token";
import { TokenScope } from "../../../typings/scopes";
import { DefaultTokenScope } from "../../../typings/scopes/default";
import { CssTokenScope } from "../../../typings/scopes/css";
import { ScssTokenScope } from "../../../typings/scopes/scss";
import { ShellTokenScope } from "../../../typings/scopes/shell";

import { palette } from "./colors";

export const defaultTokenMap: TokenMap<DefaultTokenScope> = {
    comment: { foreground: palette.gray, fontStyle: "italic" },

    markup: { foreground: palette.black },
    "markup.heading": { foreground: palette.darkYellow },
    "markup.underline": { foreground: palette.blue },
    "markup.list": { foreground: palette.lightGray },
    "markup.quote": { foreground: palette.green },
    "markup.bold": { foreground: palette.darkYellow, fontStyle: "bold" },
    "markup.italic": { foreground: palette.yellow, fontStyle: "italic" },
    "markup.fenced_code": { foreground: palette.lightGray, fontStyle: "italic" },
    "markup.inline": { foreground: palette.lightGray, fontStyle: "bold" },
    "markup.raw": { foreground: palette.gray },
    "markup.other": { foreground: palette.white },

    entity: { foreground: palette.black },
    "entity.name": { foreground: palette.yellow, fontStyle: "bold" },
    "entity.name.type": { foreground: palette.cyan },
    "entity.name.function": { foreground: palette.yellow },
    "entity.name.section": { foreground: palette.yellow },
    "entity.name.tag": { foreground: palette.yellow },
    "entity.other": { foreground: palette.darkYellow },
    "entity.other.attribute-name": { foreground: palette.blue },

    constant: { foreground: palette.black },
    "constant.numeric": { foreground: palette.darkYellow },
    "constant.language": { foreground: palette.gray },
    "constant.language.null": { foreground: palette.darkYellow },
    "constant.language.boolean": { foreground: palette.blue, fontStyle: "bold" },
    "constant.language.boolean.true": {
        foreground: palette.green,
        fontStyle: "bold"
    },
    "constant.language.boolean.false": {
        foreground: palette.red,
        fontStyle: "bold"
    },
    "constant.other": { foreground: palette.darkYellow },

    keyword: { foreground: palette.magenta },
    "keyword.control": { foreground: palette.red, fontStyle: "bold" },
    "keyword.control.import": { foreground: palette.magenta },
    "keyword.control.from": { foreground: palette.magenta },
    "keyword.control.export": { foreground: palette.red },
    "keyword.operator": { foreground: palette.magenta },
    "keyword.type": { foreground: palette.magenta },
    "keyword.var": { foreground: palette.magenta },
    "keyword.function": { foreground: palette.magenta },
    "keyword.other": { foreground: palette.red },

    storage: { foreground: palette.black },
    "storage.type": { foreground: palette.red, fontStyle: "italic bold" },
    "storage.type.type": { foreground: palette.magenta },
    "storage.type.interface": { foreground: palette.magenta },
    "storage.type.function": { foreground: palette.magenta },
    "storage.type.enum": { foreground: palette.magenta },
    "storage.modifier": { foreground: palette.magenta },

    variable: { foreground: palette.black },
    "variable.parameter": { foreground: palette.blue, fontStyle: "italic" },
    "variable.language": { foreground: palette.blue },
    "variable.object": { foreground: palette.darkYellow },
    "variable.object.property": { foreground: palette.blue },
    "variable.other": { foreground: palette.blue },
    "variable.other.object": { foreground: palette.darkYellow },
    "variable.other.property": { foreground: palette.blue },
    "variable.other.constant": { foreground: palette.blue, fontStyle: "bold" },

    string: { foreground: palette.black },
    "string.quoted": { foreground: palette.green },
    "string.quoted.single": { foreground: palette.green },
    "string.quoted.double": { foreground: palette.green },
    "string.quoted.template": { foreground: palette.green },
    "string.quoted.triple": { foreground: palette.green },
    "string.quoted.other": { foreground: palette.green },
    "string.template": { foreground: palette.green },
    "string.unquoted": { foreground: palette.green },
    "string.interpolated": { foreground: palette.green },
    "string.regexp": { foreground: palette.green },
    "string.other": { foreground: palette.green },
    "string.other.link": { foreground: palette.yellow },

    support: { foreground: palette.black },
    "support.variable": { foreground: palette.blue },
    "support.constant": { foreground: palette.blue },
    "support.function": { foreground: palette.yellow },
    "support.class": { foreground: palette.darkYellow },
    "support.class.component": { foreground: palette.yellow },
    "support.types": { foreground: palette.cyan },
    "support.type": { foreground: palette.darkCyan },
    "support.type.primitive": { foreground: palette.darkCyan },
    "support.other": { foreground: palette.gray },

    punctuation: { foreground: palette.gray },
    "punctuation.definition": { foreground: palette.gray },
    "punctuation.definition.tag": { foreground: palette.darkYellow },
    "punctuation.definition.comment": { foreground: palette.gray },
    "punctuation.definition.string": { foreground: palette.green },
    "punctuation.section.embedded": { foreground: palette.darkYellow },

    meta: { foreground: palette.blue },
    "meta.object": { foreground: palette.darkYellow },
    "meta.object.member": { foreground: palette.blue },
    "meta.object-literal.key": { foreground: palette.blue },
    "meta.brace.round": { foreground: palette.gray },
    "meta.brace.square": { foreground: palette.gray },

    source: { foreground: palette.gray },

    invalid: { foreground: palette.gray }
};

export const cssTokenMap: TokenMap<CssTokenScope> = {
    "keyword.operator.css": { foreground: palette.magenta },
    "entity.other.attribute-name.class.css": { foreground: palette.darkYellow },
    "punctuation.definition.entity.css": { foreground: palette.darkYellow },
    "support.constant.property-value.css": { foreground: palette.magenta },
    "support.type.property-name.css": { foreground: palette.blue },
    "support.type.vendored.property-name.css": { foreground: palette.blue }
};

export const scssTokenMap: TokenMap<ScssTokenScope> = {
    "variable.scss": { foreground: palette.darkYellow },
    "keyword.operator.scss": { foreground: palette.magenta },
    "meta.property-value.scss": { foreground: palette.magenta },
    "support.constant.property-value.scss": { foreground: palette.magenta },
    "entity.name.function.scss": { foreground: palette.magenta }
};

export const shellTokenMap: TokenMap<ShellTokenScope> = {
    "source.shell": { foreground: palette.gray }
};

export const fullTokenMap: TokenMap<TokenScope> = {
    ...defaultTokenMap,
    ...cssTokenMap,
    ...scssTokenMap,
    ...shellTokenMap
};
