"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
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
    name;
    material;
    price;
    brandIcon;
    constructor(name, material, price, brandIcon = "brandicon.png") {
        this.name = name;
        this.material = material;
        this.price = price;
        this.brandIcon = brandIcon;
        this.brandIcon = brandIcon;
    }
    isLabeling = true;
}
const b1 = new BottleMaker("MUM", "Metal", 1000, "mumIcon.png");
const b2 = new BottleMaker("RFL", "Plastic", 120);
console.log(b1);
console.log(b2);
//# sourceMappingURL=script.js.map