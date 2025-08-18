// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
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

/*funcion para sortear amigos*/
function sorteo(){
    let seleccionado = "";
    let amigo = listaAmigos.length;
    let indice = Math.floor(Math.random()*listaAmigos.length);
    if (amigo === 0) {
        alert("Dioj! la lista no puede estar vacia!");
        return
    }
    else{
        seleccionado = listaAmigos[indice];
        alert(`el amigo seleccionado es ${seleccionado}`)
        let listaVisibleAmigos = document.getElementById("listaAmigos");
        listaVisibleAmigos.innerHTML = `el amigo seleccionado es ${seleccionado}`;
        listaAmigos=[];
    }
    console.log(`el numero aleatroio es ${indice}`);
    console.log(`la cantidad de amigo(s) es/son ${amigo}`);
}


