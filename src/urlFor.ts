import type { Prefab } from "@prefab-cloud/prefab-cloud-node";
import { ConfigType, type PrefabConfig } from "./types.js";

const CONFIG_TYPES = [ConfigType.CONFIG, "CONFIG"];
const FF_CONFIG_TYPES = [ConfigType.FEATURE_FLAG, "FEATURE_FLAG"];

export const urlFor = (
  prefab: Prefab,
  apiUrl: string | undefined,
  keyOrConfig: string | PrefabConfig | undefined
) => {
  if (!keyOrConfig) {
    return;
  }

  const config =
    typeof keyOrConfig === "string" ? prefab.raw(keyOrConfig) : keyOrConfig;

  if (!config) {
    return;
  }

  const key = config.key;
  const projectId = config.projectId;

  const urlBase = apiUrl
    ? apiUrl.replace(/api\./, "app.").replace(/\/$/, "")
    : "https://app.prefab.cloud";

  if (FF_CONFIG_TYPES.includes(config.configType)) {
    return `${urlBase}/account/projects/${projectId}/flags/${key}`;
  }

  if (CONFIG_TYPES.includes(config.configType)) {
    return `${urlBase}/account/projects/${projectId}/configs/${key}`;
  }
};
