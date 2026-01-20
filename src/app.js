import { Button } from "./component/common/button/Button.js";  
import { Contactos } from "./component/sections/Contacto/Contactos.js";
import { formularioContacto } from "./component/sections/formularioContacto/formularioContacto.js";
import { viewContacts } from "./component/layout/NavControles.js";
import { viewNewContacts } from "./component/layout/NavControles.js";
import { saveContactsToStorage, getContactsFromStorage } from './storage.js';
//App
let app = document.getElementById("app");

//Menu
let nav = document.getElementById("nav");


nav.appendChild(Button(
    "Agenda", 
    "agenda", 
    "agendaa.svg", 
    viewContacts
));
nav.appendChild(Button(
    "Crear Contacto", 
    "cont", 
    "telefono.svg",
    viewNewContacts
));
nav.appendChild(Button("ToDoList", "todo", "lista.svg"));
nav.appendChild(Button("Agregar", "add", "agregar.svg"));

//container
let container = document.getElementById("container");

container.innerHTML = "";
container.appendChild(Contactos());

//container.appendChild(Contactos());
//container.appendChild(formularioContacto());
//app.appendChild(nav);
//app.appendChild(container);
