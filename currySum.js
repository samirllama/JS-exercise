
///FUNCTION ARGUMENT LENGTH
// const sum = (a,b) => {
//     return [a,b,]
// }

// console.log(sum.length)

const sum = (...args) => args.reduce((arg,item) => arg + item )

// const sum = (...args) => {
//     let sum = 0
//     for( let i = 0; i < args.length; i++ ) {
//       sum += args[i]
//     } 
//     return sum
//   }
  

const infiniteCurry = (fn, seed) => {
    const reduceValue = (args, seedValue) =>
      args.reduce((acc, a) => {
        return fn.call(fn, acc, a);
      }, seedValue);
    const next = (...args) => {
      return (...x) => {
        if (!x.length) {
          return reduceValue(args, seed);
        }
        return next(...args, reduceValue(x, seed));
      };
    };
    return next();
  };
  const iSum = infiniteCurry((x, y) => x + y, 0);
  console.log(iSum(1)(34)(12)(12,12 ,13)())

// const incrementEach = (ar) =>
//   ar.map(num => sum(num))
// const curriedSum = n => m => o => sum(m,n,o)

// console.log(incrementEach(1)(2)(3))
