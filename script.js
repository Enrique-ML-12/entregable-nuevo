let formulario= document.getElementById('miformulario');
let mensaje= document.getElementById('mensaje')

formulario.addEventListener("submit",function(evento){evento.preventDefault();

let textonombre=document.getElementById("nombre").value;
let textocorreo=document.getElementById("correo").value;
let seleccionarinteres=document.getElementById("interes").value;

if (textonombre==="") {
    mensaje.innerHTML="<p class='resultado' style='background-color:red; color:blue;'>NO se ha completado Nombre y Apellido</p>"
    return;
}

if (textocorreo==="") {
    mensaje.innerHTML="<p class='resultado' style='background-color:red; color:blue;'>NO se ha colocado el correo</p>"
    return;
}

if (seleccionarinteres==="") {
    mensaje.innerHTML="<p class='resultado' style='background-color:red; color:blue;'>NO se ha seleccionado la carrera</p>"
    return;
mensaje.innerHTML="<p class='resultado' style='background-color:green; color:black;'>Se ha registrado exitosamente</p>"
}

});