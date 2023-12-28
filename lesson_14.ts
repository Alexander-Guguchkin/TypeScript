function sum(x: number, y: number): number {
	return x + y;
}
console.log(sum(12,14));

function sum1(arr: number[]):number {
	let res = 0;
	
	for (let num of arr) {
		res += num;
	}
	
	return res;
}
console.log(sum1([1,2,3,4,5,6,7,8,9,10]));
