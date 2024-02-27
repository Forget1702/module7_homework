function TurnOnAndOff(name, powerCons) {
    this.name = name
    this.power = powerCons
    this.deviceUse = false
}

TurnOnAndOff.prototype.enable = function(name){
    this.deviceUse = true
    console.log(`${this.name} включен в розетку`)
}

TurnOnAndOff.prototype.disable = function(name){
    this.deviceUse = false
    console.log(`${this.name} выключен из розетки`)
}

TurnOnAndOff.prototype.getPower = function () {
    console.log(`Потребляемая мощность ${this.power} Вт`)
}
function Lamp(name, powerCons, color) {
    this.name = name
    this.power = powerCons
    this.color = color
}

function Computer(name, powerCons, system){
    this.name = name
    this.power = powerCons
    this.system = system
}

Lamp.prototype = new TurnOnAndOff()
Computer.prototype = new TurnOnAndOff()

const lamp = new Lamp('Лампа', 15, "черный")
const computer = new Computer('Компьютер', 400, "Windows")

computer.enable()
computer.getPower()
console.log(lamp)
console.log(computer)