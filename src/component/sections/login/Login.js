
let login = function() { 
    
    let container = document.createElement("div");
    container.className = "login";

    let h3 = document.createElement("h3");
    h3.innerHTML = "Login";

    let user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario";

    let password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Password";

    let button = document.createElement("button");
    button.innerHTML = "Iniciar Sesión";

    button.onclick = function(){
        window.location.href= "../../src/app.html";
    }

    container.appendChild(h3);
    container.appendChild(user);
    container.appendChild(password);
    container.appendChild(button);

    return container;
}

export { login };
