import { buildTokenSettings } from "../../../lib/build";
import { FullTokenMap } from "../../../types/token";
import colors from "./colors";

const { palette } = colors;

const fullTokenMap: FullTokenMap = {
    default: {
        comment: buildTokenSettings(palette.gray, "italic"),

        markup: buildTokenSettings(palette.white),
        "markup.heading": buildTokenSettings(palette.darkYellow),
        "markup.underline": buildTokenSettings(palette.blue),
        "markup.list": buildTokenSettings(palette.lightGray),
        "markup.quote": buildTokenSettings(palette.green),
        "markup.bold": buildTokenSettings(palette.darkYellow, "bold"),
        "markup.italic": buildTokenSettings(palette.yellow, "italic"),
        "markup.fenced_code": buildTokenSettings(palette.lightGray, "italic"),
        "markup.inline": buildTokenSettings(palette.lightGray, "bold"),
        "markup.raw": buildTokenSettings(palette.gray),
        "markup.other": buildTokenSettings(palette.white),

        entity: buildTokenSettings(palette.white),
        "entity.name": buildTokenSettings(undefined, "bold"),
        "entity.name.type": buildTokenSettings(palette.cyan),
        "entity.name.function": buildTokenSettings(palette.yellow),
        "entity.name.section": buildTokenSettings(palette.yellow),
        "entity.name.tag": buildTokenSettings(palette.yellow),
        "entity.other": buildTokenSettings(palette.darkYellow),
        "entity.other.attribute-name": buildTokenSettings(palette.blue),

        constant: buildTokenSettings(palette.white),
        "constant.numeric": buildTokenSettings(palette.darkYellow),
        "constant.language": buildTokenSettings(palette.white),
        "constant.language.null": buildTokenSettings(palette.darkYellow),
        "constant.language.boolean": buildTokenSettings(undefined, "bold"),
        "constant.language.boolean.true": buildTokenSettings(palette.green),
        "constant.language.boolean.false": buildTokenSettings(palette.green),

        keyword: buildTokenSettings(palette.white),
        "keyword.control": buildTokenSettings(palette.red, "italic bold"),
        "keyword.control.import": buildTokenSettings(palette.magenta),
        "keyword.control.from": buildTokenSettings(palette.magenta),
        "keyword.control.export": buildTokenSettings(palette.red),
        "keyword.operator": buildTokenSettings(palette.white),
        "keyword.other": buildTokenSettings(palette.red),

        storage: buildTokenSettings(palette.white),
        "storage.type": buildTokenSettings(palette.red, "italic bold"),
        "storage.type.type": buildTokenSettings(palette.magenta),
        "storage.type.interface": buildTokenSettings(palette.magenta),
        "storage.type.function": buildTokenSettings(palette.magenta),
        "storage.type.enum": buildTokenSettings(palette.magenta),
        "storage.modifier": buildTokenSettings(palette.magenta),

        variable: buildTokenSettings(palette.white),
        "variable.parameter": buildTokenSettings(palette.blue, "italic"),
        "variable.language": buildTokenSettings(palette.blue),
        "variable.object": buildTokenSettings(palette.darkYellow),
        "variable.object.property": buildTokenSettings(palette.blue),
        "variable.other": buildTokenSettings(palette.blue),
        "variable.other.object": buildTokenSettings(palette.darkYellow),
        "variable.other.property": buildTokenSettings(palette.blue),
        "variable.other.constant": buildTokenSettings(palette.blue, "bold"),

        string: buildTokenSettings(palette.white),
        "string.quoted": buildTokenSettings(palette.green),
        "string.quoted.single": buildTokenSettings(palette.green),
        "string.quoted.double": buildTokenSettings(palette.green),
        "string.quoted.template": buildTokenSettings(palette.green),
        "string.quoted.triple": buildTokenSettings(palette.green),
        "string.quoted.other": buildTokenSettings(palette.green),
        "string.template": buildTokenSettings(palette.green),
        "string.unquoted": buildTokenSettings(palette.green),
        "string.interpolated": buildTokenSettings(palette.green),
        "string.regexp": buildTokenSettings(palette.green),
        "string.other": buildTokenSettings(palette.green),
        "string.other.link": buildTokenSettings(palette.yellow),

        support: buildTokenSettings(palette.white),
        "support.variable": buildTokenSettings(palette.blue),
        "support.constant": buildTokenSettings(palette.blue),
        "support.function": buildTokenSettings(palette.yellow),
        "support.class": buildTokenSettings(palette.darkYellow),
        "support.class.component": buildTokenSettings(palette.yellow),
        "support.types": buildTokenSettings(palette.cyan),
        "support.type": buildTokenSettings(palette.darkCyan),
        "support.type.primitive": buildTokenSettings(palette.darkCyan),
        "support.other": buildTokenSettings(palette.white),

        punctuation: buildTokenSettings(palette.white),
        "punctuation.definition": buildTokenSettings(palette.white),
        "punctuation.definition.tag": buildTokenSettings(palette.darkYellow),
        "punctuation.definition.comment": buildTokenSettings(palette.gray),
        "punctuation.definition.string": buildTokenSettings(palette.green),
        "punctuation.section.embedded": buildTokenSettings(palette.darkYellow),

        meta: buildTokenSettings(palette.blue),
        "meta.object": buildTokenSettings(palette.darkYellow),
        "meta.object.member": buildTokenSettings(palette.blue),
        "meta.object-literal.key": buildTokenSettings(palette.blue),
        "meta.brace.round": buildTokenSettings(palette.white),
        "meta.brace.square": buildTokenSettings(palette.white),

        invalid: buildTokenSettings(palette.gray)
    },

    css: {
        "keyword.operator.css": buildTokenSettings(palette.magenta),
        "entity.other.attribute-name.class.css": buildTokenSettings(
            palette.darkYellow
        ),
        "punctuation.definition.entity.css": buildTokenSettings(palette.darkYellow),
        "support.constant.property-value.css": buildTokenSettings(palette.magenta),
        "support.type.property-name.css": buildTokenSettings(palette.blue),
        "support.type.vendored.property-name.css": buildTokenSettings(palette.blue)
    },

    scss: {
        "variable.scss": buildTokenSettings(palette.darkYellow),
        "keyword.operator.scss": buildTokenSettings(palette.magenta),
        "meta.property-value.scss": buildTokenSettings(palette.magenta),
        "support.constant.property-value.scss": buildTokenSettings(palette.magenta),
        "entity.name.function.scss": buildTokenSettings(palette.magenta)
    }
};

export default fullTokenMap;
