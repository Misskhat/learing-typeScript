/**
 * Generics
 * Generics Function
 * Generics interface
 * Generics classes
 */

// => Generics in a function, is where you create a function it take all kind of value and show the values method inside of function. Let's see.

// i mention <T> it's not mendetory use T you may use any alphabets and after that is type use in params  type.
function abcd<T>(a: T) {
  console.log(a);
}

//declaration

abcd<string>("test"); //method 1 of call the function.
abcd(124); //method 2 of call the function

//now how to use in interface

interface User<T> {
  name: string;
  id: number;
  key: T;
}

function UserInformation(obj: User<number>) {
  console.log(obj);
}

// UserInformation({ name: "mishkat", id: 1234, key: "asdf" });
UserInformation({ name: "mishkat", id: 1234, key: 123 });

//how to use it in class

class Bottle<T> {
  public key: T;
  constructor(key: T) {
    this.key = key;
  }
}

class Bottle1<T> {
  constructor(public name: T) {}
}

const b1 = new Bottle(1);
console.log(b1);

const b2 = new Bottle1("ami");
console.log(b2);
