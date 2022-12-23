import { readFileSync } from "fs";

const parseInput = (path) => {
  const data = readFileSync(path, "utf-8").split("\n");
  return data;
};

console.log(parseInput("./example-1.txt"));
