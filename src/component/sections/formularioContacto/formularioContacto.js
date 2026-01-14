import { ContactList } from "../Contacto/db.js";

let formularioContacto = () => {
    // 1. Crear el contenedor principal del formulario
    const formContainer = document.createElement("form");
    formContainer.id = "contacto-form";
    formContainer.className = "custom-form";

    // 2. Crear los inputs
    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre completo";
    inputNombre.required = true;
    inputNombre.className = "form-input";

    const inputTel = document.createElement("input");
    inputTel.type = "tel";
    inputTel.placeholder = "Teléfono";
    inputTel.required = true;
    inputTel.className = "form-input";

    // 3. Crear el botón de envío
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Guardar Contacto";
    submitBtn.className = "submit-button";

    // 4. Agregar elementos al contenedor
    formContainer.append(inputNombre, inputTel, submitBtn);

    // 5. Evento solicitado
    formContainer.addEventListener("submit", (e) => {
        e.preventDefault();

        let contacto = {
            nombre: inputNombre.value,
            telefono: inputTel.value
        };

        console.log("Contacto guardado:", contacto);
        ContactList.push(contacto);

        // Opcional: Limpiar el formulario tras el envío
        formContainer.reset();
    });

    return formContainer;
};

export { formularioContacto };