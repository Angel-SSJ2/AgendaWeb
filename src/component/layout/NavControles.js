import { Contactos } from "../sections/Contacto/Contactos.js";
import { formularioContacto } from "../sections/formularioContacto/formularioContacto.js";
import { Tarea } from "../sections/tareas/tareas.js";
import { formularioTarea } from "../sections/formularioTarea/formularioTarea.js";

let container = document.getElementById("container");

let viewContacts = function(){    
    container.innerHTML = "";
    container.appendChild(Contactos());
}

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

export { viewContacts, viewNewContacts, viewTareas, viewNewTareas };   