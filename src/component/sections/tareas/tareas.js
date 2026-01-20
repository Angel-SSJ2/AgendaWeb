import { itemTarea } from "../../common/ItemTarea/ItemTarea.js";   
import { TareaList } from "./dbt.js";
let Tarea = () => {
   
    let sectionTareas = document.createElement("section");
    sectionTareas.className = "tareas";

    let h2 = document.createElement("h2");
    h2.textContent = "Tareas";    
    sectionTareas.appendChild(h2);
    
    TareaList.forEach((tarea) => {
        sectionTareas.appendChild(itemTarea(tarea));
    });

    return sectionTareas;

}
    export { Tarea };