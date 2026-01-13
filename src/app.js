import { Button } from "./component/common/button/Button.js";  

import { Contactos } from "./component/sections/Contacto/Contactos.js";

//App
let app = document.getElementById("app");

//Menu
let nav = document.getElementById("nav");

nav.appendChild(Button("Agenda", "agenda", "agendaa.svg"));
nav.appendChild(Button("Crear Contacto", "cont", "telefono.svg"));
nav.appendChild(Button("ToDoList", "todo", "lista.svg"));
nav.appendChild(Button("Agregar", "add", "agregar.svg"));

//container
let container = document.getElementById("container");

container.appendChild(Contactos());
app.appendChild(nav);
app.appendChild(container);