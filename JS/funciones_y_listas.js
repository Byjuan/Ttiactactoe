/*let suma = function () {
    console.log(100 + 5


suma()*/
let cuadroUno = document.getElementById('cuadro1')


//cuadroUno.addEventListener("click", function (){}) Primera forma 
//cuadroUno.addEventListener("click", function () => {}) Segunda forma 
cuadroUno.addEventListener("click", () => {
    cuadroUno.style.opacity = 0
    cuadroUno.style.transition = '2'
})
