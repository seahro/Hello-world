// classes example
//Take, for example, an object representing a dog named halley. This dog’s name (a key) is "Halley" (a value) and has a behavior (another key) of 0 (another value). We create the halley object below:
let halley = {
    _name: 'Halley',
    _behavior: 0,
   
    get name() {
      return this._name;
    },
   
    get behavior() {
      return this._behavior;
    },
   
    incrementBehavior() {
      this._behavior++;
    }
  }
  // Now, imagine you own a dog daycare and want to create a catalog of all the dogs who belong to the daycare. Instead of using the syntax above for every dog that joins the daycare, we can create a Dog class that serves as a template for creating new Dog objects. For each new dog, you can provide a value for their name
  class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
 // Copy the class instantiation, method call, and console.log() statements below into main.js
 const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
// prints Halley 0 and then after the incrementBehavior function runs prints Halley 1

// -----------------Constructor Example-----Classes----
//you may see similarities between class and object syntax, there is one important method that sets them apart. It’s called the constructor method. JavaScript calls the constructor() method every time it creates a new instance of a class.
class Dog { //Dog is the name of our class. By convention, we capitalize and CamelCase class names
    constructor(name) { //JavaScript will invoke the constructor() method every time we create a new instance of our Dog class. This constructor() method accepts one argument, name.
      this.name = name; //Inside of the constructor() method, we use the this keyword. In the context of a class, this refers to an instance of that class. In the Dog class, we use this to set the value of the Dog instance’s name property to the name argument
      this.behavior = 0; //Under this.name, we create a property called behavior, which will keep track of the number of times a dog misbehaves. The behavior property is always initialized to zero
    }
  }
  // constructor Example in action.
  class Surgeon {  // Create an empty class named Surgeon
    constructor(name, department) { //Inside the Surgeon class, create a constructor() method that accepts two parameters: name and department
      this.name = name; // create a name property
      this.department = department; // create a department property
    }
  }
// Example syntax for constructor setup
// constructor(inputOne, inputTwo) {
//   this.inputOne = inputOne;
//   this.inputTwo = inputTwo;
//   }

//------------------Instances Example----------Classes----------
// we’re ready to create class instances. An instance is an object that contains the property names and methods of a class, but with unique property values
//class Dog {
//    constructor(name) {
//    this.name = name;
//    this.behavior = 0;
//   } 
//}
// *** Below our Dog class, we use the new keyword to create an instance of our Dog class. Let’s consider the line of code step-by-step   
//  const halley = new Dog('Halley'); // Create new Dog instance
//  console.log(halley.name); // Log the name value saved to halley
  // Output: 'Halley'

//return to surgeon example

//Create an instance of the Surgeon class — set the name to 'Francisco Romero' and department to 'Cardiovascular'.

//To create an instance of a class, you can use the syntax below
//const instance = new ClassName('arg1', 'arg2');

//Save the instance to a constant variable called surgeonRomero
class Surgeon {
    constructor(name, department) {
      this.name = name;
      this.department = department;
    }
  }
const surgeonRomero = new Surgeon ('Francisco Romero', 'Cardiovascular');
//add surgeonJackson
const surgeonJackson = new Surgeon ('Ruth Jackson', 'Orthopedics');
//----------------METHODS EXAMPLE WITH Classes------------
//******Class method and getter syntax is the same as it is for objects except you can not include commas between methods* */
//----prepending and NO COMMMAS in Classes vs Getters/Setters of objects---
class Dog {
  constructor(name) {
    this._name = name; // using _ prepends the property name
    this._behavior = 0; // using _ prepends the property behavior
  }
 
  get name() { //Getter for name
    return this._name; 
  }
 
