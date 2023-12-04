import type {
  Prefab,
  ConfigRow,
  ConfigValue,
  Provided,
  ConditionalValue,
} from "@prefab-cloud/prefab-cloud-node";
import { ConfigType, ConfigValueType } from "@prefab-cloud/prefab-cloud-node";

export type Logger = (category: any, message: unknown) => void;

export type Config = Exclude<
  ReturnType<typeof Prefab.prototype.raw>,
  undefined
>;

type NewConfig = Omit<
  Config,
  "id" | "createdAt" | "updatedAt" | "changedBy" | "allowableValues"
>;

type NewFlag = Omit<Config, "id" | "createdAt" | "updatedAt" | "changedBy">;

export type GetValue = Exclude<
  ReturnType<typeof Prefab.prototype.get>,
  undefined
>;

export type ConfigTypeValue = (typeof ConfigType)[keyof typeof ConfigType];

export {
  ConditionalValue,
  ConfigRow,
  ConfigType,
  ConfigValue,
  ConfigValueType,
  NewConfig,
  NewFlag,
  Provided,
};
