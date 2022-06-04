import {obj} from './servicios.js';
const ws = new Worker("ws.js");
addEventListener("DOMContentLoaded", ()=>{
    let btn = document.querySelector("button");
    let carga = document.querySelector(".carga");
    btn.addEventListener("click", async()=>{
        carga.innerHTML = "Cargando....";
        ws.postMessage({callback: "getUsuario", data: await obj.usuario()});
    });

    ws.addEventListener("message", (e)=>{
        carga.innerHTML = "";
        console.log(e.data);
        document.body.insertAdjacentHTML("beforeend", e.data.message);
    })
})


