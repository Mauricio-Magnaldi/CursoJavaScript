//Declaración de variables
/*
Debido a que la constante no se puede cambiar de valor como si lo permite 
la variable, es que declaro e inicializo con el valor que da el usuario en la línea
24.
*/ 

let usuarioCategoria = '';
let vendedorNumero;
let opcion = "Y";
let articulo = "";
let articuloPrecioU;
let articuloCantidad;
let unidad;

/*
Mediante esta función defino si el stock ingresado para un articulo dado es uno o más de uno y en función
de ello se mostrará unidad o unidades.
*/

function determinarUnidad (artCant)
    {
        /*
        Puedo utilizar una constante porque la declaro y la inicializo con el argumento 
        que recibe la función cuando la llamo.
        */ 
        const cantidad = artCant;
        console.log("Dentro de la función recibo como argumento el stock (valor entero): " + cantidad);
        /*
        Debo utilizar una variable porque la declaro, la inicializo y posteriormente
        le asigno un valor u otro dependiendo del resultado del condicional.
        */ 
        let unidad ='';
        if (cantidad > 1)
                {
                    unidad = "unidades";
                }
            else
                {
                    unidad = "unidad";
                };
            return unidad;
    };


do
    {
    usuarioCategoria = prompt ("Selecciona según corresponda: 'V' - Vendedor o 'C' - Cliente.").toLowerCase();
    console.log(usuarioCategoria);
    }
while(usuarioCategoria != "v" && usuarioCategoria !="c");
console.log(usuarioCategoria);
if (usuarioCategoria == 'v')
        {
            const vendedorNumero = prompt ("¿Cuál es tu número de Vendedor: 1, 2 ó 3?");
            switch(vendedorNumero)
                {
                    case "1":
                        vendedorNombre = "Juan";
                        break;
                    case '2':
                        vendedorNombre = "Maria";
                        break;
                    case "3":
                        vendedorNombre = "Pedro";
                        break;
                    default:
                        opcion = "X";
                }
            if (opcion!="X")
                    {
                        alert("Sesión iniciada por "  + vendedorNombre + '.');
                        console.log ("Sesión iniciada por "  + vendedorNombre + '.');
                    }
                else    
                    {
                        alert("Vendedor no válido. Termina la ejecución del programa.");            
                        console.log("Vendedor no válido.");
                        console.log("Termina la ejecución del programa.");
                    };
            while (opcion != "X")
               {
                    articulo = prompt ("Ingresa el nombre del artículo.");
                    console.log ("Artículo: " + articulo);
                    articuloCantidad = parseInt(prompt ("Ingresa la cantidad."));
                    console.log ("Cantidad: " + articuloCantidad + ".-");
                    articuloPrecioU = parseFloat(prompt ("Ingresa el precio unitario del artículo."));
                    console.log ("Precio unitario: $" + articuloPrecioU + ".-");
                    console.log ("El precio unitario del artículo " + articulo + " es de $ " + articuloPrecioU + ".- más IVA.");
                    console.log ("El precio unitario del artículo " + articulo + " es de $ " + (articuloPrecioU + (articuloPrecioU * 0.21)) + ".- IVA incluído.");
                    console.log ("El artículo " + articulo + " consta de " + articuloCantidad + ' ' + determinarUnidad(articuloCantidad) + " en stock. Cuyo precio total es de $" + (articuloCantidad * (articuloPrecioU + (articuloPrecioU * 0.21))) + " IVA incluído.");
                    opcion = prompt ("'X' para salir u otra tecla para seguir agregando artículo.").toUpperCase();
                }
        }
    else
        {
            alert('Aún no contamos con el menú de Cliente.');
            console.log('Aún no contamos con el menú de Cliente.');
            console.log("Termina la ejecución del programa.");
        };


