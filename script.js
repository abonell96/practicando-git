function consumirServicio(contenedor, url, parametros, niveles, callback){
    console.log(`Contenedor: ${contenedor},\nUrl: ${url},\nParametros: ${parametros},\nNiveles: ${niveles},\nCallback: ${callback}`);
}

consumirServicio('#contenedor_principal', 'https://8bc7-177-240-51-61.ngrok.io/administrador-contenido/', JSON.stringify({Nombre: 'Alfredo', Apellido: 'Bonell'}), '../../', 'callback');

//Desarrollador uno

function resta(num1, num2){
    let resultado = num1 - num2;
    console.log(`Resultado: ${resultado}`);
}

resta(20, 10)

//Desarrollador dos

