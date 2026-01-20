
let ItemContacto = (imgContacto, nombre, telefono) => {
    let div = document.createElement("div");
    div.className = "item-contacto";
    
    let img = document.createElement("img");
    img.src = `./assets/icons/${imgContacto}`;

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.textContent = nombre ;

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.textContent = telefono ;

    div.appendChild(img);
    div.appendChild(etiquetaNombre);
    div.appendChild(etiquetaTelefono);

    return div;
}

export { ItemContacto };