/**
 * Classes and Objects
 * Class definition
 * Constructors
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
    public price: number,
    public brandIcon: string = "brandicon.png",
  ) {
    this.brandIcon = brandIcon;
  }
  isLabeling = true;
}

const b1 = new BottleMaker("MUM", "Metal", 1000, "mumIcon.png");
const b2 = new BottleMaker("RFL", "Plastic", 120);

console.log(b1);
console.log(b2);
