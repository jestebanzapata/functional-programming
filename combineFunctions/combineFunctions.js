
const add = a => b => a+b;

const divide = a => b => a/b;

const multiply = a => b => a*b;

const separateStringByCharacter = value => (value.toString()).split("");


// High order function using compose
const combine = initialValue => (...functions) => functions.reduceRight((acc, fn) => fn(acc), initialValue);
const combineFn = combine(2);
const resultCombine = combineFn(add(2), divide(20), multiply(5));
console.log("Combine -> ", resultCombine);



// High order function using pipe
const pipe = initialValue => (...functions) => functions.reduce((acc, fn) => fn(acc), initialValue);
const pipeFn = pipe(2);
const resultPipe = pipeFn(add(2), divide(20), multiply(5), separateStringByCharacter);
console.log("pipe -> ", resultPipe);


