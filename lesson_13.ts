// работает если присвоить тип any, переменной obj
// подругому выбрасывает ошибку

let obj= {a: 1, b: 2, c: 3}; 
let res1 = 0;

for (let key in obj) {
	let elem = obj[key];
	res1 += elem;
}

console.log(res1);