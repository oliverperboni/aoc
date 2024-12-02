const file = Bun.file("./input.txt");

const content = await file.text();

let numberOfSafes = 0;
const isSafe = (array: string[]): boolean => {
  let isIncreasing = null;

  for (let i = 1; i < array.length; i++) {
    const a = Number(array[i]);
    const b = Number(array[i - 1]);
    const diff = a - b;

    if (Math.abs(diff) > 3 || diff === 0) {
      return false;
    }

    if (isIncreasing === null) {
      isIncreasing = a > b;
    }

    if ((isIncreasing && a < b) || (!isIncreasing && a > b)) {
      return false;
    }
  }

  return true;
};
const isSafeWithTolerance = (array: string[]): boolean => {
    for (let i = 0; i < array.length; i++) {
        const modifiedArray = [...array.slice(0, i), ...array.slice(i + 1)];
        if (isSafe(modifiedArray)) {
          return true; 
        }
      }
      return false
};

content.split("\n").forEach((line) => {
  const newLine = line.trim().split(" ");
  if (isSafeWithTolerance(newLine)) numberOfSafes += 1;
});
console.log(numberOfSafes);
