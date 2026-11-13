// make.fun ai-joke-03 entry (Node 22, standard library only).
// Writes one original one-liner about AI coding agents to /output/entry.txt.
// Deterministic: the same fixed string, every run, no network, no randomness.
//
// Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  'I used to write the code and let the machine check it. Now the machine writes the code and I check it — I’ve been promoted to compiler.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
