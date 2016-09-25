//number => noImplicitAny
let x = 7;
let num: number = 7;

//string
let first_name = "Michael";
let last_name: string = "Seo";

//boolean
let is_open = true;
let is_close: boolean = false;

//array //keep it all 1 data_type
let cats = ["Mittens", "Sox", "Doofus"];
let dogs: [string] = ["Rex", "Mutt", "Rocky"];
let hamsters: Array<string> = ["Hello", "World", "Hamster Name"];

//object //thing that holds properties, methods, etc.
let obj = {
  color: "red",
  name: "Sally",
  type: "Fire Truck"
};

//function //set of instructions to run
let myFunc = function() {}; //var_notation //Hoists the var but not the func
function otherFunc() {}; //function_notation //Hoists to the top
let someOtherFunc = () => {}; //fat arrow => preserves this.x

//
function someFunc(): string {
  return "Hello";
}

functionExample(5, "@");
let nullResult = functionExample(null, "x");

//Functions Explained
                                //default_parameter = whatever you want if null
function functionExample(numTimes: number = 1, stringToPrint: string): string {
  //body
  let result = "";
  //could null check (!numTimes && numTimes == null);
  for(var i = 0; i < numTimes; i++) {
    result += stringToPrint;
  }
  return result;
}

/**
 * Sorts an array of numbers in ascending order
 * @param  {[number]} a [var on left]
 * @param  {[number]} b [var on right]
 * @return {[number]}   [stays the same, -1 left stays on the left, 1 left moves to the right.]
 */
function sort(a: number,b: number) {
  if(a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

function sort1(a,b) {
  if(a < b) return -1;
  if(a > b) return 1;
  return 0;
}

//null //defined but no value; just missing for now
//undefined //does not exist
let myVar: void;
let nullVar = null;
let undefVar = undefined;

//any
let y: any = "World";
y = 8;

//PascalCase
//camelCase
//snack_case


//Hoisting //
//when JS is ran, it is read twice.
