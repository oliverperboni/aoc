const file = Bun.file("./input.txt")

const content = await file.text()

const stack1 : number[] =[]
const stack0 : number[] =[]



content.split("\n").forEach((line) => {
    const pair =line.replace("  ","").split(" ")
    stack0.push(Number(pair[0]))
    stack1.push(Number(pair[1]))

})
stack0.sort()
stack1.sort()

const length = stack0.length
let sum = 0;
let sumPart2 = 0;
function countOccurrences(array: number[], element: number): number {
  return array.filter(item => item === element).length;
}
for (let index = 0; index < stack0.length; index++) {
  const element = stack0[index];
  const numberOfOccurencies = countOccurrences(stack1,element)
  sumPart2 = sumPart2 + element*numberOfOccurencies
}

for (let i = 0; i < length; i++) {
    const element0 = stack0.pop()!;
    const element1 = stack1.pop()!;
    element0 > element1  ? sum = sum + element0 - element1 : sum = sum + element1 - element0
    
}
 console.log("the awnser for part-1:",sum)
console.log("the awnser for part-2",sumPart2);


