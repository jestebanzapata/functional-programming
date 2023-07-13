class Wrapper {

    constructor(value) {
        this.value = value;
    }

    map = (fn) => {
        return new Wrapper(fn(this.value))
    }

}

const add = x => y => x + y;

const divide = a => b => a/b;

const result = new Wrapper(5).map(add(25)).map(divide(2));
console.log("Result -> ", result);