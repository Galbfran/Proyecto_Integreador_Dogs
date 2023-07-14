
export const API = 'API';
export const BASE_DATOS = 'BASE_DATOS';
export const ASCENDENTE_ID = 'ASCENDENTE_ID';
export const DESCENDENTE_ID = 'DESCENDENTE_ID';
export const ALFABETICO_AZ = 'ALFABETICO_AZ';
export const ALFABETICO_ZA = 'ALFABETICO_ZA';
export const PESO_MIN_MAX = 'PESO_MIN_MAX';
export const PESO_MAX_MIN = 'PESO_MAX_MIN';
export const TEMPERAMENTO = 'TEMPERAMENTO';
export const ALL_DOGS = 'ALL_DOGS'

function getPesoMinimo(pesoString) {
    const pesos = pesoString.split(" - ");
    return parseInt(pesos[0]);
}

  // Función para obtener el peso máximo
function getPesoMaximo(pesoString) {
    const pesos = pesoString.split(" - ");
    return parseInt(pesos[1]);
}





export const filtrado = ( listaDogs ,tipo , temperaments) => {
    console.log(temperaments)
    switch(tipo){
            case API:
                let dogsApi =  listaDogs.filter(dogs => dogs.baseDatos === false);
                return dogsApi
            case BASE_DATOS:
                let dogsBD =  listaDogs.filter(dogs => dogs.baseDatos === true);
                return dogsBD
            case ALFABETICO_AZ:
                return listaDogs.sort((a , b) =>  a.nombre.localeCompare(b.nombre) );
            case ALFABETICO_ZA:
                return listaDogs.sort((a , b) =>  b.nombre.localeCompare(a.nombre) );
            case ASCENDENTE_ID:
                return listaDogs.sort((a , b) => a.idDogs - b.idDogs);
            case DESCENDENTE_ID:
                return listaDogs.sort((a , b) => b.idDogs - a.idDogs);
            case PESO_MIN_MAX:
                return listaDogs.sort((a, b) => {
                    const pesoA = getPesoMinimo(a.peso);
                    const pesoB = getPesoMinimo(b.peso);
                    return pesoA - pesoB;
                });
            case PESO_MAX_MIN:
                return listaDogs.sort((a, b) => {
                    const pesoA = getPesoMaximo(a.peso);
                    const pesoB = getPesoMaximo(b.peso);
                    return pesoB - pesoA;
                });
            case TEMPERAMENTO:
                let dogsTemp = listaDogs.filter((objeto) => {
                    if (objeto.temperamento && temperaments.some(temp => objeto.temperamento.includes(temp))) {
                        return true;
                    }
                    return false;
                    });
                return dogsTemp
            case ALL_DOGS:
                return listaDogs
        default:
            return listaDogs
    }
}


