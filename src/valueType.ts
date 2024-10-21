import type {Config, ConfigValueType} from './types.js'

export const valueTypeStringForConfig = (config: Config) => {
  const valueType: string | undefined = valueTypeString(config.valueType)

  if (valueType === undefined) {
    if (config.allowableValues && config.allowableValues.length > 0) {
      return Object.keys(config.allowableValues[0])[0]
    }
  }

  return valueType
}

export const valueTypeString = (valueType: ConfigValueType) => {
  switch (valueType) {
    case 1:
      return 'int'
    case 2:
      return 'string'
    case 3:
      return 'bytes'
    case 4:
      return 'double'
    case 5:
      return 'bool'
    case 7:
      return 'limitDefinition'
    case 9:
      return 'logLevel'
    case 10:
      return 'stringList'
    case 11:
      return 'intRange'
    case 13:
      return 'json'
    default:
      return undefined
  }
}
