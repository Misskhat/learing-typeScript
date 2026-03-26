/**
 * Basic type:
 * Primitive types (number, string, boolean)
 * Arrays
 * Tuples
 * Enums (Enumerations in simple calculation)
 * Any, Unknown, Void, Nul, Undefine, Never
 */

//declaration of array

const arr: number[] = [1, 3, 5, 7];
console.log("first array", arr);

const arr1: string[] = ["name1", "name2"];
console.log("second array", arr1);

// declaration of Tuples
//note => basically this declaration of an array how to store and how may store.

const tup: [number, string] = [2, "name1"];
console.log("first tuple declaration", tup);

const tup1: [number, string, Array: string[]] = [1, "name2", ["a", "b"]];
console.log("second tuple declaration", tup1);

// declaration of enum's
//node => it's writing  key values type and it use for predefine information

enum UserInfo {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
}

console.log("first enum is: ", UserInfo.ADMIN);

enum ErrorStatus {
  ABANDONED = "abandoned status code is 123123",
  NOTFOUND = "not found status code is 321321",
  BAD_REQUEST = "bad request code is 112211",
}

console.log("second enum is: ", ErrorStatus.NOTFOUND);

// What is Any?
// If we declare any variables and not define it then it's call any type variable.
let a;

//What is Unknown?
// Basically unknown type define developer and it working when developer assign any condition and if true then it's work.

let b: unknown;

if (typeof b === "string") {
  b.toUpperCase();
}

//What is void?
// When a function not return anything then we use type void

function con(): void {
  console.log("Hi, I'm called from function");
}

con();
