function consumirServicio(contenedor, url, parametros, niveles, callback){
    console.log(`Contenedor: ${contenedor},\nUrl: ${url},\nParametros: ${parametros},\nNiveles: ${niveles},\nCallback: ${callback}`);
}

consumirServicio('#contenedor_principal', 'https://8bc7-177-240-51-61.ngrok.io/administrador-contenido/', JSON.stringify({Nombre: 'Alfredo', Apellido: 'Bonell'}), '../../', 'callback');

//Desarrollador uno



//Desarrollador dos

