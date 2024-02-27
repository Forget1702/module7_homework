class TurnOnAndOff {
    constructor(name, powerCons) {
        this.name = name
        this.power = powerCons
        this.deviceUse = false
    }
    enable = function(name){
        this.deviceUse = true
        console.log(`${this.name} включен в розетку`)
    }
    disable = function(name){
        this.deviceUse = false
        console.log(`${this.name} выключен из розетки`)
    }
    getPower = function () {
        console.log(`Потребляемая мощность ${this.power} Вт`)
    }
}
class Lamp extends TurnOnAndOff{
    constructor(name, powerCons, color) {
        super()
        this.name = name
        this.power = powerCons
        this.color = color
    }
}
class Computer extends TurnOnAndOff{
    constructor(name, powerCons, system) {
        super()
        this.name = name
        this.power = powerCons
        this.system = system
    }
}

const lamp = new Lamp('Лампа', 15, "черный")
const computer = new Computer('Компьютер', 400, "Windows")

computer.enable()
computer.getPower()
console.log(lamp)
console.log(computer)