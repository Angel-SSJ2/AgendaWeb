import { Contactos } from "../sections/Contacto/Contactos.js";
import { formularioContacto } from "../sections/formularioContacto/formularioContacto.js";
import { Tarea } from "../sections/tareas/tareas.js";
import { formularioTarea } from "../sections/formularioTarea/formularioTarea.js";
import { Perfil } from "../sections/Perfil/PErfil.js";

let container = document.getElementById("container");

const viewContacts = () => {
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.appendChild(Contactos(false)); 
};

let viewNewContacts = function(){
    container.innerHTML = "";
    container.appendChild(formularioContacto());
}

let viewTareas = function(){
    container.innerHTML = "";
    container.appendChild(Tarea());
}

let viewNewTareas = function(){
    container.innerHTML = "";
    container.appendChild(formularioTarea());
}
const viewFavoritos = () => {
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.appendChild(Contactos(true)); 
};

const viewPerfil = () => {
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.appendChild(Perfil());
};

export { viewContacts, viewNewContacts, viewTareas, viewNewTareas, viewFavoritos, viewPerfil };   