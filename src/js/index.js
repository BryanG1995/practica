

const body = document.body;
colorClass = '';
colorClassHove = '';


const urlPoke = 'https://pokeapi.co/api/v2/pokemon';


//! Crea la estructura de html inicial
const crearHtml = () => {
    //? <input class="form-control" type="text" placeholder="Ingresar Id Pokemon">
    //? <p> <b>Coloque el numero de un Pokemon :</b></p>
    const html = `
    <div class="alldiv">

        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Pokemon</h1>
                <ul class="nav justify-content-end">
                <a href="./Pokemon.html" class="btn btn-primary ">Volver</a>
                </ul>
            </div>
        </div>
        <div class="container xd">



            <div class="textAlignCenter">
                <p ><b>Elegir ID de Pokemon</b></p>
                <input class="form-control" type="number" placeholder="ID Pokemon: Presionar Enter">
                <hr>
                <p for="inputAddress2"><b>Cargar Un Pokemon Random</p>


                <button class="btn btns btn-primary">RANDOM</button>
                
                
                <button class="btn btnl btn-danger">LIMPIAR</button>
                
                <br>
                <table class="">
                    <thead class="thead-dark">
                        <tr>
                            <th class="jq"> Id </th>
                            <th class="jq"> Nombre </th>
                            <th class="jq"> Elemento </th>
                            <th class="jq"> Pokemon </th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    `;
    const divC = document.createElement('div');
    divC.innerHTML = html;

    body.append(divC);
}
//! Aqui se le entrega la id de la pagina de la api, para mandar el pokemon
const obtenerPoke = async (ids) => {

    const res = await fetch(`${urlPoke}/${ids}`);
    if (!res.ok) throw 'No Hay Respuesta de la Api';

    const { name, id, sprites, types } = await res.json();

    return { name, id, sprites, types };
   
}
//! Insertar elementos html con la id y nombre del pokemon
const insertarPokemon = async ({ id, name, types, sprites }) => {
    //todo <img src="..." class="rounded float-right" alt="...">

    tabBody = document.querySelector('tbody');
    const trItem = document.createElement('tr');

    if (types[1]) {
        colorClass = types[0].type.name;
        colorClassHove = types[1].type.name;
        trItem.innerHTML = `
    <td class="${colorClass}"> <b>${id}</b></td>
    <td class="${colorClass}"> <b>${name.toUpperCase()}</b></td>
    <td class="${colorClass}"> <b>${types[0].type.name.toUpperCase()} & ${types[1].type.name.toUpperCase()}</b></td>
    <td class="${colorClass}"><img draggable="false" src="${sprites['front_default']}" class="rounded float-left" ></td>
`
        trItem.classList.toggle(`${colorClassHove}2`)
    } else {
        colorClass = types[0].type.name;
        trItem.innerHTML = `
                    <td class="${colorClass}"> <b>${id}</b></td>
                    <td class="${colorClass}"> <b>${name.toUpperCase()}</b></td>
                    <td class="${colorClass}"> <b>${types[0].type.name.toUpperCase()}</b></td>
                    <td class="${colorClass}"><img draggable="false" src="${sprites['front_default']}" class="rounded float-left" ></td>
    `
    }
    tabBody.append(trItem);


}
//! Funcion Random
function getRandomInt() {
    return Math.floor(Math.random() * 898);
}


crearHtml();

const txtInput = document.querySelector('.form-control');
//! con textbox
txtInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && txtInput.value.length > 0) {

        setTimeout(() => {
            // obtenerPoke(txtInput.value);
            init2();
            txtInput.value = ''; // Limpiar input
        }, 30);

    }
});

const btnCargar = document.querySelector('.btns');

btnCargar.addEventListener('click', (event) => {
    init()

});

//! Agregar Boton Limpiar
const btnLimpiar = document.querySelector('.btnl');
btnLimpiar.addEventListener('click', (event) => {

    const tabBody = document.querySelector('tbody');
    const tablaRow = tabBody.getElementsByTagName('tr');
    const rowCount = tablaRow.length - 1;

    for (let i = rowCount; i >= 0; i--) {
        tabBody.removeChild(tablaRow[i]);
    }
});


const init = async () => {
    insertarPokemon(await obtenerPoke(getRandomInt()));
    //insertarle el color de (colorClass)
}
const init2 = async () => {
    insertarPokemon(await obtenerPoke(txtInput.value));
    //insertarle el color de (colorClass)
}



