export let ContactList =[
    { nombre: "Juan Perez", telefono: "123456789", correo: "juanperez@gmail.com", favorito: true },
    { nombre: "María Estrada", telefono: "987654321", correo: "maria@gmail.com", favorito: false },
    { nombre: "Pedro Gomez", telefono: "555555555", correo: "pedrog@gmail.com", favorito: true },
    { nombre: "Lucía Fernández", telefono: "612345678", correo: "luciaf@gmail.com", favorito: false },
    { nombre: "Carlos Gómez", telefono: "655123987", correo: "carlosg@gmail.com", favorito: true },
    { nombre: "Elena Beltrán", telefono: "600888777", correo: "elenab@gmail.com", favorito: false }
];

export let UsuarioActual = {
    nombre: "",
    correo: "",
    telefono: ""
};

export const setUsuario = (datos) => {
    UsuarioActual.nombre = datos.nombre;
    UsuarioActual.correo = datos.correo;
    UsuarioActual.telefono = datos.telefono;
};

export const setContactList = (nuevaLista) => {
    ContactList = nuevaLista;
};