  get behavior() { //getter for behavior
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
}

// In the example above, we add getter methods for name and behavior. Notice, we also prepended our property names with underscores (_name and _behavior), which indicate these properties should not be accessed directly. Under the getters, we add a method named .incrementBehavior(). When you call .incrementBehavior() on a Dog instance, it adds 1 to the _behavior property. Between each of our methods, we did not include commas
// adding prepends, methods and classes to surgeon example
class Surgeon {
  constructor(name, department, remainingVacationDays) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20; //added an additional key
  }
  get name () {
    return this._name;
  }
  get department () {
    return this._department;
  }
  get remainingVacationDays () {
    return this._remainingVacationDays;
  }
  takeVacationDays (daysOff) { //Under the remainingVacationDays getter, create a method called takeVacationDays that accepts one argument named daysOff.
    this._remainingVacationDays -= daysOff // Inside of the method, subtract daysOff from the number saved to _remainingVacationDays. Set _remainingVacationDays to the result.
  }
}
// ********class methods are created with the following syntax: *****
//  methodOne(keyOne) {
  // Do something here
//}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

// ----- method calls --------
//accessing and manipulating data across instances
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
}
 
const halley = new Dog('Halley');
//* In the example above, we create the Dog class, then create an instance, and save it to a variable named halley. 
//*The syntax for calling methods and getters on an instance is the same as calling them on an object — append the instance with a period, then the property or method name. For methods, you must also include opening and closing parentheses.
//* Let’s take a moment to create two Dog instances and call our .incrementBehavior() method on one of them
let nikko = new Dog('Nikko'); // Create dog named Nikko
nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
let bradford = new Dog('Bradford'); // Create dog name Bradford
console.log(nikko.behavior); // Logs 1 to the console
console.log(bradford.behavior); // Logs 0 to the console
// *we create two new Dog instances, nikko and bradford. Because we increment the behavior of our nikko instance, but not bradford, accessing nikko.behavior returns 1 and accessing bradford.behavior returns 0.

// IN the surgeon example
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

console.log(surgeonRomero.name); // prints Romeros name
surgeonRomero.takeVacationDays(3); // called the .takeVacationDays method and subtracted 3
console.log(surgeonRomero.remainingVacationDays); //prints 17 (20-3) remaininVacationDays

//--------INHERITANCE---------------
// https://www.codecademy.com/courses/introduction-to-javascript/lessons/classes/exercises/inheritance-i
// create a new cat class
class Cat {
  constructor(name, usesLitter) {
    this._name = name; // shares a name property with dog class
    this._usesLitter = usesLitter; // additional property, not in dog class
    this._behavior = 0; // method similar to dog class
  }
 
  get name() {
    return this._name;
  }
 
  get usesLitter() { // this property holds a boolean value (Yes No)
    return this._usesLitter;
  }
 
  get behavior() {
    return this._behavior;
  }  
 
  incrementBehavior() {
    this._behavior++;
  }
}
// When multiple classes share properties or methods, they become candidates for inheritance — a tool developers use to decrease the amount of code they need to write
// With inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share. The child classes inherit the properties and methods from their parent class

