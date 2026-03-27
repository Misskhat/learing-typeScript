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
let b: string = "Mishkat";

/** Most import concept
 * Interfaces and type aliases
 * Defining interface
 * Using interface to define object shapes
 * Extending interface
 * Type aliases
 * Intersection types
 */

interface User {
  name: string;
  email: string;
  password: string;
  gender?: string;
}

function abcd(obj: User) {}

abcd({ name: "Mishkat", email: "mishkat@gmail.com", password: "asdf" });
