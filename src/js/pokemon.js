import { obtenerPoke } from "./obtener-poke";



// obtenerPokee()
const body = document.body;
const tabBody;


const crearHtml = () => {

    const html= `
    <h1 class=""> Pokemon </h1>
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
    `;
    const divC = document.createElement('div');
    divC.innerHTML = html;
    body.append(divC);
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






export const iniciar = async() => {
    crearHtml();
    insertarPokemon(await obtenerPoke());

}
