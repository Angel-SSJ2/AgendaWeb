import { ContactList } from "../Contacto/db.js";

let formularioContacto = (datos = null) => {
    const formContainer = document.createElement("form");
    formContainer.id = "contacto-form";
    formContainer.className = "custom-form";

    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre completo";
    inputNombre.className = "form-input";

    const inputTel = document.createElement("input");
    inputTel.type = "tel";
    inputTel.placeholder = "Teléfono";
    inputTel.className = "form-input";
    
    const inputCor = document.createElement("input");
    inputCor.type = "email"; 
    inputCor.placeholder = "Correo";
    inputCor.className = "form-input";

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = datos ? "Actualizar Cambios" : "Guardar Contacto";
    submitBtn.className = "submit-button";

    if (datos) {
        inputNombre.value = datos.nombre;
        inputTel.value = datos.telefono;
        inputCor.value = datos.correo;
    }

    formContainer.append(inputNombre, inputTel, inputCor, submitBtn);

    formContainer.addEventListener("submit", (e) => {
        e.preventDefault();

        if (datos) {
             const indice = ContactList.findIndex(c => c.nombre === datos.nombre);
            if (indice !== -1) {
                ContactList[indice] = {
                    nombre: inputNombre.value,
                    telefono: inputTel.value,
                    correo: inputCor.value
                };
            }
            alert("Contacto actualizado con éxito");
        } else {
            let nuevoContacto = {
                nombre: inputNombre.value,
                telefono: inputTel.value,
                correo: inputCor.value
            };
            ContactList.push(nuevoContacto);
            alert("Contacto creado con éxito");
        }      
       
    });

    return formContainer;
};

export { formularioContacto };