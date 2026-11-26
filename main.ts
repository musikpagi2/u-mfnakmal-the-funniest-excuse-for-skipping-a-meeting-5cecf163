// The Funniest Excuse for Skipping a Meeting — make.fun entry.
// Writes one funny excuse line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const setup =
  "Can't make the meeting — I'm already stuck in a meeting about that meeting";
const punchline =
  "my calendar just took out a restraining order against the organizer";

const LINE = `${setup} — ${punchline}.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
