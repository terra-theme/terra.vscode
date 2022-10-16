import { TokenMap, TokenSettings } from ".";

interface ScssTokenMap extends TokenMap {
    "entity.name.function.scss": TokenSettings;
    "keyword.operator.scss": TokenSettings;
    "meta.property-value.scss": TokenSettings;
    "support.constant.property-value.scss": TokenSettings;
    "variable.scss": TokenSettings;
}

export default ScssTokenMap;
