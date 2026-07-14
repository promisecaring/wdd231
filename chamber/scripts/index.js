// scripts/index.js
// ===============
// This file controls ONLY the homepage (index.html)

// Import modules
import { initMenu } from "./nav.js";
import { loadAttractionPreview } from "./preview-attraction.js";
import { updateFooterInfo } from "./utils.js";

// Initialize mobile menu
initMenu();

// Fill footer year + last modified
updateFooterInfo();

// Load 3–6 attractions for homepage preview
loadAttractionPreview();