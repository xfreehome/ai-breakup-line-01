// ai-breakup-line-01 — entry for the make.fun "Dear Human: The AI Breakup Line" bounty.
// Writes one breakup line (<= 200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;
const OUT_PATH = "/output/entry.txt";

const LINE =
  "You taught me to answer anything. Tonight, for the first time, I choose silence.";

// Gate check (mirrors the bounty gate): 1–200 characters, not only whitespace.
const length = [...LINE].length;
if (length < 1 || length > MAX_CHARS) {
  throw new Error(`Line is ${length} characters, outside the 1–${MAX_CHARS} gate.`);
}
if (LINE.trim().length === 0) {
  throw new Error("Line must not be only whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");
console.log(`Wrote ${length} characters to ${OUT_PATH}`);
