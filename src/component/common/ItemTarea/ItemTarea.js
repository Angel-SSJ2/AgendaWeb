let itemTarea = (tarea) => {

    let { nombre, descripcion, estado } = tarea;

    let div = document.createElement("div");
    div.className = `item-tarea ${estado.toLowerCase().replace(" ", "-")}`;

    let img = document.createElement("img");
    img.src = `./assets/icons/lista.svg`;

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.textContent = nombre;

    let etiquetaDescripcion = document.createElement("p");
    etiquetaDescripcion.textContent = descripcion;
    
    let etiquetaEstado = document.createElement("span");
    etiquetaEstado.className = "estado-tarea";
    etiquetaEstado.textContent = estado;

    let selectEstado = document.createElement("select");
    ["Pendiente", "En Progreso", "Completada"].forEach(opcion => {
        let option = document.createElement("option");
        option.value = opcion;
        option.textContent = opcion;
        if (estado.toLowerCase() === opcion.toLowerCase()) {
            option.selected = true;
        }
        selectEstado.appendChild(option);
    });

    selectEstado.onchange = (e) => {
        const nuevoEstado = e.target.value;
        tarea.estado = nuevoEstado; 

        div.className = `item-tarea ${nuevoEstado.toLowerCase().replace(" ", "-")}`;
        etiquetaEstado.textContent = nuevoEstado;
    }; 

    div.appendChild(img);
    div.appendChild(etiquetaNombre);
    div.appendChild(etiquetaDescripcion);
    div.appendChild(etiquetaEstado);
    div.appendChild(selectEstado);

    return div;
}

export { itemTarea };