import type { Prefab } from "@prefab-cloud/prefab-cloud-node";

export type Logger = (category: any, message: unknown) => void;

export type PrefabConfig = Exclude<
  ReturnType<typeof Prefab.prototype.raw>,
  undefined
>;

export type GetValue = Exclude<
  ReturnType<typeof Prefab.prototype.get>,
  undefined
>;

export type ConfigRow = PrefabConfig["rows"][0];

export type ConditionalValue = ConfigRow["values"][0];

export type ConfigValue = Exclude<ConditionalValue["value"], undefined>;
