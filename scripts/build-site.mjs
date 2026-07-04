import { cpSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = join(repoRoot, "dist");
const entries = [
  "index.html",
  "styles.css",
  "script.js",
  "assets",
  "_headers",
];

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

for (const entry of entries) {
  cpSync(join(repoRoot, entry), join(outputDir, entry), { recursive: true });
}

console.log("Static site copied to dist/");
