

const body = document.body;
//const tabBody;


const urlPoke = 'https://pokeapi.co/api/v2/pokemon';


//! Crea la estructura de html inicial
const crearHtml = () => {
//? <input class="form-control" type="text" placeholder="Ingresar Id Pokemon">
//? <p> <b>Coloque el numero de un Pokemon :</b></p>
    const html = `
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Pokemon</h1>
            <p class="lead">Aqui Mostraremos algunos pokemones, ahi veremos uwu</p>
        </div>
    </div>
    <div class="divPoke container">
        

        
        <div class="textAlignCenter">
        
    <h1 class=""> Boton de Pokemon</h1>
    <button class="btn btn-primary">CARGAR</button>
    <br>
    <table class="table">
        <thead>
            <tr>
                <th> Id </th>
                <th> Nombre </th>
                <th> Pokemon </th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    </div>
    `;
    const divC = document.createElement('div');
    divC.innerHTML = html;
    
    body.append(divC);
}
//! Aqui se le entrega la id de la pagina de la api, para mandar el pokemon
const obtenerPoke = async (ids) => {

    console.log(ids);
    const res = await fetch(`${urlPoke}/${ids}`);
    if (!res.ok) throw 'No Hay Respuesta de la Api';

    const { name, id, sprites } = await res.json();
    
    

    return { name, id, sprites } ;
    // } catch (err) {
    // throw err;
    // }
}
//! Insertar elementos html con la id y nombre del pokemon
const insertarPokemon = async (dato) => {
//todo <img src="..." class="rounded float-right" alt="...">

    tabBody = document.querySelector('tbody');
    const trItem = document.createElement('tr');

    trItem.innerHTML = `
                    <td> <b>${dato.id}</b></td>
                    <td> <b>${dato.name.toUpperCase()}</b></td>
                    <td><img src="${dato.sprites['front_default']}" class="rounded float-left" ></td>
    `
    tabBody.appendChild(trItem);


}
//! Funcion Random
function getRandomInt() {
    return Math.floor(Math.random() * 898);
  }
  
//   console.log(getRandomInt(1000));


crearHtml();

// const txtInput = document.querySelector('.form-control');
//! con textbox
// txtInput.addEventListener('keyup', (event) => {
//     if (event.keyCode === 13 && txtInput.value.length > 0) {
//         console.log(txtInput.value, 'del evento');
//         setTimeout(() => {
//             // obtenerPoke(txtInput.value);
//             init();
//         }, 1000);

//     }
// });

const btnCargar = document.querySelector('.btn');

btnCargar.addEventListener('click', (event)=>{
    init()
    
});



const init = async () => {
    insertarPokemon(await obtenerPoke(getRandomInt()));
}



