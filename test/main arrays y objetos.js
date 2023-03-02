                                  //platzi juan Diego
/*function imprimirPrimerElementoArray(arr){
    console.log(arr[0])
}
imprimirPrimerElementoArray([`Juanita`,`Rigoberto`,`natalia`]);

*/

/*
function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i ++) {
    console.log(arr[i])
}
}
imprimirElementoPorElemento([`juanita`,`rigo`,`natalia`])
*/


/*
const obj = {
    nombre:`fulanito`,
    edad:43,
    comidasFavoritas:[`pollo`,`vegetales`],
};


Object.values(obj);
function imprimirElementoPorElementoObjeto(obj){
const arr = Object.values(obj);
for (i = 0 ; i < arr.length ; i ++){
    console.log(arr[i]);
}
}
*/

                    //OBJETOS
/*const b = {
}
console.log(b);
*/
/*
const jhon = {
    nombre:`jhon`,
    apellido:`mircha`,
    edad:44,
    pasatiempos:[`corres`,`hacer ejercicios`,`dar clases`],
    soltero:`false`,
    contacto:{
        email:`jhonmircha@gail.com`,
        movil:352659874,
        twiter:`@mircha`,
        
    },
    saludar:function () {
        console.log(`hola`);
        
    }
}
console.log(jhon[`edad`]);
console.log(jhon.contacto.movil);
jhon.saludar();
decirMiNombre:function (){
    console.log(`Hola me llamo ${this.nombre} ${this.edad} años y me puedes seguir como ${this.contacto.twiter}en twiter`)
}

jhon.decirMiNombre();
*/

                           //https://www.youtube.com/watch?v=a7b4S9Zk65w

/*let customer = {
    name:'Escaleras Rodriguez',
    vat:`ESB333333`,
    address:`c/ Casanova 1001`,
    isActive:true,
    contactName:`Manuel Garcia`,
    created_at:`1621065968876`,
}
    for(prop in customer){
        console.log(prop);
        console.log(customer[prop]);

    }

  */
 
    

                          //https://www.youtube.com/watch?v=rfm0lWiCk4k


/*
let frutas = {
    familia :'citricos',
    cantidad: 200,
    tipo: ['limon','naranja','mandarina']
}
console.log(frutas);
*/

/*
let usuario = {
    nombre: 'Maria',
    edad: 20,
    estudiante: true,
    'tiene pasaporte': true,
    idiomas:{
        nativo:'español',
        extranjero:{
            ingles:'avanzado',
            frances:'medio',
            aleman:'bajo'
        }
    }
}
console.log(usuario);
console.log(usuario.nombre);
console.log(usuario.edad);
console.log(usuario.estudiante);
//agregar propiedades
usuario.carrera = 'contabilidad';
console.log(usuario);
//eliminar una propiedad
delete usuario.edad;
console.log(usuario);
//consultar si existe una propiedad
//console.log(usuario.hasOwnproperty('nombre'));
//console.log(usuario.hasOwnproperty('apellido'));

// acceder a las propiedades con corchete
console.log(usuario['estudiante']);
console.log(usuario['tiene pasaporte']);
console.log(usuario.idiomas.extranjero.frances);
console.log(usuario.idiomas['extranjero'].frances);

*/


                                     //constructores de objetos.
                                     

/* function Disco(artist,album,year){
    this.artist = artist;
    this.album = album;
    this.year = year;
 }                                    
let Disco3 = new Disco('Beach house','Bloom',2012);
console.log (Disco3);

let Disco4 = new Disco('Bjork','volta',2007);
console.log (Disco4);
*/

/*
let numeros = [5,10,15,60,8]
console.log(numeros);
let numeroMaximo = 0;
console.log(numeroMaximo);
let tamaño = numeros.length;
console.log(tamaño);
for ( let i = 0; i < tamaño; i++){
console.log(i);
if (numeroMaximo < numeros[i] ){
    numeroMaximo = numeros[i]
}
}
console.log(numeroMaximo);
*/

/*
//seleciona el maximo y minimo numero de un array
let maximo = Math.max(5,10,15,6,8)
console.log(maximo);
let minimo = Math.min(5,48,7,2,95,)
console.log(minimo);
*/
/*
//crear un array: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
let frutas = ['manzanas','Banana','pera','mango'];
console.log(frutas.length);

//acceder a un elemento de array por su indice
let primero = frutas[0];
console.log(primero);

let ultimo = frutas[frutas.length -4]
console.log(ultimo);

//recorrer un array
frutas.forEach(function(elemento,indice,array){
    console.log(elemento,indice);
})

//añadir un elemento al final de un array
let nuevaLongitud = frutas.push('naranja');
console.log(nuevaLongitud);
frutas.forEach(function(elemento,indice,array){
    console.log(elemento,indice);
})
//eliminar el ultimo elemento de un array
let ultim = frutas.pop('naranja');
frutas.forEach(function(elemento,indice,array){
    console.log(elemento,indice);
})

//añadir un elemento al principio de un array
let añadir = frutas.unshift('fresa');
frutas.forEach(function(elemento,indice){
    console.log(elemento,indice);
})

//Eliminar el primer elemento de un array
let eliminar = frutas.shift();
frutas.forEach(function(elemento,indice){
    console.log(elemento,indice);
})

//Encontrar el indice de un elemento del array (no entiendo)
frutas.push('fresa');
frutas.forEach(function(elemento,indice){
    console.log(elemento,indice);
})
let pos = frutas.indexOf('banana')
frutas.forEach(function(elemento,indice){
    console.log(elemento,indice);
})

//Eliminar un unico elemento mediante su posicion (no entiendo)
let elementoEliminado = frutas.splice(pos, 1);
frutas.forEach(function(elemento,indice){
    console.log(elemento,indice);
})
*/




//Eliminar varios elementos a partir de una posicion
/*
let vegetales = ['Repollo','Nabo','Rabano','zanahoria'];
console.log(vegetales);
let pos = 1, numElementos = 2;
let elementosEliminados = vegetales.splice(pos,numElementos);
console.log(elementosEliminados);
console.log(vegetales);
*/





const fruit = [];
fruit.push('banana','manzana','pera');
console.log(fruit.length);


fruit[5] = 'fresa';
console.log(fruit[5]);
console.log(Object.keys(fruit));
console.log(fruit.length);






















































/*950101010 radicado


6017488888
*/