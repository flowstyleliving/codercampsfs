let myObj = { }
let otherObj = new Object();
let anotherObj = Object.create(Object.prototype);

let thisObj = { //container
  color: "Red",
  name: "Larry",
  "type": "Truck",
  callMe: function() {
    return "Maybe";
  },
  price: 10.99,
  owned: new Date(),
  owner: {
    this: "objectception"
  },
};

// Dot Notation vs Bracket
// thisObj.year = "2000";
thisObj["year"] = 2000;

let jwt = "91023091283012.21039182098053123.12321321324d";
thisObj[jwt] = { username: false };

for(let shit in thisObj) {
  console.log(shit);
  console.log(thisObj[shit]);
}

//Does the property exist?
//
if(myObj.hasOwnProperty(' ')) {}

if(myObj.phoneNumber) {
  
}
