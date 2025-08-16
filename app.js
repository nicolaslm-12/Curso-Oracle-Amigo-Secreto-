// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
     
    if (nombre.trim()!==""){
        listaNombres.push(nombre);

        console.log(listaNombres);
        actualizarLista();
               limpiarCaja();
    }else{
        alert("Ingrese un nombre para continuar");
    }
}

function limpiarCaja(){
document.querySelector('#amigo').value = '';
}

function actualizarLista(){
    let listaHTML=document.getElementById('listaAmigos');
    listaHTML.innerHTML='';

    for (let i=0; i< listaNombres.length;i++){
        let nuevoIterm =document.createElement('li');
        nuevoIterm.textContent = listaNombres[i];
        listaHTML.appendChild(nuevoIterm);
    }
}

function sortearAmigo(){
let aleatorio = Math.floor(Math.random()*listaNombres.length);
let resultadoHTML=document.getElementById('resultado');

let amigoSecreto = listaNombres[aleatorio];
resultadoHTML.innerHTML='';

let nuevoResultado= document.createElement('span');
nuevoResultado.textContent = amigoSecreto;
resultadoHTML.appendChild(nuevoResultado);
}
