import type {
  Prefab,
  ConfigRow,
  ConfigValue,
  Provided,
  ConditionalValue,
} from "@prefab-cloud/prefab-cloud-node";

export type Logger = (category: any, message: unknown) => void;

export type PrefabConfig = Exclude<
  ReturnType<typeof Prefab.prototype.raw>,
  undefined
>;

export type GetValue = Exclude<
  ReturnType<typeof Prefab.prototype.get>,
  undefined
>;

export const ConfigType = {
  CONFIG: 1,
  FEATURE_FLAG: 2,
};

export type ConfigTypeValue = (typeof ConfigType)[keyof typeof ConfigType];

export { ConfigRow, ConfigValue, Provided, ConditionalValue };
