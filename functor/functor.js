class Wrapper {

    constructor(value) {
        this.value = value;
    }

    map = (fn) => {
        return new Wrapper(fn(this.value))
    }

}

const add = (a) => {
    return (b) => {
        return a + b;
    }    
}

const divide = (a) => {
    return (b) => {
        return b / 2;
    }    
}

const result = new Wrapper(5).map(add(25)).map(divide(2));
console.log("Result -> ", result);