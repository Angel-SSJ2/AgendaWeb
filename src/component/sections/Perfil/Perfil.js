// Perfil.js
import { UsuarioActual, setUsuario } from "../Contacto/db.js";

export let Perfil = () => {
    let sectionPerfil = document.createElement("section");
    sectionPerfil.className = "perfil-container";

    let imgPerfil = document.createElement("img");
    imgPerfil.src = "usuario.svg"; 
    imgPerfil.style.width = "150px";

    let inputNombre = document.createElement("input");
    inputNombre.placeholder = "Nombre";
    inputNombre.value = UsuarioActual.nombre; 

    let inputCorreo = document.createElement("input");
    inputCorreo.placeholder = "Correo";
    inputCorreo.value = UsuarioActual.correo; 

    let inputTel = document.createElement("input");
    inputTel.placeholder = "Teléfono";
    inputTel.value = UsuarioActual.telefono; 

    let btnGuardar = document.createElement("button");
    btnGuardar.textContent = "Guardar Cambios";
    
    btnGuardar.onclick = () => {
        setUsuario({
            nombre: inputNombre.value,
            correo: inputCorreo.value,
            telefono: inputTel.value
        });
        alert("Datos guardados en memoria");
    };

    sectionPerfil.append(imgPerfil, inputNombre, inputCorreo, inputTel, btnGuardar);
    return sectionPerfil;
};