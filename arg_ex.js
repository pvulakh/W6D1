function sum1() {
    let result = 0;
    let args = Array.from(arguments);
    args.forEach(el => result += el);

    return result;
}

function sum2(...args) {
    let sum = 0;
    args.forEach(el => sum += el);
    return sum;
}

Function.prototype.myBind = function(ctx, ...args) {
    //let args = Array.from(arguments); //version 1
    const that = this; //version 2

    //return (...callArgs) => { //versions 1, 3, 4
    return function(...callArgs) { //version 2:
        //version 1:return this.apply(args[0], args.slice(1).concat(callArgs)); //version 1
        //return this.apply(ctx, args.concat(callArgs)); //version 3
        //return this.call(ctx, ...args.concat(callArgs)); //version 4
        return that.call(ctx, ...args.concat(callArgs)); //version 2
    };
};


// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     says(sound, person) {
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

function curriedSum (numArgs) {
    let numbers = [];
    return function _curriedSum (num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            return numbers.reduce((acc, el) => acc + el);
        } else {
            return _curriedSum;
        }
    };
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
    let args = [];
    const that = this;

    return function _curry(arg) {
        args.push(arg);
        if (numArgs === args.length) {
            //return that.apply(null, args);
            return that(...args);
        } else {
            return _curry;
        }
    };
};

const summ = function(num1, num2, num3) {
    return num1 + num2 + num3;
};

const summFour = summ.curry(3);
console.log(summFour(1)(2)(3));