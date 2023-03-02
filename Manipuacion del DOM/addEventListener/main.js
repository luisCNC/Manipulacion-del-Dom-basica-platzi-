/*
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit',sumarInputValues);
function sumarInputValues (event){
   //console.log(event);
   event.preventDefault();
   //console.log('Escuchando el evento de click:');
  // console.log(input1.value + input2.value);
   const sumaInputs = input1.value + input2.value;
   pResult.innerText = 'resultado ' + sumaInputs
   
}

*/






                       //https://lenguajejs.com/javascript/eventos/addeventlistener/

/*
const button = document.querySelector('button');
button.addEventListener('click',function(){
   alert('hola');
});
*/
// funcion normal
/*const button = document.querySelector('button');
function action(){
   alert('hola');
};
button.addEventListener ('click',action);
*/
/*
//funcion flecha
const button = document.querySelector('button');
const action = () => {
   alert('hey');
}
button.addEventListener('click',action);

//multiples listeners.
const button = document.querySelector('button');
const action = () => 
   alert('Hello!');
   const toggle  = () => 
      button.classList.toggle('red');
   

button.addEventListener('click',action);
button.addEventListener('click',toggle);
button.removeEventListener('click',action);


const colores = ['Blanco','negro','azul']
colores.forEach(function(color){
   console.log(color);
});

*/





