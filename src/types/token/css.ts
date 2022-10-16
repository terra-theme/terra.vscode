import { TokenMap, TokenSettings } from ".";

interface CssTokenMap extends TokenMap {
    "keyword.operator.css": TokenSettings;
    "entity.other.attribute-name.class.css": TokenSettings;
    "punctuation.definition.entity.css": TokenSettings;
    "support.constant.property-value.css": TokenSettings;
    "support.type.property-name.css": TokenSettings;
    "support.type.vendored.property-name.css": TokenSettings;
}

export default CssTokenMap;
