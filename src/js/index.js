//  import { obtenerPoke } from '../o';

const body = document.body;
//const tabBody;


const urlPoke = 'https://pokeapi.co/api/v2/pokemon/50';



const obtenerPoke = async () => {

    try {
        
    const res = await fetch(urlPoke);
    if(!res.ok) throw'No Hay Respuesta';

    const {name, id} = await res.json();

    return {name, id};
} catch (err) {
        throw err;
}
}


const crearHtml = () => {

    const html= `
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

const insertarPokemon = (dato) =>{
    tabBody      = document.querySelector('tbody');
    const trItem = document.createElement('tr');

    trItem.innerHTML =`
                    <td> ${dato.id}</td>
                    <td> ${dato.name}</td>
    `
    tabBody.append(trItem);

}







const init = async() => {
    crearHtml();
     insertarPokemon(await obtenerPoke());
}
init();
