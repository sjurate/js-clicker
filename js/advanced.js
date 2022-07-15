const divDOM = document.querySelector('div');
const btnDOM = document.querySelectorAll('button');


let number = 0;
divDOM.textContent = number;

function vienas(event) {
   divDOM.textContent = event.target.textContent === '+' ? ++number : --number;
}

function desimt(event) {
    event.preventDefault();
    number += event.target.textContent === '+' ? 10 : -10;
    //number += (event.target.textContent === '+' ? 1 : -1) * 10;
    divDOM.textContent = number ;
}
 
for (const buttonDOM of buttonsDOM)
btnDOM[0].addEventListener('click', vienas);
btnDOM[1].addEventListener('click', vienas);

btnDOM[0].addEventListener('contextmenu', desimt);
btnDOM[1].addEventListener('contextmenu', desimt);