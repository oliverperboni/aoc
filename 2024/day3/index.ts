const file = Bun.file("./input.txt");

const content = await file.text();

const regex = /mul\((\d+),(\d+)\)/g;
let sumPart1 = 0;
const match = Array.from(content.matchAll(regex));
match.forEach((pair) => {
  sumPart1 += Number(pair[1]) * Number(pair[2]);
});

const regex2 = /(mul\((\d+),(\d+)\))|(do\(\))|(don't\(\))/g;
let sumPart2 = 0;
let enable = true; 
const matchesPart2 = Array.from(content.matchAll(regex2));

matchesPart2.forEach((match) => {
  if (match[4]) { 
    enable = true;
  } else if (match[5]) { 
    enable = false;
  } else if (match[1] && enable) { 
    const a = Number(match[2]);
    const b = Number(match[3]);
    sumPart2 += a * b;
  }
});

console.log("Answer for the first part is:", sumPart1);
console.log("Answer for the second part is:", sumPart2);