var pesoMexicano = 19.88;
var dolarAmericano = 1;
var dolarCanadience = 1.35;
var Euro = 0.99;

const input = document.querySelector('input');
const log = document.getElementById('log');
input.addEventListener('change', updateValue);
function updateValue(e){
    log.textContent = e.target.value;
}

function Calcular(){
    let pesoMexicano = document.getElementById('PesoMexicano').value;
    let dolarAmericano = document.getElementById('dolarAmericano').value;
    let dolarCanadiense = document.getElementById('dolarCanadience').value;
    let Euro = document.getElementById('Euro').value;
}