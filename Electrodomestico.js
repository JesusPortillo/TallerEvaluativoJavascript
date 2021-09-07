class Electrodomestico{
    constructor(consumo,procedencia) {
        this.consumo = consumo;
        this.procedencia = procedencia;
    }

    get getConsumo(){
        return this.capacidad;
    }

    set setConsumo(valorCapacidad){
        this.capacidad = valorCapacidad;
    }

    get getProcedencia(){
        return this.capacidad;
    }

    set setProcedencia(valorCapacidad){
        this.capacidad = valorCapacidad;
    }


    CalcularCostoSegunConsumo() {
        switch (this.consumo) {
            case "A":
                return 450000;
            case "B":
                return 350000;
            case "C":
                return 250000;
            default:
                return -1;

        }
    }

    CalcularCostoSegunProcedencia(){
        if (this.procedencia === "NACIONAL") {
            return 250000;
        } else if (this.procedencia === "IMPORTADO") {
            return 350000;
        } else {
            return -1;
        }
    }

    CalcularCostoTotal(){
        return this.CalcularCostoSegunConsumo() + this.CalcularCostoSegunProcedencia();
    }


}export {Electrodomestico};