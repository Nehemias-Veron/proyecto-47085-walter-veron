const menu = [
    {
        menu: 'ñoquis con bolognesa',
        promocion_de_la_semana: 'take o way o buscarlo por el local',
        precio: 2500,
        stock: true,

    },

    {
        menu: 'milanesa de ternera con papas al horno',
        promocion_de_la_semana: 'take o way o buscarlo por el local',
        precio: 3000,
        stock: true,
    }
];

const mostrarMenu = () => {
    let mensaje = "\nMenu disponibles: \n";
    menu.forEach((item) => {
        mensaje += `\nMenu: ${item.menu} \nPromocion de la semana: ${item.promocion_de_la_semana} \nPrecio: ${item.precio}. \n--------------\n`
    },
    ); 
    console.log(mensaje);

} 
 mostrarMenu(); 

const agregarTipodemenu = () => {
let menu = prompt('elegi el tipo de menu que vas a querer');
let promocion_de_la_semana = prompt('elegi  take o way o buscarlo por el local');
let precio = prompt('elegi la forma de pago');



}