// Abstrating share properties into a new parent class called animal
class Animal { // new parent class
  constructor(name) {
    this._name = name; // shared property
    this._behavior = 0; // shared property
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
} 
//In the example above, the Animal class contains the properties and methods that the Cat and Dog classes share (name, behavior, .incrementBehavior())
// https://www.codecademy.com/courses/introduction-to-javascript/lessons/classes/exercises/inheritance-ii

// Creating two classes and a "super" class
class Doctor {
  constructor (_name, _remainingVacationDays,_insurance) {
    this._name = name;
    this._remainingVacationDays = 20;
    this._insurance = ' ';
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  get insurance() {
    return this._insurance;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse {
  constructor (_name, _remainingVacationDays,_certifications) {
    this._name = name;
    this._remainingVacationDays = 20;
    this._certifications = ' ';
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  get certifications() {
    return this._certifications;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  addCertifications() {
    
  }
}
// Hospital Employee will be the superclass sharing name and wo properties of name and remaining catinodays
class HospitalEmployee {
  constructor(name, _remainingVacationDays) {
    this._name = name;
    this._remainingVacationDays = 20
  }
 get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

// ----Inheritance III ----extending shared properties to subclasses
// returning to Animal 'super' class
// we use the parent class 'animal' properties and extend those properties with "super"
class Cat extends Animal { // extends makes the methods available to cat
  constructor(name, usesLitter) { // when you make a new cat it accepts 2 arguments
    super(name); // here is where you would use super 'to share' the name argument when the animal constructor runs
    this._usesLitter = usesLitter; // since usesLitter is a new property, it will need to be added to the constructor.
  }
}
// *** "extends" extends keyword makes the methods of the animal class available inside the cat class
//constructor, called when you create a new Cat object, accepts two arguments, name and usesLitter
// *** super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Cat class to the constructor of the Animal class. When the Animal constructor runs, it sets this._name = name; for new Cat instances
// *** new properties need to be in the constructor! _usesLitter is a new property that is unique to the Cat class, so we set it in the Cat constructor
//*********************** you must always call the super method before you can use the this keyword — if you do not, JavaScript will throw a reference error. To avoid reference errors, it is best practice to call super on the first line of subclass constructors

// HospitalEmployee extending to Nurse example
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee { //Under HospitalEmployee, create an empty class named Nurse that extends HospitalEmployee
  constructor (name, certifications) { // Inside the Nurse class, create a constructor() that accepts two arguments
    super(name);  //In the Nurse constructor, call the parent’s constructor method and pass the appropriate value(s)
    this._certifications = certifications; //nside of the Nurse constructor, and under super, set _certifications
  }
}

const nurseOlynyk = new Nurse ('Olynyk', ['Trauma', 'Pediatrics'])

// ------Inheritance level 4 - Classes
//When we call extends in a class declaration, all of the parent methods are available to the child class
// -----Animal class extending to Cat subclass example-----
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
} 
 
 // our Cat class extends Animal. As a result, the Cat class has access to the Animal getters and the .incrementBehavior() method
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
 // Also in the code above, we create a Cat instance named bryceCat. Because bryceCat has access to the name getter, the code below logs 'Bryce' to the console
const bryceCat = new Cat('Bryce', false);
// Since the extends keyword brings all of the parent’s getters and methods into the child class, bryceCat.name accesses the name getter and returns the value saved to the name property


// Nurse Extension Example
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
 constructor(name, certifications) {
   super(name);
   this._certifications = certifications;
 } 
}

//after creating nurse olynyk instance and inputting name and certs
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
// the remainingVacationDays part is automatically extended from HospitalEmployee
nurseOlynyk.takeVacationDays (5);
console.log (nurseOlynyk.remainingVacationDays);
// ----------- Inheritance level 5 ------------
// child classes can contain their own properties, getters, setters, and methods
//we will add a usesLitter getter. The syntax for creating getters, setters, and methods is the same as it is in any other class
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
}
//In the example above, we create a usesLitter getter in the Cat class that returns the value saved to _usesLitter
// ****** ABOVE CODE EQUALS THE CODE BELOW WITH LESS LINES REQUIRED******
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
}
//  The code above requires more lines vs using the super/child class property assignments

// creating an additional subclass like dog
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}
// Dog class has access to the same properties, getters, setters, and methods as the Dog class we made without inheritance, and is a quarter the size

// NURSE EMPLOYEE SUPER/SUB Class Example
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  get certifications() {
    return this._certifications;
  }
  //create a new method called addCertification (one input-newCertification) and use push method to add the value to the array
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
//add new certification to the existing nurse olynyk example
nurseOlynyk.addCertification('Genetics');
//log the new certifications
console.log(nurseOlynyk.certifications);

// ***----STATIC METHODS ----***
//Sometimes you will want a class to have methods that aren’t available in individual instances, but that you can call directly from the class
//Take the Date class, for example — you can both create Date instances to represent whatever date you want, and call static methods, 
//like Date.now() which returns the current date, directly from the class. 
// ** using static methods example **
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
} 
// the example above, we create a static method called .generateName() that returns a random name when it’s called. Because of the static keyword, we can only access .generateName() by appending it to the Animal class.
// We call the .generateName() method with the following syntax
console.log(Animal.generateName()); // returns a name
// You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses (See below
const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError
//The example above will result in an error, because you cannot call static methods (.generateName()) on an instance (tyson)

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  //creating a static method called generatePassword...returns a integer between 0-10000.
  static generatePassword() {
    const randomNumber = Math.floor(Math.random() * 10000);
    return randomNumber;

  }
}
// *******BUILDING A LIBRARY Exercise *****

