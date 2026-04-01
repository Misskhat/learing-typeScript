/**
 * Classes and Objects == Done
 * Class definition == Done
 * Constructors == Done
 * Access modifiers (public, private, protected)
 * ReadOnly properties
 * Optional properties
 * Getters and setters
 * Static members
 * Abstract classes and methods
 * */

//how to class declare;

class Devise {
  color = "Blue";
  size = "lg";
  price = 1000;
}

const d1 = new Devise();
const d2 = new Devise();

console.log(d1);
console.log(d2);

// In simple is a diagram where you define default value and if you need the dynamic value the need to use constructor. Example given below:

class BottleMaker {
  constructor(
    public name: string,
    public material: string,
    private price: number,
    public brandIcon: string = "brandicon.png",
  ) {
    this.brandIcon = brandIcon;
  }
  isLabeling = true;
}

class MetalBottleMaker extends BottleMaker {
  public weight: number = 0.5;
}

const b1 = new BottleMaker("MUM", "Metal", 1000, "mumIcon.png");
const b2 = new BottleMaker("RFL", "Plastic", 120);

b2.brandIcon = "rflIcon.png";

console.log(b1);
console.log(b2);

//Access modifier (Public, Private, Protected)

//Public:
/**
 * change in class
 * change in subClass or Extended classes
 * change outside after assigning to a variable
 */

//Private:
/**
 * change in class
 * not change in subClass or Extended class. (note: it will be run but show error.)
 * not change in outside after assigning to a variable. (note: it will be run but show error.)
 */

//Protected:
/**
 * change in class
 * change in subClass or Extended classes
 * not change in outside after assigning to a variable.
 */

//readonly

class CalculatorMaker {
  constructor(public readonly name: string) {}

  changeName() {
    // this.name = "Milon"; (errorMessage: Cannot assign to 'name' because it is a read-only property.)
  }
}

const c1 = new CalculatorMaker("Mishkat Hossain");
console.log(c1);

// getter and setter value

class User {
  constructor(
    public name: string,
    public age: number = 0,
    gender?: string,
  ) {}

  get() {
    return this.name;
  }

  set(value: string) {
    this.name = value;
  }
}

const u1 = new User("Mishkat");
console.log(u1);

u1.set("Milonnnnnnn");
console.log(u1.get());

class UserGetterSetter {
  constructor(
    public _name: string,
    public age: number = 1,
  ) {}

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

const u12 = new UserGetterSetter("Milon");

u12._name = "Mishkat";

const userName = u12.name;

console.log(userName);

//Static members: If we declare a class and if we don't make instance then we are not access the class. But if we mention the statics key word then we can access.

class Machine {
  version: number = 1;

  getRandomNumber() {
    return Math.random();
  }
}

// console.log(Machine.version); // make error

//but when we create instance:

const mchin = new Machine();

//now it's work. if we use statics then without instance it will be work.
console.log(mchin.version);

class Machine2 {
  static version: number = 2;

  static randonNumbers() {
    return Math.random();
  }
}


//So, here it's the difference.
console.log(Machine2.randonNumbers());
