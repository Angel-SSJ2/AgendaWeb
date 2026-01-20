import { TareaList } from "../tareas/dbt.js";
import {viewTareas} from "../../layout/NavControles.js";

let formularioTarea = () => {
    let formContainer = document.createElement("section");
    formContainer.id = "tarea-form";
    formContainer.className = "tarea-form";

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre de la tarea";
    inputNombre.className = "form-input";

    let inputDescripcion = document.createElement("input");
    inputDescripcion.type = "text";
    inputDescripcion.placeholder = "Descripción de la tarea";
    inputDescripcion.className = "form-input";

    let crearSelect = (Label, opciones) => {
        let div = document.createElement("div");
        let label = document.createElement("label");
        label.textContent = Label;

        let select = document.createElement("select");
        select.className = "form-input";

        opciones.forEach(opcion => {
            let option = document.createElement("option");
            option.value = opcion;
            option.textContent = opcion;
            select.appendChild(option);
        });

        div.appendChild(label);
        div.appendChild(select);
        return div; 
    };

    let selectEstado = crearSelect("Estado:", ["Pendiente", "En Progreso", "Completada"]);

    let submitBtn = document.createElement("button");
    submitBtn.type = "button"; 
    submitBtn.textContent = "Guardar Tarea";
    submitBtn.className = "submit-button";

    formContainer.append(inputNombre, inputDescripcion, selectEstado, submitBtn);

   submitBtn.onclick = (e) => {
        e.preventDefault();

        if (inputNombre.value === "" || inputDescripcion.value === "") {
            alert("Por favor, completa todos los campos");
            return;
        }
        
        const valorEstado = selectEstado.querySelector("select").value;

        const nuevaTarea = {
            nombre: inputNombre.value,
            descripcion: inputDescripcion.value,
            estado: valorEstado 
        };

        TareaList.push(nuevaTarea);

        inputNombre.value = "";
        inputDescripcion.value = "";
        viewTareas();
    };

    return formContainer; 
};

export { formularioTarea };