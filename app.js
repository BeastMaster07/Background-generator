var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var body = document.getElementById('gradient');
var h3 = document.querySelector('h3');
var direction = document.querySelector('#direction');

function changeBackground () {
    body.style.background = 'linear-gradient(to ' + direction.value + ', ' + color1.value + ', ' + color2.value + ')';
    h3.textContent = body.style.background + ';' ;
    console.log(direction.value);
}

color1.addEventListener('input', changeBackground);

color2.addEventListener('input', changeBackground);  

direction.addEventListener('input', changeBackground);