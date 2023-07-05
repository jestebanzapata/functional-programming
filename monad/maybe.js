// Maybe monad implementation
class Maybe {
  constructor(value) {
    this.value = value;
  }

  static of(value) {
    return new Maybe(value);
  }

  map(fn) {
    return this.value ? Maybe.of(fn(this.value)) : Maybe.of(null);
  }

  flatMap(fn) {
    return this.value ? fn(this.value) : Maybe.of(null);
  }
}

const add = x => y => x + y;

const double = (value) => value*2;

const result1 = Maybe.of(2).map(add(4)).flatMap(double);

const result2 = Maybe.of(null).map(add(4)).flatMap(double);

console.log("result -> ", result1, result2);

// https://kkalamarski.me/how-to-write-a-more-declarative-typescript-code-maybe-monad-implementation