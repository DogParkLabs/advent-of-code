import { readFileSync } from "fs";

const data = readFileSync("./example-1.txt", "utf-8");
console.log(data);
