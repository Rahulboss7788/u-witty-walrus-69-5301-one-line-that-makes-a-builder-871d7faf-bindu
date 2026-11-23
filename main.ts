// One Line That Makes a Builder Fund a Bounty
// make.fun competition: u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf
//
// The program writes a single pitch sentence to /output/entry.txt.
// The sentence leads with the builder's own problem — an idea they can't
// build alone — and frames the bounty as the way out: post the reward and
// the best build takes the prize. It promises nothing beyond how bounties
// work — the sponsor puts up the reward, builders enter, the best entry
// wins.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Why wrestle your idea into code alone when posting a reward lets the best build win the prize?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
