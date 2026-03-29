"use strict";
/**
 * Type Inference
 * Understanding type inference
 * Type annotations
 */
// What is type inference.
// If we do not assign the variable type, and typeScript automatically identify the type that is call type inference. Note, we find the type if hove the variable name.
let a = 12;
// What is annotations.
// When we mention the variable type through (:) semi-clone that is call type annotation.
let b = "Mishkat";
function abcd(obj) {
    console.log(obj);
}
abcd({ name: "Mishkat", email: "mishkat@gmail.com", password: "asdf" });
