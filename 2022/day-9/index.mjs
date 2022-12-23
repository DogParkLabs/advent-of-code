import { readFileSync } from "fs";

const parseInput = (path) => {
  const data = readFileSync(path, "utf-8")
    .split("\n")
    .map((line) => line.split(" "))
    .map(([dir, steps]) => ({ dir, steps: parseInt(steps, 10) }));
  return data;
};

// .....    .....    .....
// .....    ..H..    ..H..
// ..H.. -> ..... -> ..T..
// .T...    .T...    .....
// .....    .....    .....

// .....    .....    .....
// .....    .....    .....
// ..T.. -> ..T.. -> .....
// ...H.    .....    ...T.
// .....    ...H.    ...H.

const getDifference = ({ head, tail }) => {
  // Positive x -> Tail must move right
  // Zero x -> Tail does not move in the x direction
  // Negative x -> Tail must move left
  // Positive y -> Tail must move up
  // Zero y -> Tail most not move in the y direction
  // Negative y -> Tail must move down

  const difference = {
    x: head.x - tail.x,
    y: head.y - tail.y,
  };
  return difference;
};

const getNextTailPosition = ({ head, tail }) => {
  const { x, y } = getDifference({ head, tail });

  //   0, 0 -> Do nothing
  //   1, 0 -> Do nothing
  //   2, 0 -> Move right 1
  //   0, 1 -> Do nothing
  //   0, 2 -> Move up 1
  //   1, 1 -> Do nothing
  //   2, 1 -> Move right 1 and up 1
  //   1, 2 -> Move right 1 and up 1

  const shouldMoveTail = Math.abs(x) > 1 || Math.abs(y) > 1;

  if (!shouldMoveTail) {
    return tail;
  }

  const newTail = { ...tail };

  if (x > 1) {
    if (y > 0) {
      newTail.y += 1;
    } else if (y < 0) {
      newTail.y -= 1;
    }

    newTail.x += 1;
  } else if (x < -1) {
    if (y > 0) {
      newTail.y += 1;
    } else if (y < 0) {
      newTail.y -= 1;
    }

    newTail.x -= 1;
  }

  if (y > 1) {
    if (x > 0) {
      newTail.x += 1;
    } else if (x < 0) {
      newTail.x -= 1;
    }

    newTail.y += 1;
  } else if (y < -1) {
    if (x > 0) {
      newTail.x += 1;
    } else if (x < 0) {
      newTail.x -= 1;
    }

    newTail.y -= 1;
  }

  return newTail;
};

const head = { x: 0, y: 0 };
const start = { x: 0, y: 0 };
let tail = { x: 0, y: 0 };
const tailsVisitedCordinates = [];

const input = parseInput("./example-1.txt");

for (let { dir, steps } of input) {
  //   console.log({ dir, steps });
  // 1. Determin if we add or subtract to x or y cooridnate
  switch (dir) {
    case "R":
      Array.from({ length: steps }).forEach(() => {
        head.x += 1;
        tail = getNextTailPosition({ head, tail });
        console.log({ head, tail });
      });

      break;
    case "L":
      Array.from({ length: steps }).forEach(() => {
        head.x -= 1;
        tail = getNextTailPosition({ head, tail });
        console.log({ head, tail });
      });
      break;
    case "U":
      Array.from({ length: steps }).forEach(() => {
        head.y += 1;
        tail = getNextTailPosition({ head, tail });
        console.log({ head, tail });
      });
      break;
    case "D":
      Array.from({ length: steps }).forEach(() => {
        head.y -= 1;
        tail = getNextTailPosition({ head, tail });
        console.log({ head, tail });
      });
      break;
    default:
      throw new Error(`Invalid Direction: ${dir}`);
  }
}

console.log(input);

// const tempTail = { x: 3, y: 3 };
// const tempHead = { x: 1, y: 2 };
// const temp = getNextTailPosition({ tail: tempTail, head: tempHead });
// console.log(temp);
