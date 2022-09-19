var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myTypeString = "hello world";
//ARRAYS 
var arr = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4];
var arr_any = [1, "weed"];
//Tuple
var tuple = [1, "hello", false];
//INFERENCIA
var number = 33;
// COMPOSICION DE TIPOS
var variable1;
// ENUM
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 1] = "admin";
    Roles[Roles["baby"] = 2] = "baby";
    Roles[Roles["ozuna"] = 3] = "ozuna";
})(Roles || (Roles = {}));
console.log(Roles.baby);
// console.log(Roles[0]);
// ASSERTIONS
var channel = "Dominicode";
var channel2 = channel;
var input = document.querySelector(".input");
// FUNCTIONS
function greet(name) {
    console.log(name);
    return name.toUpperCase();
}
greet("maxo");
function printPosition(pos) {
    console.log(pos.lat, pos.lon);
}
printPosition({ lat: 2, lon: 4 });
var book = {
    id: 2,
    title: "Lord of rings",
    author: "maxo"
};
var bookk = [];
function getBook() {
    return { id: 2, title: "harry potter", author: "yo mero" };
}
var new_book = {
    id: 3,
    title: "libro",
    author: "yo mero",
    age: 23
};
var my_book = getBook();
// EXTENDIENDO INTERFACES
// interface Person {
//     name:string,
//     age:number
// }
// interface Soccer_player extends Person{
//     position:string,
//     shirt_name:number
// }
// const ronaldhino: Soccer_player = {
//     name:"ronaldhino",
//     age:44,
//     position:"delantero",
//     shirt_name:10
// }
// CLASES
var Person = /** @class */ (function () {
    function Person() {
        this.city = "santo domingo";
    }
    Person.prototype.greet = function () {
        console.log("hello");
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.age = age;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    Employee.prototype.showInfo = function () {
        return this.name + " " + this.age;
    };
    return Employee;
}(Person));
var emp = new Employee("Emmanuel", 23);
// console.log(emp.name);
// console.log(emp.showInfo());
// MODULOS Y NAMESPACES
var Utility;
(function (Utility) {
    var Taxes;
    (function (Taxes) {
        function calculate_iva(price) {
            return (price * 0.16) + price;
        }
        Taxes.calculate_iva = calculate_iva;
        function calculate_penalty_iva(price) {
            return (price * 0.30) + price;
        }
        Taxes.calculate_penalty_iva = calculate_penalty_iva;
    })(Taxes = Utility.Taxes || (Utility.Taxes = {}));
})(Utility || (Utility = {}));
// GENERICS
