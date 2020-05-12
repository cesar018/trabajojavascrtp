/*
var texto,resultado;
texto= prompt("Ingresar número: ")
resultado=Math.sqrt(texto)
document.write(resultado)
console.log(resultado);
alert(texto);

var x,y,op;
x=parseFloat(prompt("n1: "));
y=parseFloat(prompt("n2: "));
op=parseInt(prompt("op: "));
/*if(x>y){
    mostrar(x)
}else if(y>x){
mostrar(y)
}else {
    mostrar("iguales");
}
*/
/*
function mostrar(resultado){
    document.write(resultado);
console.log(resultado);
alert(resultado);   
}
switch(op){
    case 1 : mostrar(suma())
     break;
    case  2: mostrar(resta())  
    break;
    case 3: mostrar(multiplicacion())
        break;
    case 4:  mostrar(division())
    break;
    default: break;
}
function suma(){
    return x+y;
}
function resta(){
    return x-y;
}
function multiplicacion(){
    return x*y;
}

function division(){
if(y==0){
    return "No se puede dividir entre 0";   
}
    return x/y;
}
/*
var numero,N,resultado;
N=parseFloat(prompt("cantidad : "));
numero=parseFloat(prompt("Ingrese números: "));
while(numero<=cantidad){
    numero++;
    return resultado=Math.pow(numero,2); 
}
*/

   
    function calcular(){
        var x,y,op
        var res = document.getElementById("result: ").value;
        x=parseInt(document.getElementById("n1").value);
        y=parseInt(document.getElementById("n2").value);
        op=document.getElementById("oper").value;
          
        function suma(){
            return x+y;
        }
        function resta(){
            return x-y;
        }
        function multiplicacion(){
                return x*y;
        }
        function division(){
            if(y==0){
                return "no se puede dividir entre 0"
            }
            return x/y;
        }
        switch(op){
            case '1': res.value=suma()
            break;
            case '2': res.value=resta()
            break;
            case '3': res.value=multiplicacion()
            break;
            case '4': res.value=division()
            break;
            default: 
            break;
        }    
      
    }