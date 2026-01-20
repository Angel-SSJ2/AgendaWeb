import { login } from "./src/component/sections/login/Login.js"
let root = document.getElementById("root");

let loginContainer = login();

root.appendChild(loginContainer);