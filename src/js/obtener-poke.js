const urlPoke = 'https://pokeapi.co/api/v2/pokemon/1';



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



export {
    obtenerPoke
}