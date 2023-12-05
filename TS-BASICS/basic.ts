let userName = "Ayoola";
let hasLoggedIn = true;

userName += " Adewale";

console.log(hasLoggedIn);

// let myNumber: number = 10;

// let myRegex: RegExp = /foo/;

// ------------ TYPING ARRAYS ----------
// const names: string[] = userName.split(" ");
// const myValues: Array<number> = [1, 2, 3];

// --------- TYPING OBJECT -----------
// const myPerson: { first: string; last: string } = {
//   first: "Ayoola",
//   last: "Adewale",
// };

// Using interface to define our types
interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "Ayoola",
  last: "Adewale",
};

// in JS, we use objects as maps
// we can do that in TS
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "c";
console.log(ids);

// CONDITIONALS AND EXPRESSIONS
if (ids[30] == "D") {
}

// LOOPS
for (let i = 0; i < 10; i++) {
  // console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v));

const out = [4, 5, 6].map((v) => v * 10);
// console.log(out);
