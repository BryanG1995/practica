import { obtenerPoke } from './obtener-poke';



// obtenerPokee()
const body = document.body;
const tabBody;


export const crearHtml = () => {

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
        <button class="btn btn-primary" id="submit">Buscar</button>
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
    console.log(body);
    return body.append(divC);
}
const insertarPokemon = (name) =>{
    tabBody      = document.querySelector('tbody');
    const trItem = document.createElement('tr');

    trItem.innerHTML =`
                    <td> ${name.id}</td>
                    <td> ${name.name}</td>
    `
    tabBody.append(trItem);

}


//todo: clase de input: form-control







export const init = async() => {
    crearHtml();
    // insertarPokemon(await obtenerPoke());
}
