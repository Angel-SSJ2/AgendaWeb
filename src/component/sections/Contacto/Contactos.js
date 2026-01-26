import { ItemContacto } from "../../common/itemContacto/ItemContacto.js"; 
import { formularioContacto } from "../formularioContacto/formularioContacto.js";    
import { ContactList, setContactList } from "./db.js";  

let Contactos = (soloFavoritos = false) => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos-container"; 
        
    let listaDiv = document.createElement("div");
    listaDiv.className = "lista-contactos";

    let visorDetalle = document.createElement("div");
    visorDetalle.className = "visor-detalle";
    visorDetalle.id = "visor-detalle";
    visorDetalle.innerHTML = `<p>Selecciona un contacto para ver su información</p>`;

    const pintarLista = () => {
        listaDiv.innerHTML = soloFavoritos ? "<h2>Favoritos</h2>" : "<h2>Contactos</h2>"; 
        
        const listaAMostrar = soloFavoritos 
            ? ContactList.filter(c => c.favorito) 
            : ContactList;

        listaAMostrar.forEach((contacto) => {
            let item = ItemContacto(
                "usuario.svg", 
                contacto.nombre, 
                contacto.telefono, 
                contacto.correo, 
                (datos) => renderizarDetalle(datos, visorDetalle, eliminarYRefrescar, irAEditar, toggleFavorito)
            );
            listaDiv.appendChild(item);
        });
    };

    const toggleFavorito = (contacto) => {
        contacto.favorito = !contacto.favorito;
        //console.log(`${contacto.nombre} ahora es favorito: ${contacto.favorito}`);
        renderizarDetalle(contacto, visorDetalle, eliminarYRefrescar, irAEditar, toggleFavorito);
        pintarLista(); 
    };

    const eliminarYRefrescar = (nombre) => {
        if (confirm(`¿Borrar a ${nombre}?`)) {
            const nuevaLista = ContactList.filter(c => c.nombre !== nombre);
            setContactList(nuevaLista); 
            pintarLista(); 
            visorDetalle.innerHTML = "<p>Contacto eliminado.</p>"; 
        }
    };

    const irAEditar = (contacto) => {
        const root = document.getElementById("container");
        if (root) {
            root.innerHTML = ""; 
            root.appendChild(formularioContacto(contacto));
        }
    };

    pintarLista(); 
    sectionContactos.append(listaDiv, visorDetalle);
    return sectionContactos;    
};

const renderizarDetalle = (contacto, contenedor, fnEliminar, fnEditar, fnFavorito) => {
    contenedor.innerHTML = "";
    let card = document.createElement("div");
    card.className = "detalle-card";

    let btnFav = document.createElement("button");
    btnFav.textContent = contacto.favorito ? "★ Favorito" : "☆ Añadir a favoritos";
    btnFav.style.backgroundColor = contacto.favorito ? "#f1c40f" : "#2ecc71"; 
    btnFav.onclick = () => fnFavorito(contacto);

    let h3 = document.createElement("h3");
    h3.textContent = contacto.nombre;

    let pInfo = document.createElement("div");
    pInfo.innerHTML = `<p><strong>Tel:</strong> ${contacto.telefono}</p>
                       <p><strong>Email:</strong> ${contacto.correo}</p>`;

    let btnEdit = document.createElement("button");
    btnEdit.textContent = "Editar";
    btnEdit.className = "btn-edit";
    btnEdit.onclick = () => fnEditar(contacto);

    let btnDelete = document.createElement("button");
    btnDelete.textContent = "Eliminar";
    btnDelete.className = "btn-delete";
    btnDelete.onclick = () => fnEliminar(contacto.nombre);

    card.append(btnFav, h3, pInfo, btnEdit, btnDelete);
    contenedor.appendChild(card);
};

export { Contactos };