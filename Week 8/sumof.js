var number1 = Number(process.argv[2]);
var sum = 0;

for (i = 6;i < number1 ;i+=6) {
	sum += i;
}

console.log(sum);