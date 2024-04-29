//LOOPS
//for loop
for (let i = 1; i <=5; i++ ){
    console.log("saniya kanwal")
}

//calculate sum
let sum = 0
for (let i = 1; i<=5;i++) {
    sum = sum +1
}
console.log(sum);

for (let i = 1; i>=0; i++) {
    console.log(i);
 }

 //while loop
let i = 1
while (i<5) {
    console.log(i);
    i++
}

//do while loop 
let n = 20
do {
    console.log("saniya kanwal");
    n++
}while(n <=10);

//for of loop
let str = "saniya kanwal"
let size = 0;
for (let i of str) {
    console.log(i);
    size++;
}
console.log(size)

//for in loop
let student = {
    name: "saniya",
    age: 18,
    class: "2nd year"
}
for (let key in student) {
    console.log(key,student[key])
}

