const n1 = document.querySelector('[data-n1]')
const n2 = document.querySelector('[data-n2]')
const resultado = document.querySelector('span')


function somar(){
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
}

console.log( n1 + n2 )
function subtrair(){
    resultado.innerHTML = parseFloat(n1.value) - parseFloat(n2.value)
}
function multiplicar(){
    resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value)
}
function dividir(){
    resultado.innerHTML = parseFloat(n1.value) / parseFloat(n2.value)
}
function limpar()