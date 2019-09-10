function Employee (name) {
    this.name = name;
    // step:1
    // this.getName = function () {
    //     return this.name;
    // }
    // step: 3
    // var employee = Object.create (Employee.prototype);
    // employee.name = name;
    //return employee;
}

// step:2
// Employee.getName = function () {
//     return this.name;
// }

Employee.prototype.getName = function () {
    return this.name;
}

var emp1 = new Employee ("Hitesh");
var emp2 = new Employee ("Pinky");

console.log (emp1.getName (), emp2.getName ());
////////////////////////

function Vehicle (name, type) {
    this.name = name;
    this.type = type;
}

Vehicle.prototype.getName = function () {
    return this.name;
}

Vehicle.prototype.getType = function () {
    return this.type;
}

var car = new Vehicle ('Hyndai', 'car');
console.log (car.getName (), car.getType ());


function Shape (type) {
    this.type = type;
    this.getType = function () {
        return type;
    }
}

function Triangle (a, b , c) {

}

Triangle.prototype.shape = function () {

}