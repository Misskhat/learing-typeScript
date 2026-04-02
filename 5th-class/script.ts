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
