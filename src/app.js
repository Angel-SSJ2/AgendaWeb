import { Button } from "./component/common/button/Button.js";  
import { Contactos } from "./component/sections/Contacto/Contactos.js";
import { formularioContacto } from "./component/sections/formularioContacto/formularioContacto.js";
import { viewContacts } from "./component/layout/NavControles.js";
import { viewNewContacts } from "./component/layout/NavControles.js";
import { viewTareas } from "./component/layout/NavControles.js";
import { viewNewTareas } from "./component/layout/NavControles.js";
import { viewFavoritos } from "./component/layout/NavControles.js";
import { viewPerfil } from "./component/layout/NavControles.js";

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
nav.appendChild(Button(
    "ToDoList", 
    "todo", 
    "lista.svg", 
    viewTareas
));
nav.appendChild(Button(
    "Agregar", 
    "add", 
    "agregar.svg", 
    viewNewTareas));

nav.appendChild(Button(
    "Favoritos", 
    "favs", 
    "estrella.svg", 
    viewFavoritos));

nav.appendChild(Button(
    "Mi Perfil", 
    "perfil", 
    "usuario.svg", 
    viewPerfil
));

let container = document.getElementById("container");

container.innerHTML = "";
container.appendChild(Contactos());

async function tareas() {
    try {
        let datos = await fetch("https://jsonplaceholder.typicode.com/posts");
        let r = await datos.json();
        console.log(r);
    } catch (error) {
        console.log("Error al obtener las tareas:", error);
    }
}

tareas();

console.log("completado");

export { app };
