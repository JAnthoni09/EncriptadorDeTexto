//Declaro los valores de mi HTML "botones y textarea y pantalla de salida"//
const borrarBtn =  document.getElementById("borrar");
const chatPrincipal = document.getElementById("chat-principal");
const pantalla = document.querySelector(".pantalla");
const encriptarBtn = document.getElementById("encriptar");
const desencriptarBtn = document.getElementById("desencriptar");
const copiarBtn = document.getElementById("copiar");

//funcion para que apenas cargue la pagina se pueda escribir
chatPrincipal.focus();

//aqui defino el comportamiento y que funciones deben llamar cada boton//

borrarBtn.addEventListener("click", () => {
    chatPrincipal.value = "";
    pantalla.textContent = "";
    chatPrincipal.focus();
});

encriptarBtn.addEventListener("click", function(){
    const texto = chatPrincipal.value;
    const textoEncriptado = encriptarTexto(texto);
    pantalla.textContent = textoEncriptado;
});

//Registro de evento para que la tecla "enter" accione el boton de encriptar//
chatPrincipal.addEventListener("keydown", function(evento){
    if (evento.keyCode === 13){
        evento.preventDefault();
        encriptarBtn.click();
    }
});

desencriptarBtn.addEventListener("click", function(){
    const texto = chatPrincipal.value;
    const textoDesencriptado = desencriptarTexto(texto);
    pantalla.textContent = textoDesencriptado;
});

copiarBtn.addEventListener("click", function(){
    const texto = copiar()
});


//Creo mi encriptador usando una estructura if else para reemplazar el caracter por los caracteres correspondientes//

function encriptarTexto(texto){
    var textoEncriptado = "";
    for(var i = 0; i < texto.length; i++){
        var letra = texto.charAt(i);
        if (letra === "a"){
            textoEncriptado += "ai";
        }else if(letra === "e"){
            textoEncriptado += "enter";
        }else if(letra === "i"){
            textoEncriptado += "imes";
        }else if(letra === "o"){
            textoEncriptado += "ober";
        }else if(letra === "u"){
            textoEncriptado += "ufat";
        }else{
            textoEncriptado += letra;
        }
    }
    return textoEncriptado;
}

//Aqui creo el desencriptador usando el un cliclo 'while' ya que necesito procesar cada iteracion dependiendo del numero de caracteres que hay que reemplazar, utilizo 'substr' para poder indicar la longitud del valor a cambiar//
function desencriptarTexto(textoEncriptado){
    var textoDesencriptado = "";
    var j = 0;
    while (j < textoEncriptado.length){
        var letra1 = textoEncriptado.charAt(j);
        if (letra1 === "a" && textoEncriptado.substr(j, 2) === "ai"){
            textoDesencriptado += "a";
            j += 2;
        }else if(letra1 === "e" && textoEncriptado.substr(j, 5) === "enter"){
            textoDesencriptado += "e";
            j += 5;
        }else if(letra1 === "i" && textoEncriptado.substr(j, 4) === "imes"){
            textoDesencriptado += "i";
            j += 4;
        }else if(letra1 === "o" && textoEncriptado.substr(j, 4) === "ober"){
            textoDesencriptado += "o";
            j += 4;
        }else if(letra1 === "u" && textoEncriptado.substr(j, 4) === "ufat"){
            textoDesencriptado += "u";
            j += 4;
        }else{
            textoDesencriptado += letra1;
            j++;
        }
    }
    return textoDesencriptado;
}

//funcion para copiar el texto de la pantalla de salida//
function copiar(){
    const texto = pantalla.textContent;
    navigator.clipboard.writeText(texto)
    .then(() => {})
}
