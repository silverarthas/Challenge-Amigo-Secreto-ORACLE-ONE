// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*Defino la variable de array para la lista de amigos a ingresar*/
let listaAmigos = []; 
/*funcion para capturar los nombres, almacenarlos en array y limpiar la caja*/
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo.trim() === "") {
        alert("Dioj! el campo no puede estar vacio!");
    }
    else{
        listaAmigos.push(amigo);
        document.getElementById("amigo").value = "";
        console.log(amigo);
        console.log(listaAmigos);
        updateList();
    }
    
}

/*funcion para agregar los amigos a una lista y mostrarlos en pantalla*/
function updateList(){
    let listaVisibleAmigos = document.getElementById("listaAmigos");
    listaVisibleAmigos.innerHTML = "";
    for (let amigo of listaAmigos) {
        listaVisibleAmigos.innerHTML += `<li>${amigo}</li>`;    
    }
}
