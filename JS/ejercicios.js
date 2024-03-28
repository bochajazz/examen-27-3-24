/* Enunciado

1- Resolver el problema utilizando javascript, para identificar una figura geométrica:

Teniendo una variable numérica que representa el número de lados de una figura geométrica, mostrar por consola su tipo. Los tipos son: "Círculo", "Triángulo", "Cuadrado", "Pentágono", "Hexágono" o "Polígono", según corresponda:

Círculo: si el número de lados es 0.
Triángulo: si el número de lados es 3.
Cuadrado: si el número de lados es 4.
Pentágono: si el número de lados es 5.
Hexágono: si el número de lados es 6.
Polígono: si el número de lados es mayor que 6.
Asegúrate de incluir un mensaje de error si el número de lados es menor o igual a cero.

2- Mejorar el ejercicio anterior con manejo de errores:

Modifica la función tipoFigura para que, además de determinar el tipo de figura geométrica, verifique que el número de lados sea válido (mayor o igual a cero). Si el número de lados es menor a cero,  debe mostrar  un mensaje de error indicando que el número de lados no es correcto.

3- Mejorar el ejercicio anterior para calcular el perímetro de la figura geométrica:

Amplía la funcionalidad del programa definiendo ademas una variable numerica que representa el largo de un lado,  calcule y retorne el perímetro de la misma. El perímetro de una figura geométrica se calcula sumando las longitudes de todos sus lados. Si es un círculo, el perímetro será la circunferencia, calculada como 2 * π * radio, donde π es una constante (aproximadamente 3.14159) y radio es el radio del círculo.
 (para simplificar el ejercicio, se toma solo 1 lado asumiendo que todos los lados restantes son iguales) .

IMPORTANTE: resolver el enunciado de la forma que creas conveniente, si deseas organizarlo usando una o mas funciones o escribir el código directamente
*/

function figura(lado){
    
    if (lado <= 0){
        return "El número de lados no es correcto";
    }

    if (lado <= 1){
        return "El número de lados no es correcto";
    }

    if (lado <= 2){
        return "El número de lados no es correcto";
    }

    else if (lado === 0){
        return "La figura geométrica es un Círculo";
        
    }

    else if (lado > 2 && lado < 4 ){
        return "La figura geométrica es un Triángulo";
    }

    else if (lado > 3 && lado < 5 ){
        return "La figura geométrica es un Cuadrado";
    }
    
    else if (lado > 4 && lado < 6){
        return "La figura geométrica es un Pentágono";
    }

    else if (lado > 5 && lado < 7){
        return "La figura geométrica es un Hexágono";
    }

    else {return "La figura geométrica es un Polígono";}
    

}

console.log(`${figura(6)}`);
