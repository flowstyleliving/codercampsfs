/* OBJECT ORIENTED PROGRAMMING // 4 Pillars
1) Abstraction -> Interfaces //easier to understand//moving away from actual data
more abstract code => better for testing
keep it as multifunctional as possible

2) Incapsulation -> Object should have everything it needs to function //self-sufficient
// more reusable
allows the use of private: stuff

3) Polymorphism -> Ability to change the data type of a var at runtime //specfic to JS
"cause JavaScript"

4) Inheritance -> Way of classes to use info from each other
eg. below

RunTime Vs. CompileTime

CompileTime = when you're actually compiling/building the file //syntax errors most of the time
RunTime = program is actually running and it gives errors


synchronous: 1 line at a time
asynchronous:


AJAX {Asynchronous JavaScript And XML} 30-300ms
brings in data while web page does not have to refresh

JSON {JavaScript Object Notation}
Readability, faster

Websockets 1-3ms



console/terminal
ls -a :hidden files and folders
ls -la :all files + permissions
pwd: print working directory
cd: change directory -> home
cd [file name]: go into it
cd .. : up 1 level
cd ../.. : up 2 levels
cd . : use current folder
mkdir: make directory -> Make a folder
mkdir -p data/bin: Make a data folder and then a bin folder in it
rm -rf [folder name]: remove the folder


 */

//method = function but for a class | obj
//property => read and write to it / field => like private
//field is a constant within the class that you can use as unique.

/* // Inheritance
class Animal {
public name: string;
public age: number;
costructor(
name: string,
age: number
) {
if(!name) throw new Error("A name is required to create this animal");
else this.name = name;

if(age < 0 || age > 25) throw new Error("Age must be between 0 to 25 for this animal.")
else this.age = age;
}

class Dog extends Animal {
  constructor(
  name: string,
  public breed: sring,
  age: number,
  public owner: string,
  public collarColor: string
) {
    super(name, age);
})}


 */
