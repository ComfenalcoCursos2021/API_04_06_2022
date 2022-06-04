let usuario = async()=>{
    let peticion = await fetch("https://jsonplaceholder.typicode.com/todos");
    let json = await peticion.json();
    return json;
}

export const obj = {
    usuario
};