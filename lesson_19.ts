type nudefined = null | undefined;
let test1: nudefined;
test1 = null;
console.log(test1);
test1 = undefined;
console.log(test1);

type nudefinedBool = null | undefined | boolean;
let test2: nudefinedBool;
test2 = null;
console.log(test2);
test2 = undefined;
console.log(test2)
test2 = true;
console.log(test2);