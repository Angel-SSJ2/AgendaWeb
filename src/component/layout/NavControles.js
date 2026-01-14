import { Contactos } from "../sections/Contacto/Contactos.js";
import { formularioContacto } from "../sections/formularioContacto/formularioContacto.js";

let container = document.getElementById("container");

let viewContacts = function(){    
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewNewContacts = function(){
    container.innerHTML = "";
    container.appendChild(formularioContacto());
}

export { viewContacts, viewNewContacts };   