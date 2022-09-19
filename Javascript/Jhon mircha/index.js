function Animal(name, type) {
    this.name = name;
    this.type = type;

    this.saludar = function () {
        console.log(`soy un animal y me llamo ${this.name} y soy un ${this.type}`);
    }
}

const animal1 = new Animal("galleta", "perro")
animal1.saludar()

function Perro(name, type) {
    this.super = Animal
    this.super(name, type)
    this.sonido = "Gua Gua"
}

Perro.prototype = new Animal()
Perro.prototype.constructor = Perro;

const perro1 = new Perro("tobias", "perro")
console.log(perro1);

console.log(animal1);