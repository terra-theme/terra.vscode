import { TokenMap, TokenSettings } from ".";

/**
 * DefaultTokenMap
 *
 * @description
 * These root groups are modeled and named after the TextMate Scopes. These
 * comment descriptions are mainly taken from the documentation, which little
 * modifications.
 *
 * Don't use this for language specific tokens.
 *
 * @see https://macromates.com/manual/en/language_grammars
 */
interface DefaultTokenMap extends TokenMap {
    /** Comment
     * @description For comments. Intentionally no further subtypes specificed for now.
     * @todo Reference official documantation or complete listing
     * */
    comment: TokenSettings;

    /** Markup
     * @description This is for markup languages and generally applies to larger subsets of the text.
     * */
    markup: TokenSettings;
    "markup.underline": TokenSettings;
    "markup.bold": TokenSettings;
    "markup.heading": TokenSettings;
    "markup.italic": TokenSettings;
    "markup.list": TokenSettings;
    "markup.quote": TokenSettings;
    "markup.raw": TokenSettings;
    "markup.inline": TokenSettings;
    "markup.fenced_code": TokenSettings;
    "markup.other": TokenSettings;

    /** Constant
     * @description Various forms of constants.
     * @todo Reference official documantation or complete listing
     * */
    constant: TokenSettings;
    "constant.numeric": TokenSettings;
    "constant.language": TokenSettings;
    "constant.language.null": TokenSettings;
    "constant.language.boolean": TokenSettings;
    "constant.language.boolean.true": TokenSettings;
    "constant.language.boolean.false": TokenSettings;

    /** Entity
     *
     * @description An entity refers to a larger part of the document, for example a
     * `chapter`, `class`, `function`, or `tag`.
     * We do not scope the entire entity as `entity.*` (we use `meta.*` for that).
     * But we do use `entity.*` for the “placeholders” in the larger entity,
     * e.g. if the entity is a chapter, we would use `entity.name.section` for the chapter title.
     *
     * @todo Reference official documantation or complete listing
     **/
    entity: TokenSettings;
    "entity.name": TokenSettings;
    "entity.name.function": TokenSettings;
    "entity.name.type": TokenSettings;
    "entity.name.tag": TokenSettings;
    "entity.name.section": TokenSettings;
    "entity.other": TokenSettings;
    "entity.other.attribute-name": TokenSettings;

    /** Keyword
     * @description This scope is used, when the other scopes do not register.
     * @todo Reference official documantation or complete listing
     * */
    keyword: TokenSettings;
    "keyword.control": TokenSettings;
    "keyword.control.import": TokenSettings;
    "keyword.control.export": TokenSettings;
    "keyword.control.from": TokenSettings;
    "keyword.operator": TokenSettings;
    "keyword.other": TokenSettings;

    /** Storage
     * Things relating to "storage".
     * @example "storage.type.type" would be the `type` keyword in TypeScript.
     * @todo Reference official documantation or complete listing
     * */
    storage: TokenSettings;
    "storage.type": TokenSettings;
    "storage.type.type": TokenSettings;
    "storage.type.function": TokenSettings;
    "storage.type.enum": TokenSettings;
    "storage.type.interface": TokenSettings;
    "storage.modifier": TokenSettings;

    /** String
     * @description All sorts of strings.
     * @example  `'foo'`, `"foo"`, `"""Python"""`, `Name: ${name}`, `$'shell'`, `%s{...}`
     * @todo Reference official documantation or complete listing
     * */
    string: TokenSettings;
    "string.quoted": TokenSettings;
    "string.quoted.single": TokenSettings;
    "string.quoted.double": TokenSettings;
    "string.quoted.triple": TokenSettings;
    "string.quoted.template": TokenSettings;
    "string.quoted.other": TokenSettings;
    "string.template": TokenSettings;
    "string.unquoted": TokenSettings;
    "string.interpolated": TokenSettings;
    "string.regexp": TokenSettings;
    "string.other": TokenSettings;
    "string.other.link": TokenSettings;

    /** Support
     * @description Things provided by a framework or library should be below support.
     * @todo Reference official documantation or complete listing
     * */
    support: TokenSettings;
    "support.function": TokenSettings;
    "support.class": TokenSettings;
    "support.class.component": TokenSettings;
    "support.types": TokenSettings;
    "support.constant": TokenSettings;
    "support.variable": TokenSettings;
    "support.type": TokenSettings;
    "support.type.primitive": TokenSettings;
    "support.other": TokenSettings;

    /** Variables
     * @description Self-explanatory, but not all languages allow easy identification (and thus markup) of these.
     * @todo Reference official documantation or complete listing
     * */
    variable: TokenSettings;
    "variable.parameter": TokenSettings;
    "variable.language": TokenSettings;
    "variable.object": TokenSettings;
    "variable.object.property": TokenSettings;
    "variable.other": TokenSettings;
    "variable.other.object": TokenSettings;
    "variable.other.property": TokenSettings;
    "variable.other.constant": TokenSettings;

    /** Punctuation
     * @description These are the are the delimiting symbols to other variables or keywords.
     * @example In `<h1>` the scope `punctuation.definition.tag` would be the little carot brackets.
     * @todo Reference official documantation or complete listing
     * */
    punctuation: TokenSettings;
    "punctuation.definition": TokenSettings;
    "punctuation.definition.tag": TokenSettings;
    "punctuation.definition.comment": TokenSettings;
    "punctuation.definition.string": TokenSettings;
    "punctuation.section.embedded": TokenSettings;

    /** Invalid
     * @description Stuff which is “invalid”. Intentionally no further subtypes specificed.
     * TODO: Reference official documantation or complete listing
     * */
    invalid: TokenSettings;

    /** Meta
     *
     * @description The `meta` scope is generally used to markup larger parts of the document.
     * For example the entire line which declares a function would be
     * `meta.function` and the subsets would be `storage.type`,
     * `entity.name.function`, `variable.parameter` etc. and only the latter would be styled.
     *
     * Sometimes the meta part of the scope will be used only to
     * limit the more general element that is styled, most of the time meta
     * scopes are however used in scope selectors for activation of bundle
     * items. For example in Objective-C there is a meta scope for the interface
     * declaration of a class and the implementation, allowing the same
     * tab-triggers to expand differently, depending on context. Intentionally
     * no further subtypes specificed.
     *
     * @todo Reference official documantation or complete listing
     * */
    meta: TokenSettings;
    "meta.object": TokenSettings;
    "meta.object.member": TokenSettings;
    "meta.object-literal.key": TokenSettings;
    "meta.brace.round": TokenSettings;
    "meta.brace.square": TokenSettings;
}

export default DefaultTokenMap;
