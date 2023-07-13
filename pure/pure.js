

const studentScore = [10, 9, 8, 8, 7, 9.5, 3];

const avg = (total, length) => divide(total, length);

const divide = (a, b) => a/b;

const accum = (array) => array.reduce((acc, current) => acc +current, 0);

const average = avg(accum(studentScore), studentScore.length);

console.log("Divide -> ", divide(5,5));
console.log("Accum -> ", accum(studentScore));
console.log("Average -> ", average);