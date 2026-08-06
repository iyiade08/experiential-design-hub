import fs from "fs/promises";
import path from "path";
import JSZip from "jszip";

const root = process.cwd();
const outFile = path.join(root, "public", "codebase.zip");

const exclude = [
  "node_modules",
  ".git",
  "dist",
  "build",
  ".lovable",
  "public/codebase.zip",
  ".env",
  ".env.local",
  "bun.lockb",
  "package-lock.json",
  "yarn.lock",
  "pnpm-lock.yaml",
];

async function walk(dir, zip, base = "") {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    const full = path.join(dir, entry.name);

    if (exclude.some((ex) => rel === ex || rel.startsWith(`${ex}/`))) {
      continue;
    }

    if (entry.isDirectory()) {
      await walk(full, zip, rel);
    } else {
      const data = await fs.readFile(full);
      zip.file(rel, data);
    }
  }
}

async function main() {
  const zip = new JSZip();
  await walk(root, zip);
  await fs.mkdir(path.dirname(outFile), { recursive: true });
  const buffer = await zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    compressionOptions: { level: 6 },
  });
  await fs.writeFile(outFile, buffer);
  console.log(
    `Created ${outFile} (${(buffer.length / 1024 / 1024).toFixed(2)} MB)`,
  );
}

main().catch((err) => {
  console.error("Failed to zip codebase:", err);
  process.exit(1);
});
