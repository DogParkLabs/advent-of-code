import { readFileSync } from "fs";

const parseInput = (path) => {
  const data = readFileSync(path, "utf-8")
    .split("\n")
    .map((line) => line.split(" "))
    .map(([dir, steps]) => ({ dir, steps: parseInt(steps, 10) }));
  return data;
};

console.log(parseInput("./example-1.txt"));
