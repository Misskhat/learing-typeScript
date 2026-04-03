# Learning TypeScript
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Misskhat/learing-typeScript)

This repository documents a learning journey through the core concepts of TypeScript. Each folder represents a "class" or topic, containing commented TypeScript code and its compiled JavaScript output.

## Topics Covered

The repository is structured by topic, progressing from basic to more advanced concepts:

*   **`first-class`**: Introduction to TypeScript, basic variable declaration and type assignment.
*   **`second-class`**: Exploration of basic types, including primitives (`number`, `string`, `boolean`), `Array`, `Tuple`, `Enum`, `any`, `unknown`, and `void`.
*   **`third-class`**: Understanding `Type Inference`, explicit `Type Annotations`, and defining object shapes with `Interfaces`.
*   **`4th-class`**: Deep dive into Object-Oriented Programming (OOP) with `Classes`. This includes constructors, access modifiers (`public`, `private`, `protected`), `readonly` properties, `getters/setters`, and `static` members.
*   **`5th-class`**: Advanced function concepts such as function types, optional and default parameters, and `Function Overloading`.
*   **`6th-class`**: Introduction to `Generics` and how they are used with functions, interfaces, and classes to create reusable, type-safe components.
*   **`7th-class`**: Understanding `Modules` for organizing code, including `export` and `import` statements.

## How to Explore

Each topic is contained within its own directory (e.g., `second-class/`). To explore a concept:
1.  Navigate to the corresponding folder.
2.  Open the `.ts` file (e.g., `script.ts`) to view the source code with comments and explanations.
3.  You can also see the compiled JavaScript output in the corresponding `.js` file.

The `tsconfig.json` file in each directory contains the compiler options used for that specific lesson.

## Code Examples

Here are a few snippets from the repository that highlight some of the concepts covered.

### Enums (`second-class/script.ts`)
Enums allow for defining a set of named constants.

```typescript
enum ErrorStatus {
  ABANDONED = "abandoned status code is 123123",
  NOTFOUND = "not found status code is 321321",
  BAD_REQUEST = "bad request code is 112211",
}

console.log("second enum is: ", ErrorStatus.NOTFOUND);
```

### Interfaces (`third-class/script.ts`)
Interfaces are used to define the shape of an object.

```typescript
interface User {
  name: string;
  email: string;
  password: string;
  gender?: string; // Optional property
}

function abcd(obj: User): void {
  console.log(obj);
}

abcd({ name: "Mishkat", email: "mishkat@gmail.com", password: "asdf" });
```

### Classes with Access Modifiers (`4th-class/script.ts`)
TypeScript extends JavaScript classes with features like access modifiers.

```typescript
class BottleMaker {
  constructor(
    public name: string,
    public material: string,
    private price: number, // Can only be accessed within this class
    public brandIcon: string = "brandicon.png",
  ) {
    this.brandIcon = brandIcon;
  }
  isLabeling = true;
}

const b1 = new BottleMaker("MUM", "Metal", 1000, "mumIcon.png");
// console.log(b1.price); // This would cause an error
```

### Generic Functions (`6th-class/script.ts`)
Generics provide a way to create reusable components that can work with a variety of types.

```typescript
// <T> allows this function to accept any type and maintain type information.
function abcd<T>(a: T) {
  console.log(a);
}

// Calling the generic function with different types
abcd<string>("test");
abcd(124);
