import type { ConfigValueType } from "./types.js";

export const valueTypeString = (valueType: ConfigValueType) => {
  switch (valueType) {
    case 1:
      return "int";
    case 2:
      return "string";
    case 3:
      return "bytes";
    case 4:
      return "double";
    case 5:
      return "bool";
    case 7:
      return "limitDefinition";
    case 9:
      return "logLevel";
    case 10:
      return "stringList";
    case 11:
      return "intRange";
    default:
      return undefined;
  }
};
