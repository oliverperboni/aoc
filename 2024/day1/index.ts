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
let sum1 = 0;
for (let i = 0; i < length; i++) {
    const element0 = stack0.pop()!;
    const element1 = stack1.pop()!;
    element0 > element1  ? sum1 = sum1 + element0 - element1 : sum1 = sum1 + element1 - element0
    
}
console.log("the awnser for part 1 is:",sum1)