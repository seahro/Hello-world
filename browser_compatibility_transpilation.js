// ES6 syntax is only available after the introduction of ES6.  previous versions do not support this.
// -------------*********** BROWSER COMPATIBILITY AND TRANSPILATION ************------------
// -----1st lesson --- version capabilities
var pasta = "Spaghetti"; // ES5 syntax
 
const meat = "Pancetta"; // ES6 syntax
 
let sauce = "Eggs and cheese"; // ES6 syntax
 
// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;
// all the syntax and major commands were introduced in ES6
// previous editions create an error 'ERROR' in this case: -> SyntaxError: Block-scoped declaration const not supported in this web browser

//caniuse.com is a support resourse for finding browser compatibility information

// --caniuse practice --
// search term javascript es5
// search term emplate literals

// ES5 vs ES6 - th upgrades
// Readability and economy of code — The new syntax is often easier to understand (more readable) and requires fewer characters to create the same functionality (economy of code)
// Addresses sources of ES5 bugs — Some ES5 syntax led to common bugs. With ES6, Ecma introduced syntax that mitigates some of the most common pitfalls
// A similarity to other programming languages — JavaScript ES6 is syntactically more similar to other object-oriented programming languages. This leads to less friction when experienced, non-JavaScript developers want to learn JavaScript

// manual transpilation changing from ES6 - 1st line into ES5 - 2nd line
var carbonara = "You can make carbonara with" + ${pasta} + ", " + ${meat} + ", and a sauce made with" + ${sauce} + ".";
let carbonara = "You can make carbonara with" + pasta + "," + meat + ", and a sauce made with" + sauce + ".";

// -----------Trannpmspilation With Babel ---- setting up Babel--------
// in the side terminal type : npm install babel-cli and then "enter key" (it installs the 1st babel package)
// in the side terminal type : npm install babel-preset-env and then 'enter key' (it installs the 2nd babel package)
// after the 2 builds are installed... in the side terminal type : npm run build

// -------------npm init ----------- (node package manager)
// node packages are directories that contain javascript code written by other developers. you can use these packages to reduce duplication of work and avoid bugs.
// before we can add babel to the project directory we need to run the 'npm init' command.
// 'npm init' command creates a package.json in the root directory
// A package.json file contains information about the current JavaScript project. Some of this information includes
// Metadata — This includes a project title, description, authors, and more
//  list of node packages required for the project — If another developer wants to run your project, npm looks inside package.json and downloads the packages in this list
// Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process. In a later exercise, we will add a script that runs Babel and transpiles ES6 to ES5

// ***** You are not required to answer the prompts, though we recommend at minimum, you add your own title and description. If you don’t want to fill in a field, you can press enter. npm will leave fill these fields with default values or leave them empty when it creates the package.json file ***

// installing node packages
// 'npm install;
// .babelrc  'touch .babelrc' to create this file

//Review
//In this lesson, you learned about browser compatibility and transpilation. Let’s review the key concepts:

//ES5 — The old JavaScript version that is supported by all modern web browsers.
//ES6 — The new(er) JavaScript version that is not supported by all modern web browsers. The syntax is more readable, similar to other programming languages, and addresses the source of common bugs in ES5.
//caniuse.com — a website you can use to look up HTML, CSS, and JavaScript browser compatibility information.
//Babel — A JavaScript package that transpiles JavaScript ES6+ code to ES5.
//npm init — A terminal command that creates a package.json file.
//package.json — A file that contains information about a JavaScript project.
//npm install — A command that installs Node packages.
//babel-cli — A Node package that contains command line tools for Babel.
//babel-preset-env — A Node package that contains ES6+ to ES5 syntax mapping information.
//.babelrc — A file that specifies the version of the JavaScript source code.
//"build" script — A package.json script that you use to tranpsile ES6+ code to ES5.
//npm run build — A command that runs the build script and transpiles ES6+ code to ES5.
//For future reference, here is a list of the steps needed to set up a project for transpilation:

//Initialize your project using npm init and create a directory called src
//Install babel dependencies by running
//npm install babel-cli -D
//npm install babel-preset-env -D
//Create a .babelrc file inside your project and add the following code inside it:
//{
//  "presets": ["env"]
//}
//Add the following script to your scripts object in package.json:
//"build": "babel src -d lib"
//Run npm run build whenever you want to transpile your code from your src to lib directories.

// Transpilation
