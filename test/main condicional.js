/*const tipoDeSuscripcion = "expert";
 switch (tipoDeSuscripcion){
    case "free":
    console.log("solo puedes tomar los cursos gratis");
    break;
    case "Basic":
    console.log("solo puedes tomar los cursos durante un mes");
    break;
    case "expert":
    console.log("solopuedes tomar casi todos los cursos durante un año");
    break;
    case "experDuo":
    console.log("Tu y alguien mas puede tomar todos los cursos durante un año");
    break;
    }
*/
  //             IF

const tipoDeSuscripcion = "expert";
if (tipoDeSuscripcion==`free`){
    console.log("solo puedes tomar un curso gatis")
} else if (tipoDeSuscripcion == `Basic`){
    console.log("solo puedes tomar los cursos durante un mes")}
    else if (tipoDeSuscripcion == `expert`){
        console.log("solo puedes tomar casi todos los cursos durante un año")}
        else if (tipoDeSuscripcion == `expertDuo`){
            console.log("Tu y alguien mas puede tomar todos los cursos durante un año")
}


let edad = 18;
if (edad >= 18){
console.log(`Eres mayor De Edad`);
} else {
console.log(`Eres Menor De Edad`);
}



let hora = 20;
if(hora >= 0 && hora <=5){
    console.log(`Dejame dormirr`);
} else if (hora >= 6 && hora <=11){
    console.log(`Buenos Dias`);
} else if (hora >= 12 && hora <=18){
    console.log(`Buenas Tardes`);
} else {
    console.log(`Buenas Noches`);
}



//operador terenario
let eresMayor = (edad >= 18)
? `Eres Mayor De Edad`
:`Eres Menor De Edad`;
console.log(eresMayor);