 const n1 = document.querySelector('[data-n1]')
 const n2 = document.querySelector('[data-n2]')
 const resultado = document.querySelector('[data-resultado]')
 const soma = document.querySelector('[data-soma]')
 
function somar(){
     resultado.innerHTML = parseFloat(n1.value) + parseFloat(n2.value)
 }

 function subtrair(){
    resultado.innerHTML = parseFloat(n1.value) - parseFloat(n2.value)
}

function multiplicar(){
    resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value)
}

function dividir(){
    resultado.innerHTML = parseFloat(n1.value) / parseFloat(n2.value)
}
