//  import { obtenerPoke } from '../o';

const body = document.body;
//const tabBody;


const urlPoke = 'https://pokeapi.co/api/v2/pokemon';



const crearHtml = () => {

    const html = `
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Pokemon</h1>
            <p class="lead">Aqui Mostraremos algunos pokemones, ahi veremos uwu</p>
        </div>
    </div>
    <div class="divPoke container">
        <p> <b>Coloque el numero de un Pokemon :</b></p>

        <input class="form-control" type="text" placeholder="Ingresar Id Pokemon">
        <br>
        
        <div class="textAlignCenter">
        
    <h1 class=""> Pokemon 1</h1>
    <br>
    <table class="table">
        <thead>
            <tr>
                <th> Id </th>
                <th> Nombre </th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    </div>
    `;
    const divC = document.createElement('div');
    divC.innerHTML = html;
    // console.log(body);
    body.append(divC);
}
const obtenerPoke = async (ids) => {

    // try {
    // ids = 90;
    console.log(ids, 'de la funcion obtener');

    const res = await fetch(`${urlPoke}/${ids}`);
    console.log(res);
    if (!res.ok) throw 'No Hay Respuesta xd';

    const { name, id } = await res.json();

    return { name, id };
    // } catch (err) {
    // throw err;
    // }
}

const insertarPokemon = async (dato) => {
    tabBody = document.querySelector('tbody');
    const trItem = document.createElement('tr');

    trItem.innerHTML = `
                    <td> ${dato.id}</td>
                    <td> ${dato.name}</td>
    `
    tabBody.append(trItem);


}




crearHtml();

const txtInput = document.querySelector('.form-control');

txtInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && txtInput.value.length > 0) {
        console.log(txtInput.value, 'del evento');
        setTimeout(() => {
            // obtenerPoke(txtInput.value);
            init();
        }, 1000);


    }
});

const init = async () => {
    console.log(' del init');
    insertarPokemon(await obtenerPoke(txtInput.value));
}



