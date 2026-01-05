export type ProjectEnvId = {
  projectId: string;
  id: string;
};

// Old format: ...-P{projectId}-E{envId}-(SDK|BACKEND)-...
const OLD_FORMAT = /-P(\d+)-E(\d+)-(SDK|BACKEND)-/i;

// New format: {projectId}-{envName}-{envUUID}-(sdk|backend)-{uuid}
// Example: 1378-Development-69151316-e520-4116-9c71-802d77c3f7eb-backend-9354f0f2-2bf7-432d-8f47-bc3ccad56ee0
const UUID_PATTERN = "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}";
const NEW_FORMAT = new RegExp(
  `^(\\d+)-([A-Za-z][A-Za-z0-9]*)-(${UUID_PATTERN})-(sdk|backend)-`,
  "i",
);

export const getProjectEnvFromApiKey = (
  apiKey: string | undefined,
): ProjectEnvId => {
  if (!apiKey) {
    throw new Error("No API key set. Please update your configuration.");
  }

  // Try old format: -P{projectId}-E{envId}-(SDK|BACKEND)-
  const oldFormatParts = OLD_FORMAT.exec(apiKey);
  if (oldFormatParts) {
    const projectId = oldFormatParts[1];
    const projectEnvId = oldFormatParts[2];
    if (projectId && projectEnvId) {
      return { projectId, id: projectEnvId };
    }
  }

  // Try new format: {projectId}-{envName}-{envUUID}-(sdk|backend)-
  const newFormatParts = NEW_FORMAT.exec(apiKey);
  if (newFormatParts) {
    const projectId = newFormatParts[1];
    const projectEnvId = newFormatParts[3];
    if (projectId && projectEnvId) {
      return { projectId, id: projectEnvId };
    }
  }

  throw new Error("Invalid API key");
};
