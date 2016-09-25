var myObj = {};
var otherObj = new Object();
var anotherObj = Object.create(Object.prototype);
var thisObj = {
    color: "Red",
    name: "Larry",
    "type": "Truck",
    callMe: function () {
        return "Maybe";
    },
    price: 10.99,
    owned: new Date(),
    owner: {
        this: "objectception"
    },
};
thisObj["year"] = 2000;
var jwt = "91023091283012.21039182098053123.12321321324d";
thisObj[jwt] = { username: false };
for (var shit in thisObj) {
    console.log(shit);
    console.log(thisObj[shit]);
}
if (myObj.hasOwnProperty(' ')) { }
if (myObj.phoneNumber) {
}
