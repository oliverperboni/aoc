const file = Bun.file("./input.txt");

const content = await file.text();

const regex = /mul\((\d+),(\d+)\)/g;
let sumPart1 = 0
const match = Array.from(content.matchAll(regex));
match.forEach((pair)=> {
    sumPart1 += Number(pair[1]) * Number(pair[2])
});

console.log("awnser for the first part is:",sumPart1)