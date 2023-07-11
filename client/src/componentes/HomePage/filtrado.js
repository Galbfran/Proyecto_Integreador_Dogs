
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
                let dogsApi =  listaDogs.filter(dogs => dogs.BaseDatos === false);
                return dogsApi
            case BASE_DATOS:
                let dogsBD =  listaDogs.filter(dogs => dogs.BaseDatos === true);
                return dogsBD
            case ALFABETICO_AZ:
                return listaDogs.sort((a , b) =>  a.Nombre.localeCompare(b.Nombre) );
            case ALFABETICO_ZA:
                return listaDogs.sort((a , b) =>  b.Nombre.localeCompare(a.Nombre) );
            case ASCENDENTE_ID:
                return listaDogs.sort((a , b) => a.ID_Dogs - b.ID_Dogs);
            case DESCENDENTE_ID:
                return listaDogs.sort((a , b) => b.ID_Dogs - a.ID_Dogs);
            case PESO_MIN_MAX:
                return listaDogs.sort((a, b) => {
                    const pesoA = getPesoMinimo(a.Peso);
                    const pesoB = getPesoMinimo(b.Peso);
                    return pesoA - pesoB;
                });
            case PESO_MAX_MIN:
                return listaDogs.sort((a, b) => {
                    const pesoA = getPesoMaximo(a.Peso);
                    const pesoB = getPesoMaximo(b.Peso);
                    return pesoB - pesoA;
                });
            case TEMPERAMENTO:
                let DogsTemp = listaDogs.filter((objeto) => {
                    if (objeto.Temperamento && temperaments.some(temp => objeto.Temperamento.includes(temp))) {
                        return true;
                    }
                    return false;
                    });
                return DogsTemp
            case ALL_DOGS:
                return listaDogs
        default:
            return listaDogs
    }
}


