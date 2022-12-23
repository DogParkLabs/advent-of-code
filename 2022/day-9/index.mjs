import { readFileSync } from "fs";

const parseInput = (path) => {
  const data = readFileSync(path, "utf-8")
    .split("\n")
    .map((line) => line.split(" "))
    .map(([dir, steps]) => ({ dir, steps: parseInt(steps, 10) }));
  return data;
};

const tailsVisitedCordinates = [];
const startingPoint = { x: 0, y: 0 };
const currentTailPoint = { x: 0, y: 0 };
const currentHeadPoint = { x: 0, y: 0 };

const input = parseInput("./example-1.txt");

for (let { dir, steps } of input) {
  console.log({ dir, steps });
}

// console.log(input);
