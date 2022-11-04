'user strict'
/*1. convertir litros*/
function Ejercicio1(){

    Litros=prompt("Ingrese el volumen en Litros:");
    Centi=Litros*100;
    Deci=Litros*10;
    Galon=Litros/3.785;
    Onzas=Litros*33.814;
    console.log ("El valor en Litros ingresado es: "+Litros);
    console.log("en centilitros es: "+ Centi);
    console.log("en decilitros es: "+ Deci);
    console.log("en galones es: "+ Galon);
    console.log("en onzas es: "+ Onzas);
    var lit = document.getElementById('Label1');
    var cent = document.getElementById('Label2');
    var dec = document.getElementById('Label3');
    var gal = document.getElementById('Label4');
    var Onz = document.getElementById('Label5');

    lit.innerHTML = "El valor en Litros ingresado es: "+Litros;
    cent.innerHTML = "En Centilitros es: "+ Centi;
    dec.innerHTML = "En Decilitros es: "+ Deci;
    gal.innerHTML = "En Galones es: "+ Galon;
    Onz.innerHTML = "En Onzas es: "+ Onzas;

}


/*2. Operaciones basicas*/
function Ejercicio2(){

const num1=prompt("Ingrese valor 1:");
const num2=prompt("Ingrese valor 2:");
Val1=parseInt(num1);
Val2=parseInt(num2);
Suma=Val1+Val2;
Resta=num1-num2;
Division=num1/num2;
Multiplica=num1*num2;
console.log ("El Valor uno ingresado es: " + num1);
console.log ("El Valor dos ingresado es: " + num2);
console.log("El resultado de la suma de los dos valores es: "+ Suma);
console.log("El resultado de la resta de los dos valores es: "+ Resta);
console.log("El resultado de la división de los dos valores es: "+ Division);
console.log("El resultado de la multiplicación de los dos valores es: "+ Multiplica);

var numero1 = document.getElementById('Label1');
var numero2 = document.getElementById('Label2');
var sumatotal = document.getElementById('Label3');
var restatotal = document.getElementById('Label4');
var divisiontotal = document.getElementById('Label5');
var multiplicaciontotal = document.getElementById('Label6');

numero1.innerHTML = "El Valor uno ingresado es: " + num1;
numero2.innerHTML = "El Valor dos ingresado es: " + num2;
sumatotal.innerHTML = "El resultado de la suma de los dos valores es: "+ Suma;
restatotal.innerHTML = "El resultado de la resta de los dos valores es: "+ Resta;
divisiontotal.innerHTML = "El resultado de la division de los dos valores es: "+ Division;
multiplicaciontotal.innerHTML = "El resultado de la multiplicacion de los dos valores es: "+ Multiplica;
}

/*3. convertir Centigrados a Fahrenheit*/

function Ejercicio3(){

const Valgrados=prompt("Introduzca el valor en ° : ");
Afahre=(Valgrados*9/5)+32;
Acenti=(Valgrados-32)*(5/9);
Afahre=(Math.round(Afahre*100)/100);
Acenti=(Math.round(Acenti*100)/100);
console.log(Valgrados+" ° Centigrados en Fahrenheit son : "+ Afahre +" °F");
console.log(Valgrados+" ° Fahrenheit en Centigrados son: "+ Acenti +" °C");
var numero1 = document.getElementById('Label1');
var numero2 = document.getElementById('Label2');
var numero3 = document.getElementById('Label3');
numero1.innerHTML = "El Valor dos ingresado es: " + Valgrados;
numero2.innerHTML = Valgrados+" ° Centigrados en Fahrenheit son : "+ Afahre +" °F";
numero3.innerHTML = Valgrados+" ° Fahrenheit en Centigrados son: "+ Acenti +" °C";

}

/*4. valor a pagar por gasolina*/

function Ejercicio4(){

Galonsito=prompt("Introduzca la cantidad de galones:");
const Centi=Galonsito*378.5;
const Valorcenti=Centi*25;
const Litros=Galonsito*3.785;
console.log("La cantidad de galones es: " + Galonsito);
console.log("El valor a pagar es: "+ Valorcenti + " Pesos");
console.log("La cantidad de gasolina despachada es: "+ Litros + " Litros");
var numero1 = document.getElementById('Label1');
var numero2 = document.getElementById('Label2');
var numero3 = document.getElementById('Label3');
numero1.innerHTML = "La cantidad de galones es: " + Galonsito;
numero2.innerHTML = "El valor a pagar es: "+ Valorcenti  + "Pesos";
numero3.innerHTML = "La cantidad de gasolina despachada es: "+ Litros + " Litros";
}

/*5. calculo de salario*/

function Ejercicio5(){

const Ingreso=30000;
console.log("Su salario mensual es de $"+Ingreso);
var numero1 = document.getElementById('Label1');
numero1.innerHTML = "Su salario mensual es de $"+Ingreso;
if (Ingreso<=699999) {
    Pension=(Ingreso*0.02);
    Auxtrans=(Ingreso*0.06);
    Valneto=Ingreso+Auxtrans-Pension;
    console.log("El auxilio de transporte es de $"+Auxtrans);    
    var numero2 = document.getElementById('Label2');
    numero2.innerHTML = "El auxilio de transporte es de $"+Auxtrans;
} else {
    if (Ingreso>=700000 && Ingreso<=999999) {
        Pension=(Ingreso*0.04);
        Subsidio=12000;
        Valneto=Ingreso+Subsidio-Pension;
        console.log("El subsidio familiar es de $"+Subsidio);
        var numero3 = document.getElementById('Label3');
        numero3.innerHTML = "El subsidio familiar es de $"+Subsidio;
    } else {
        Pension=(Ingreso*0.06);
        Valneto=Ingreso-Pension;
    }
}
console.log("El valor descontado por pensión es de $"+Pension);
console.log("El valor neto a pagar despues de retenciones es de $"+Valneto);

var numero4 = document.getElementById('Label4');
numero4.innerHTML = "El valor descontado por pensión es de $"+Pension;
var numero5 = document.getElementById('Label5');
numero5.innerHTML = "El valor neto a pagar despues de retenciones es de $"+Valneto;

}