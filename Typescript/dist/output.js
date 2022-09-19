"use strict";
let myTypeString = "hello world";
//ARRAYS 
const arr = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr_any = [1, "weed"];
//Tuple
const tuple = [1, "hello", false];
//INFERENCIA
let number = 33;
// COMPOSICION DE TIPOS
let variable1;
// ENUM
var Roles;
// ENUM
(function (Roles) {
    Roles[Roles["admin"] = 1] = "admin";
    Roles[Roles["baby"] = 2] = "baby";
    Roles[Roles["ozuna"] = 3] = "ozuna";
})(Roles || (Roles = {}));
console.log(Roles.baby);
// console.log(Roles[0]);
// ASSERTIONS
let channel = "Dominicode";
let channel2 = channel;
const input = document.querySelector(".input");
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
const book = {
    id: 2,
    title: "Lord of rings",
    author: "maxo",
};
const bookk = [];
function getBook() {
    return { id: 2, title: "harry potter", author: "yo mero" };
}
const new_book = {
    id: 3,
    title: "libro",
    author: "yo mero",
    age: 23,
};
const my_book = getBook();
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
class Person {
    constructor() {
        this.city = "santo domingo";
    }
    greet() {
        console.log("hello");
    }
}
class Employee extends Person {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    showInfo() {
        return this.name + " " + this.age;
    }
}
const emp = new Employee("Emmanuel", 23);
console.log(emp.name);
console.log(emp.showInfo());
// MODULOS Y NAMESPACES
var Utility;
// MODULOS Y NAMESPACES
(function (Utility) {
    let Taxes;
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
/// <reference path="./index.ts"/>
let util = Utility.Taxes;
const wheels_iva = util.calculate_iva(500);
console.log(wheels_iva);
