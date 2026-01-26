
let ItemContacto = (imgContacto, nombre, telefono, correo, alHacerClic) => {
    let div = document.createElement("div");
    div.className = "item-contacto";

    div.style.cursor = "pointer";
    
    let img = document.createElement("img");
    img.src = `./assets/icons/${imgContacto}`;

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.textContent = nombre ;

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.textContent = telefono ;

    let etiquetaCorreo = document.createElement("p");
    etiquetaCorreo.textContent = correo;

    div.onclick = () => {
        if (alHacerClic){
            alHacerClic({ nombre, telefono, imgContacto, correo});
        }
    }

    div.appendChild(img);
    div.appendChild(etiquetaNombre);
    div.appendChild(etiquetaTelefono);
    div.appendChild(etiquetaCorreo);

    return div;
}

export { ItemContacto };