// Fortune Cookie Wisdom for Developers — make.fun bounty entry.
//
// Writes one original fortune-cookie line for a software developer
// to /output/entry.txt. Fully deterministic: no randomness, no network,
// no input from outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your estimates are not lies; they are prophecies made before the code has spoken.";

// The gate: /output/entry.txt must be UTF-8 text of 1-120 characters,
// not only whitespace. Fail loudly here rather than shipping a bad entry.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-120 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
