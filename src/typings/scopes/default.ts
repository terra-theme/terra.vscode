export type DefaultTokenScope =
    /** Comment
     * @description For comments. Intentionally no further subtypes specificed for now.
     * @todo Reference official documantation or complete listing
     * */
    | "comment"

    /** Markup
     * @description This is for markup languages and generally applies to larger subsets of the text.
     * */
    | "markup"
    | "markup.underline"
    | "markup.bold"
    | "markup.heading"
    | "markup.italic"
    | "markup.list"
    | "markup.quote"
    | "markup.raw"
    | "markup.inline"
    | "markup.fenced_code"
    | "markup.other"

    /** Constant
     * @description Various forms of constants.
     * @todo Reference official documantation or complete listing
     * */
    | "constant"
    | "constant.numeric"
    | "constant.language"
    | "constant.language.null"
    | "constant.language.boolean"
    | "constant.language.boolean.true"
    | "constant.language.boolean.false"
    | "constant.other"

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
    | "entity"
    | "entity.name"
    | "entity.name.function"
    | "entity.name.type"
    | "entity.name.tag"
    | "entity.name.section"
    | "entity.other"
    | "entity.other.attribute-name"

    /** Keyword
     * @description This scope is used, when the other scopes do not register.
     * @todo Reference official documantation or complete listing
     * */
    | "keyword"
    | "keyword.control"
    | "keyword.control.import"
    | "keyword.control.export"
    | "keyword.control.from"
    | "keyword.operator"
    | "keyword.type"
    | "keyword.var"
    | "keyword.function"
    | "keyword.other"

    /** Storage
     * Things relating to "storage".
     * @example "storage.type.type" would be the `type` keyword in TypeScript.
     * @todo Reference official documantation or complete listing
     * */
    | "storage"
    | "storage.type"
    | "storage.type.type"
    | "storage.type.function"
    | "storage.type.enum"
    | "storage.type.interface"
    | "storage.modifier"

    /** String
     * @description All sorts of strings.
     * @example  `'foo'`, `"foo"`, `"""Python"""`, `Name: ${name}`, `$'shell'`, `%s{...}`
     * @todo Reference official documantation or complete listing
     * */
    | "string"
    | "string.quoted"
    | "string.quoted.single"
    | "string.quoted.double"
    | "string.quoted.triple"
    | "string.quoted.template"
    | "string.quoted.other"
    | "string.template"
    | "string.unquoted"
    | "string.interpolated"
    | "string.regexp"
    | "string.other"
    | "string.other.link"

    /** Support
     * @description Things provided by a framework or library should be below support.
     * @todo Reference official documantation or complete listing
     * */
    | "support"
    | "support.function"
    | "support.class"
    | "support.class.component"
    | "support.types"
    | "support.constant"
    | "support.variable"
    | "support.type"
    | "support.type.primitive"
    | "support.other"

    /** Variables
     * @description Self-explanatory, but not all languages allow easy identification (and thus markup) of these.
     * @todo Reference official documantation or complete listing
     * */
    | "variable"
    | "variable.parameter"
    | "variable.language"
    | "variable.object"
    | "variable.object.property"
    | "variable.other"
    | "variable.other.object"
    | "variable.other.property"
    | "variable.other.constant"

    /** Punctuation
     * @description These are the are the delimiting symbols to other variables or keywords.
     * @example In `<h1>` the scope `punctuation.definition.tag` would be the little carot brackets.
     * @todo Reference official documantation or complete listing
     * */
    | "punctuation"
    | "punctuation.definition"
    | "punctuation.definition.tag"
    | "punctuation.definition.comment"
    | "punctuation.definition.string"
    | "punctuation.section.embedded"

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
    | "meta"
    | "meta.object"
    | "meta.object.member"
    | "meta.object-literal.key"
    | "meta.brace.round"
    | "meta.brace.square"

    /** Invalid
     * @description Stuff which is “invalid”. Intentionally no further subtypes specificed.
     * */
    | "invalid"

    /** Source
     * @description TODO: Add official documentation found
     * */
    | "source";