class Media {
  constructor (title, isCheckedOut, ratings) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [ ];
  }
  get title () {
    return this._title;
  }
  get isCheckedOut () {
    return this._isCheckedOut;
  }
  get ratings () {
    return this._ratings;
  }
  set isCheckedOut(toggleCheckOutStatus) {
    this._isCheckedOut = toggleCheckOutStatus;
  }
  get toggleCheckOutStatus () {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating () {
    let ratingsSum = this.ratings.reduce ((currentSum, rating) => currentSum + rating, 0);
    return ratingsSum / this._ratings.length;
  }
  addRating (newRating) {
    this._ratings.push(newRating);
  }
}

class Book extends Media {
  constructor (author, title, pages, isCheckedOut, ratings) {
    super(title, isCheckedOut, ratings);
    this._author = author;
    this._pages = pages;
    
  }
  get author () {
    return this._author;
  }
  get pages () {
    return this._pages;
  }
}

class Movie extends Media {
  constructor (director, title, runTime, isCheckedOut, ratings) {
    super(title, isCheckedOut, ratings);
    this._director = director;
    this._runTime = runTime;
  }
  get director () {
    return this._director;
  }
  get runTime () {
    return this._runTime;
  }
}

class CD extends Media {
  constructor (artist, title, runTime, isCheckedOut, ratings, songs) {
    super(title, isCheckedOut, ratings);
    this._artist = artist;
    this._runTime = runTime;
    this._songs = [];
  }
  get artist () {
    return this._artist;
  }
  get runTime () {
    return this._runTime;
  }
  get songs () {
    return this._songs;
  }
}

const historyOfEverything = new Book ('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus;
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie ('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus;
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());


// ---- school Catalogue exercise ----

class School {
  constructor (name, level, numberOfStudents, averageTestScores, schoolOverview) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
    this._averageTestScores = averageTestScores;
    this._schoolOverview = schoolOverview;
  }
  get name () {
    return this._name;
  }
  get level () {
    return this._level;
  }
  get numberOfStudents () {
    return this._numberOfStudents;
  }
  get averageTestScores () {
    return this._averageTestScores;
  }
  get schoolOverview () {
    return this._schoolOverview;
  }
  set numberOfStudents(newNumberOfStudents) {
    if (newNumberOfStudents === number) {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log (`Invalid Input: numberOfStudents must be set to a Number.`);
    }
  }
  quickFacts () {
    console.log (`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
  static pickSubstituteTeacher (substituteTeachers) {
    const substituteTeacherIndex = Math.floor(Math.random() * (substituteTeachers.length - 1 ));
    return substituteTeachers[substituteTeacherIndex];
  }
}

class PrimarySchool extends School {
  constructor (name, numberOfStudents, pickupPolicy) {
    super (name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy () {
    return this._pickupPolicy;
  }
}

 class HighSchool extends School {
   constructor (name, numberOfStudents, sportsTeams) {
     super (name, 'high', numberOfStudents);
     this._sportsTeams = sportsTeams;
   }
   get sportsTeams () {
     return this._sportsTeams;
   }
 }  

 class MiddleSchool extends School {
   constructor(name, numberOfStudents) {
     super (name, 'middle', numberOfStudents);
   }
 }


const lorraineHansbury = new PrimarySchool ('Lorraine Hansbury', 514, 'Students must be picked up by a pparent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts ();
console.log (School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool ('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);

