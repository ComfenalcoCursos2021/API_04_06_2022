importScripts("funciones.js");
addEventListener("message", (e)=>{
    postMessage(eval(`${e.data.callback}(${JSON.stringify(e.data.data)})`));
})
