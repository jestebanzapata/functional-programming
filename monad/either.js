export class Either {

    constructor(value){
        this.value = value;
    }

    static right (value) {
        return new Either({isLeft: false, data: value})
    }

    static left (error) {
        return new Either({ isLeft: true, error })
    }

    map(fn) {
        return this.value.isLeft ? this : Either.right(fn(this.value.data));
    }

    flatMap(fn) {
        return this.value.isLeft ? this : fn(this.value.data);
    }

    getOrElse(defaultValue) {
        return this.value.data ?  this.value.data : defaultValue;
    }

}

const add = x => y => Either.right(x + y);

const divide = a => b => {
    try {
        if(a === 0){
            throw new Error("Division by zero");
        }
        return Either.right(b/a);
    } catch (error) {
        return Either.left(error);
    }
}

const firstMonad = Either.right(6).flatMap(divide(0)).flatMap(add(20));
const secondMonad = Either.right(6).flatMap(divide(2)).flatMap(add(20));

console.log("First monad result => ", firstMonad.value.error);
console.log("First monad result with default value => ", firstMonad.getOrElse(0));
console.log("Second monad result => ", secondMonad.getOrElse(0));