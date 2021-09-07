import { Electrodomestico } from "./Electrodomestico.js";

class Nevera extends Electrodomestico{
    constructor(consumo, procedencia, capacidad){
        super(consumo, procedencia);
        this.capacidad = capacidad;
    }

    get getCapacidad(){
        return this.capacidad;
    }

    set setCapacidad(valorCapacidad){
        this.capacidad = valorCapacidad;
    }

    CantidadLitrosExtras(){
        var capTemp = 0;
        if (this.capacidad > 120) {
            capTemp = (this.capacidad - 120) / 10;
        }
        return capTemp;
    }
    CalcularCostoTotal(){
        if (this.CantidadLitrosExtras() > 0) {
            var porcentaje = this.CantidadLitrosExtras() * 0.05;
            return super.CalcularCostoTotal() + (super.CalcularCostoTotal() * porcentaje);
        } else {
            return super.CalcularCostoTotal();
        }
    }
}export {Nevera};