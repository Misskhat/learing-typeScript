"use strict";
/**
 * Functions
 * Functions type.
 * Optional and default parameters
 * Rest parameters
 * Overloads
 */
Object.defineProperty(exports, "__esModule", { value: true });
// how to write a function in typescript
// if return any value then mention the type after the function name. if not return any value then type
function basicFn1() {
    console.log("basic function 1");
}
basicFn1();
// if we set parameter then mention parameter data type.
function basicFn2(name) {
    console.log(`Hi, ${name}`);
}
basicFn2("Mishkat");
// how to declare callback function from parameter
function basicFn3(name, cd) {
    `${cd(`mishkat`)}; ${console.log(name)}`;
}
basicFn3("Milon", (agg) => {
    console.log(agg);
});
//# sourceMappingURL=script.js.map