// Say What Actually Broke — one brutally honest error line, written to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const line =
  "We deleted your file. Not a glitch — our database dropped the table during a deploy, and the backup was just a screenshot of it.";

mkdirSync(dirname("/output/entry.txt"), { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
