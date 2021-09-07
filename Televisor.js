import { Electrodomestico } from "./Electrodomestico.js";

class Televisor extends Electrodomestico{
    constructor(consumo, procedencia, numeroPulgadas, tieneTDT){
        super(consumo, procedencia);
        this.numeroPulgadas = numeroPulgadas;
        this.tieneTDT = tieneTDT;
    }

    get getnumeroPulgadas(){
        return this.numeroPulgadas;
    }

    set setnumeroPulgadas(valorNumeroPulgadas){
        this.numeroPulgadas = valorNumeroPulgadas;
    }

    get gettieneTDT(){
        return this.tieneTDT;
    }

    set SettieneTDT(valorTieneTDT){
        this.tieneTDT = valorTieneTDT;
    }

    CalcularCostoTotal(){
        var precioAcumulado = super.CalcularCostoTotal();
        if (this.numeroPulgadas > 40) {
            precioAcumulado += precioAcumulado * 0.30;
        }
        if (this.tieneTDT === "si") {
            precioAcumulado += 250000;
        }
        return precioAcumulado;
    }

    
}export {Televisor};