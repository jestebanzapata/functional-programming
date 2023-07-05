const studentScore = [10, 9, 8, 8, 7, 9.5, 3];

const add = x => y => x + y;
const avg = (total, length) => divide(total, length);
const divide = (a, b) => a/b;
const acum = (array) => array.reduce((acc, current) => acc +current, 0);


const average = avg(acum(studentScore), studentScore.length);

console.log("Divide -> ", divide(5,5));
console.log("Acum -> ", acum(studentScore));
console.log("Average -> ", average);