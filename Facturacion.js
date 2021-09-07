import {  Electrodomestico } from "./Electrodomestico.js";
import { Televisor } from "./Televisor.js";
import { Nevera } from "./Nevera.js";

var electrodomesticosGenerales = [];
var televisores = [];
var neveras = [];
var factura = [];
var costoTotal = 0;

    var menu = "Menu\n";
        menu += "1. Electrodomesticos\n";
        menu += "2. Televisor\n";
        menu += "3. Nevera\n";
        menu += "4. Realizar factura\n";
        menu += "5. Ver factura\n";
        menu += "6. Mostrar inventario\n";
        menu += "7. Salir\n";
        menu += "por favor ingrese una opcion\n"

    var opcion = 0;
    do {
        opcion = parseInt(prompt(menu));

        switch (opcion) {
            case 1:
                let consumo = prompt("Ingrese el consumo del electrodomestico").toUpperCase();
                let procedencia = prompt("Ingrese la procedencia del electrodomestico").toUpperCase();

                console.log(consumo);
                console.log(procedencia);
                let elec = new Electrodomestico(consumo, procedencia);
                electrodomesticosGenerales.push(elec);
                console.log(elec);
                console.log(electrodomesticosGenerales);
                break;
            case 2:

                let consumoTelevisor = prompt("Ingrese el consumo del electrodomestico").toUpperCase();
                let procedenciaTelevisor = prompt("Ingrese la procedencia del electrodomestico").toUpperCase();
                let numeroPulgadas = parseInt(prompt("Ingrese el numero de pulgadas"));
                let tieneTDT = prompt("Ingrese si o no, para afirmar o negar que cuenta con TDT")
                
                console.log(consumoTelevisor);
                console.log(procedenciaTelevisor);
                let elecTv = new Televisor(consumoTelevisor, procedenciaTelevisor, numeroPulgadas, tieneTDT );
                televisores.push(elecTv);
                console.log(elecTv);

                console.log(televisores);
                break;
            case 3:
                let consumoNevera = prompt("Ingrese el consumo del electrodomestico").toUpperCase();
                let procedenciaNevera = prompt("Ingrese la procedencia del electrodomestico").toUpperCase();
                let capacidad = parseInt(prompt("Ingrese la capacidad de la nevera"));

                
                
                
                let elecNevera = new Nevera(consumoNevera, procedenciaNevera, capacidad);
                neveras.push(elecNevera);
                console.log(elecNevera);
               
                console.log(neveras);

                break;
            case 4:
                let electrodomesticoPorEncargar = prompt("Ingrese un electrodomestico a eliminar");
                if (electrodomesticoPorEncargar === "televisor") {
                    let consumoDeElectrodomesticoTV = prompt("Ingrese consumo del electrodomestico").toUpperCase();
                    let procedenciaDelElectrodomesticoTV = prompt("Ingrese procedencia del electrodomestico").toUpperCase();
                    let cantidadPedidoTV = prompt("Ingrese la cantidad a eliminar");
                    
                    if(televisores.length >= parseInt(cantidadPedidoTV)){
                        for (let index = 0; index < televisores.length; index++) {
                            const element = televisores[index];
                            if (element.consumo === consumoDeElectrodomesticoTV 
                            && element.procedencia === procedenciaDelElectrodomesticoTV && cantidadPedidoTV !== 0) {
                                costoTotal += element.CalcularCostoTotal();
                                factura.push(element);
                                televisores = arrayRemove(televisores, element);
                                cantidadPedidoTV -= 1;
                            }
                        }
                    }else{
                        alert("No hay existencias disponibles con esas especificaciones")
                    }
                }else if(electrodomesticoPorEncargar === "nevera"){
                    let consumoDeElectrodomesticoNevera = prompt("Ingrese consumo del electrodomestico").toUpperCase();
                    let procedenciaDelElectrodomesticoNevera = prompt("Ingrese procedencia del electrodomestico").toUpperCase();
                    let cantidadPedidoNevera = prompt("Ingrese la cantidad a eliminar");
                    
                    if(neveras.length >= parseInt(cantidadPedidoNevera)){
                        for (let index = 0; index < neveras.length; index++) {
                            const element = neveras[index];
                            if (element.consumo === consumoDeElectrodomesticoNevera 
                            && element.procedencia === procedenciaDelElectrodomesticoNevera && cantidadPedidoNevera !== 0) {
                                costoTotal += element.CalcularCostoTotal();
                                factura.push(element);
                                neveras = arrayRemove(neveras, element);
                                cantidadPedidoNevera -= 1;
                            }
                        }
                    }else{
                        alert("No hay existencias disponibles con esas especificaciones")
                    }
                    

                }else {
                    let consumoDeElectrodomesticoOtro = prompt("Ingrese consumo del electrodomestico").toUpperCase();
                    let procedenciaDelElectrodomesticoOtro = prompt("Ingrese procedencia del electrodomestico").toUpperCase();
                    let cantidadPedidoOtro = prompt("Ingrese la cantidad a eliminar");

                    if(electrodomesticosGenerales.length >= parseInt(cantidadPedidoOtro)){
                        
                        for (let index = 0; index < electrodomesticosGenerales.length; index++) {
                            const element = electrodomesticosGenerales[index];
                            console.log("toy aqui")
                            if (element.consumo === consumoDeElectrodomesticoOtro 
                            && element.procedencia === procedenciaDelElectrodomesticoOtro && cantidadPedidoOtro !== 0) {
                                costoTotal += element.CalcularCostoTotal();
                                console.log(element);
                                console.log(costoTotal);
                                factura.push(element);
                                electrodomesticosGenerales = arrayRemove(electrodomesticosGenerales, element);
                                cantidadPedidoOtro -= 1;
                            }
                        }
                    }else{
                        alert("No hay existencias disponibles con esas especificaciones")
                    }
                }
                factura.push(costoTotal);
                break;
            case 5:
                console.log(factura);              
                break;
            case 6:
                let array1 = [].concat(electrodomesticosGenerales, televisores, neveras)
                console.log(array1);    
            default:
                break;
        }
        
    } while (opcion != 7);   

    function arrayRemove(arr, value) {
        return arr.filter(function (ele) {
          return ele != value;
        });
      }




