// Say What Actually Broke — one brutally honest error line, written to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry line itself: exactly 128 characters, do not reword.
const ENTRY_LINE =
  "We deleted your file. Not a glitch — our database dropped the table during a deploy, and the backup was just a screenshot of it.";

mkdirSync(dirname("/output/entry.txt"), { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_LINE + "\n", "utf8");
console.log(ENTRY_LINE);
