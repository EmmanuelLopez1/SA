let myTypeString: string = "hello world";

//ARRAYS 
const arr: number[] = [1,2,3,4];
const arr2: Array<number> = [1,2,3,4]
const arr_any: any[] = [1,"weed"]

//Tuple
const tuple: [number, string, boolean] = [1, "hello", false]


//INFERENCIA
let number = 33;


// COMPOSICION DE TIPOS
let variable1: number | string | boolean;


// ENUM
enum Roles {
    admin = 1,
    baby,
    ozuna
}

console.log(Roles.baby);
// console.log(Roles[0]);



// ASSERTIONS

let channel: any = "Dominicode"
let channel2 = channel as string;


const input = <HTMLInputElement>document.querySelector(".input")


// FUNCTIONS

function greet(name:string):string{
    console.log(name);
    return name.toUpperCase()
}

greet("maxo")


function printPosition(pos:{lat:number, lon:number, y?:number}):void{
    console.log(pos.lat, pos.lon)
}

printPosition({lat:2, lon:4})

// INTERFFACES
interface Book {
    id:number,
    title:string,
    author:string,
    age?:number
}

const book:Book = {
    id:2,
    title:"Lord of rings",
    author:"maxo",
}

const bookk: Book[] = []

function getBook():Book{
    return {id:2, title:"harry potter", author:"yo mero"}
}

const new_book: Book ={
    id:3,
    title: "libro",
    author:"yo mero",
    age:23,
}
const my_book = getBook()

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
    protected city = "santo domingo"
    constructor(){

    }

    greet():void{
        console.log("hello");
    }
}

class Employee extends Person {
    
    constructor(public readonly name:string, private age:number){
        super()
        this.name = name;
        this.age = age;
    }

    showInfo():string{
        return this.name + " " + this.age 
    }
}

const emp = new Employee("Emmanuel", 23)
// console.log(emp.name);
// console.log(emp.showInfo());

// MODULOS Y NAMESPACES

namespace Utility{
    export namespace Taxes {
        export function calculate_iva(price:number):number{
            return (price *0.16) + price
        }
        export function calculate_penalty_iva(price:number):number{
            return (price *0.30) + price
        }
    }
}

// GENERICS

