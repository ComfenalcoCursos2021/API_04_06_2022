let getUsuario = (data)=>{
    let plantilla = "";
    for (let val of data) {
        console.log(`<b>Identificador:</b> ${val.id} <b>Titulo:</b> ${val.title}<br>`);
        plantilla += `<b>Identificador:</b> ${val.id} <b>Titulo:</b> ${val.title}<br>`;
    }
    return {id: 'getUsuario', message: plantilla};
}
