let usuario1 = window. prompt("ingrese su nombre ")
let usuario2 = window. prompt("ingrese su nombre ")

let opcion1 = window.prompt("ingrese su opcion piedra(p), tijera (t), papel (pa)")
let opcion2 = window.prompt("ingrese su opcion piedra(p), tijera (t), papel (pa)")

switch (typeof(opcion1) == "string" && typeof(opcion2) == 'string') {
}

if (typeof(opcion1) == 'string' && typeof(opcion2) == 'string'){
    if(opcion1 == 'p' && opcion2 == 'pa'){
        window.alert('Gano' + usuario2 + ' con la opcion ' + opcion2)
    }
    else if (opcion1 == 'p' && opcion2 == 't'){
        window.alert('Gano' + usuario1 + ' con la opcion ' + opcion1)
    }
} else {
    window.alert('Por favor ingresa un caracter valido para jugar ')
    opcion1 = window.prompt("ingrese su opcion piedra(p), tijera (t), papel (pa)")
    opcion2 = window.prompt("ingrese su opcion piedra(p), tijera (t), papel (pa)")
}
    


