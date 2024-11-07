function sayHello(person){
    console.log(`Hi, ${person}`);
}

sayHello(`Aufa`);

//Soal Pertama-Define Pratice
function printHeart() {
console.log("<3");
  }
  printHeart();

//Soal Kedua - Return Value Practice
 function multiply(a, b) {
   return a * b;
}
console.log(multiply(2, 3)); 
console.log(multiply(9, 9)); 
console.log(multiply(5, 4)); 


//Soal Ketiga - Scope Practice
//A. What is printed to the console when this code runs?
let animal = "Giant Pacific Octopus";
function observe() {
    let animal = "Pajama Squid";
   console.log(animal);
}

observe();

// B. What is printed to the console when this code runs?
let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
 let deadlyAnimal = "Scorpionfish";
 console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal);



//Soal Keempat - Arrow Function Exercise
const sayHello = (name) => `Hello ${name}!`;

console.log(sayHello("Hagrid"));
console.log(sayHello("Luna"));
console.log(sayHello("Aufa"));


