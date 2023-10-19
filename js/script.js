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
const sugerencia = prompt('ingresa la sugerencia');
const nuevaPromocion = prompt('ingresa la promocion de la semana (por ejemplo,"take o way" o "buscarlo por el local")');
const nuevoPrecio = parseFloat(prompt('ingresa el precio del plato'));

if (sugerencia && nuevaPromocion && !isNaN(nuevoPrecio)) {
    const nuevoMenu = {
        menu: sugerencia,
        promocion_de_la_semana: nuevaPromocion,
        precio: nuevoPrecio,
        stock: true,

    };

    menu.push(nuevoMenu);
    console.log(`El plato "${sugerencia}" se agrego al menu`);
    mostrarMenu();
} else {
console.log('Los datos ingresados no son validos. Ingresa los datos correctamente');

}

};

mostrarMenu();
agregarTipodemenu();