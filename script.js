// 1
let name = "Іван";
let city = name;
console.log(city);

// 2
let name2 = "Olga";
console.log(`привіт ${"name"}`);
console.log(`привіт ${name2}`);

// 3
let a = "5";
let b = "13cvb";
let c = "12.9sxdcfgv";
console.log(Number(a));
console.log(parseInt(b));
console.log(parseFloat(c));

// 4
console.log(Number((0.1 + 0.2).toFixed(1)));

// 5
console.log(Math.max(20, 10, 50, 40));

// 6
console.log(Math.floor(Math.random()*3)+2);

// 7
const message = "Welcome to Bahamas!";
console.log(message.length);

// 8
console.log(message.toUpperCase());

// 9
let person = {};
person.name="Ivan";
person.age=18;
person.city="Kyiv";
delete person.city;
person.like="flowers";

// 10
for (let key in person){
 console.log(key + ": " + person[key]);
}