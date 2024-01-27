//primer entrega modificada

for (let wineryExperiences = 1; wineryExperiences <= 1; wineryExperiences++) {
    let edad = Number(prompt("Ingrese du edad"));
    let nombre = prompt("Ingrese su nombre");
    let mensaje = `Hola ${nombre}`;
    alert(mensaje);

    if (edad >= 18) {
        let dni = Number(prompt("Ingrese su DNI"));
        alert(`Winery Experiences #${wineryExperiences} DNI ${dni}`);
        } else {
        alert("Debe ser mayor de edad");
        }
    }
    alert("Vuelva a ingresar por más Winery Experiences");






//SEGUNDA ENTREGA - objetos, Arrays y Métodos - 

//OBJETO
const bodegas = [
    {id: 1, nombre: "La Azul", precio: "50usd"},
    {id: 2, nombre: "Viña Cobos", precio: "100usd"},
    {id: 3, nombre: "Finca La Anita", precio: "75usd"},
    {id: 4, nombre: "Penedo Borges", precio: "50usd"},
];

class BodegasNuevas {
    constructor(nombre, precio){
        this.nombre= nombre;
        this.precio= precio;
    }
};

const bodega1= new BodegasNuevas("Salentein", "200usd");

bodegas.push (bodega1);

console.log (bodegas);

//ARREGLO
const novedades= ["Clos de los Siete", "Ruca Malen", "Zuccardi"];
console.log(novedades[1]);


for(let index = 0; index < novedades.length; index++){
    console.log(novedades[index]);
    }

const bodegasClasicas= ["La Azul", "Viña Cobos", "Finca La Anita", "Penedo Borges"];
let clasicos = prompt ("Ingrese una bodega clásica");
        if(bodegasClasicas.includes(clasicos)){
        alert(`${clasicos} encontrada`);
        }else{
        alert(`${clasicos} no encontada`);
        }

//METODO

bodegasClasicas.forEach(item =>{
    console.log(item);
});