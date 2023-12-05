//---------------------------------Variables-------------------------------//
let slots = ["","","","","","","","",""]
let turnos = 0

let equis = [document.getElementById("equis1"), 
document.getElementById("equis2"), 
document.getElementById("equis3"),
document.getElementById("equis4"),
document.getElementById("equis5"),
document.getElementById("equis6"),
document.getElementById("equis7"),
document.getElementById("equis8"),
document.getElementById("equis9")]

let circulos = [document.getElementById("circulo1"), 
document.getElementById("circulo2"), 
document.getElementById("circulo3"),
document.getElementById("circulo4"),
document.getElementById("circulo5"),
document.getElementById("circulo6"),
document.getElementById("circulo7"),
document.getElementById("circulo8"),
document.getElementById("circulo9")]


let cuadros = [document.getElementById("cuadro1"), 
document.getElementById("cuadro2"), 
document.getElementById("cuadro3"),
document.getElementById("cuadro4"),
document.getElementById("cuadro5"),
document.getElementById("cuadro6"),
document.getElementById("cuadro7"),
document.getElementById("cuadro8"),
document.getElementById("cuadro9")]

let victoria = document.getElementById("victoria")
let textoVictoria = document.getElementById("titulo")
let playAgain = document.getElementById("playAgain")
//---------------------------------Variables-------------------------------//
//---------------------------------funciones-------------------------------//
function ganoO() {
    victoria.style.top = '0rem'
    victoria.style.transition = '.5'
    textoVictoria.innerText = '0s wins'
}
function ganoX() {
    victoria.style.top = '0rem'
    victoria.style.transition = '.5'
    textoVictoria.textContent = 'Exs Wins'
    
}
function draw() {
    victoria.style.top = '0rem'
    victoria.style.transition = '.5'
    textoVictoria.textContent = 'Draw'
    
}

function comprobaciones(){
    let timer = setInterval(() => {
        switch(true){

            case victoria.style.top == '0rem' :
                clearInterval(timer)
                break
            // Horizontales-------------------------------------------
            case slots[0] == "o" && slots[3] == "o" && slots[6] == "o":
                ganoO()
                break
            case slots[1] == "o" && slots[4] == "o" && slots[7] == "o":
                ganoO()
                break
            case slots[2] == "o" && slots[5] == "o" && slots[8] == "o":
                ganoO()
                break
            // Horizontales-------------------------------------------



            // Verticales--------------------------------------------
            case slots[0] == "o" && slots[1] == "o" && slots[2] == "o":
                ganoO()
                break
            case slots[3] == "o" && slots[4] == "o" && slots[5] == "o":
                ganoO()
                break
            case slots[6] == "o" && slots[7] == "o" && slots[8] == "o":
                ganoO()
                break
            // Verticales---------------------------------------------


            //Diagonales----------------------------------------------
            case slots[0] == "o" && slots[4] == "o" && slots[8] == "o":
                ganoO()
                break
            case slots[2] == "o" && slots[4] == "o" && slots[6] == "o":
                ganoO()
                break
            
        // EQUIS------------------------------------------------------
            case slots[0] == "x" && slots[3] == "x" && slots[6] == "x":
                ganoX()
                break
            case slots[1] == "x" && slots[4] == "x" && slots[7] == "x":
                ganoX()
                break
            case slots[2] == "x" && slots[5] == "x" && slots[8] == "x":
                ganoX()
                break
            // Horizontales-------------------------------------------
            
            
            
            // Verticales--------------------------------------------
            case slots[0] == "x" && slots[1] == "x" && slots[2] == "x":
                ganoX()
                break
            case slots[3] == "x" && slots[4] == "x" && slots[5] == "x":
                ganoX()
                break
            case slots[6] == "x" && slots[7] == "x" && slots[8] == "x":
                ganoX()
                break
            // Verticales---------------------------------------------
            
            
            //Diagonales----------------------------------------------
            case slots[0] == "x" && slots[4] == "x" && slots[8] == "x":
                ganoX()
                break
            case slots[2] == "x" && slots[4] == "x" && slots[6] == "x":
                ganoX()
                break
            
            case slots[0].length == 1 && slots[1].length == 1 && slots[2].length == 1 &&
                 slots[3].length == 1 && slots[4].length == 1 && slots[5].length == 1 &&
                 slots[6].length == 1 && slots[7].length == 1 && slots[8].length == 1:

                 draw()
                 break

        }
    },100)
}

//---------------------------------funciones--------------------------------//
//---------------------------------Efecto hover----------------------------//
for(let i = 0; i < cuadros.length; i++){
    cuadros[i].addEventListener("mouseenter", () => {
        switch(true){
            case turnos % 2 == 0 && slots[i].length == 0 
            && circulos[i].style.opacity == "0":
                circulos[i].style.opacity = "0.4"
                circulos[i].style.transition = "0.5"
                break
            case turnos % 2 != 0 && slots[i].length == 0 
            && equis[i].style.opacity == "0":
                equis[i].style.opacity = "0.4"
                equis[i].style.transition = "0.5"
                  break 
                
        }
    })

    cuadros[i].addEventListener("mouseleave", () => {
        switch(true){
            case turnos % 2 == 0 && slots[i].length == 0:
                circulos[i].style.opacity = "0"
                circulos[i].style.transition = "0.5"
                break
            case turnos % 2 != 0 && slots[i].length == 0:
                  equis[i].style.opacity = "0"
                  equis[i].style.transition = "0.5"
                  break 
                
        }
    })

    cuadros[i].addEventListener("click", () => {
        if (turnos % 2 == 0 && slots[i].length == 0){
            circulos[i].style.opacity = "1"
            circulos[i].style.transition = "0.5s"
            slots[i] = "o"
            turnos++
        }
        
        else if(turnos % 2 != 0 && slots[i].length == 0){
            equis[i].style.opacity = "1"
            equis[i].style.transition = "0.5s"
            slots[i] = "x"
            turnos++
        }

    }
)

}

//---------------------------------play again-------------------------------//
playAgain.addEventListener("click", () => {
    victoria.style.top = '100rem'
    slots = ["","","","","","","","",""]

    for (let i = 0; i < slots.length;i++){
        circulos[i].style.opacity = '0'
        equis[i].style.opacity = '0'
    }

    comprobaciones()
})
comprobaciones()
//---------------------------------play again-------------------------------//
