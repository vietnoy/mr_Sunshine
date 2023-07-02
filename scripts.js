import { gravity } from "./gravity.js";
import { weightCalculation } from './weightCalculationFunction.js';
const answer = document.querySelector('p');
const input = document.querySelector('input');
const submit = document.querySelector('button');
const select = document.querySelector('select');
const image = document.querySelector('img');
const defaultImage = `./images/earth.png`;
image.src = defaultImage;
const fisrtOption = select[0].value;
submit.addEventListener('click',() => {
    if(select.value == fisrtOption) answer.innerHTML = 'Please select a planet';
    else {
        if(input.value === '') answer.innerHTML = 'Please input weight';
        else {
            let gravityOfPlanet = gravity[select.value];
            image.src = `./images/${select.value}.png`;
            answer.innerHTML =`Your weight on ${select.value.toUpperCase()} is ${weightCalculation(input.value,gravityOfPlanet)}`;
        }
    }
});