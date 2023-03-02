const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});
console.log(input.value);
h1.innerHTML = 'patito <br>feo';
h1.innerHTML = 'patito <br>feo';
console.log(h1.getAttribute('class'));
h1.setAttribute('class','rojo');
h1.classList.remove('roja');
input.value = '456';
console.log(document.createElement('spam'));
const img = document.createElement('img');
img.setAttribute('src', 'https://static.wixstatic.com/media/aa8751_1aa95fd67b9e4f13850e5de823d7fb5c~mv2.jpg/v1/fill/w_670,h_910,al_c,q_85,usm_0.66_1.00_0.01/aa8751_1aa95fd67b9e4f13850e5de823d7fb5c~mv2.jpg');
console.log(img);
pid.innerHTML = '';
pid.append(img);






















