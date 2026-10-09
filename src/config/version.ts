/**
 * WEBSITE UPDATE INFORMATION
 * 
 * Update these two values whenever you make changes for your college
 * DevOps CI/CD demonstration (e.g., updating to v1.1 or v2.0).
 */
export interface WebsiteVersionConfig {
  currentVersion: string;
  latestUpdate: string;
}

export const WEBSITE_VERSION_INFO: WebsiteVersionConfig = {
  // Current Website Version: initially v1.0
  currentVersion: 'v1.0',

  // Latest Update: initially Initial website release
  latestUpdate: 'Initial website release',
};
