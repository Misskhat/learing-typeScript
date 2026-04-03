/**
 * Functions
 * Functions type.
 * Optional and default parameters
 * Rest parameters
 * Overloads
 */

// how to write a function in typescript
// if return any value then mention the type after the function name. if not return any value then type

function basicFn1(): void {
  console.log("basic function 1");
}

basicFn1();

// if we set parameter then mention parameter data type.
function basicFn2(name: string): void {
  console.log(`Hi, ${name}`);
}

basicFn2("Mishkat");

// how to declare callback function from parameter
function basicFn3(name: string, cd: (agg: string) => void) {
  `${cd(`mishkat`)}; ${console.log(name)}`;
}

basicFn3("Milon", (agg: string) => {
  console.log(agg);
});

//Function overloading is when we use to function as same name but assign difference parameters then call function overloading.

//this declaration call signature.
function abcd(a: string): string;
function abcd(a: string, b: number): number;

//now we create same function logically, for working above both functions.

function abcd(a: any, b?: any): string | number {
  if (typeof a === "string" && typeof b === "undefined") {
    return "first function working";
  }
  if (typeof a === "string" && typeof b === "number") {
    return 12;
  } else throw new Error("something is wrong");
}

const overLoading1 = abcd("name");
const overLoading2 = abcd("name", 33);

console.log(overLoading1);
console.log(overLoading2);
