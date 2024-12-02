console.log("Hi");

let tab = 5;
let num = 0;
console.log("Tabuada com for:");
for (let num = 0; num <= 10; num++){
    console.log(`${tab} x ${num} = ${tab * num}`);
}
console.log("");
console.log("Tabuada com While:");

while(num <= 10){
	console.log(`${tab} x ${num} = ${tab * num}`);
	num++
}

console.log("");
console.log("Tabuada com Do... While:");

num = 0;
do{
	console.log(`${tab} x ${num} = ${tab * num}`);
	num++;
}while(num <= 10);