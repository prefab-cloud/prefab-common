import {
  ConditionalValue,
  ConfigRow,
  ConfigType,
  Prefab,
  Provided,
} from "@prefab-cloud/prefab-cloud-node";

import { ConfigValueType, ConfigValue } from "@prefab-cloud/prefab-cloud-node";

export type Logger = (category: any, message: unknown) => void;

export type PrefabConfig = Exclude<
  ReturnType<typeof Prefab.prototype.raw>,
  undefined
>;

export type GetValue = Exclude<
  ReturnType<typeof Prefab.prototype.get>,
  undefined
>;

export {
  ConfigRow,
  ConfigValue,
  Provided,
  ConditionalValue,
  ConfigValueType,
  ConfigType,
};
