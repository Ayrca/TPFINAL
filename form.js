//utilizo libreria filesaver para utilizar el objeto blob
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");
let btnEnviar = document.getElementById("enviar");
let informacion = [];

btnEnviar.addEventListener("click", (Event) => {
    Event.preventDefault();// previene acciones por defecto del form
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = email.value;
    informacion[3] = mensaje.value;
    console.log(`Su numbre es ${informacion[0]}, su apellido es ${informacion[1]}, su email es${informacion[2]}, su consulta es${informacion[3]}`);
    let blob = new Blob([informacion], { type: "text/plain;charset=utf-8" }); //navegador
    saveAs(blob, "contacto.txt");
})






