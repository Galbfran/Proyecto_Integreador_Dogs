import axios from 'axios';

export const updateDog = async (id, inputs , temperaments) => {
    const temperamento = temperaments.join(', ')
    console.log(id , 'id')
    
    console.log(temperaments ,'temp')
    let newData = obtenerPropiedadesNoVacias(inputs)
    if(temperamento.length > 0 ){
        newData.temperamento = temperamento
    }
    console.log(newData)
    try {
        const response = await axios.put(`http://localhost:3001/dogs/${id}`, newData);
        
        return 'Modificacion realizada con exito'
    } catch (error) {
        // Manejo de errores
        
        throw new Error('Error al actualizar el perro');
    }
    };

    function obtenerPropiedadesNoVacias(objeto) {
        const propiedadesNoVacias = {};
        for (let propiedad in objeto) {
            if (typeof objeto[propiedad] === 'string' && objeto[propiedad].trim() !== '') {
                if (propiedad === 'altura' || propiedad === 'peso' || propiedad === 'anios_vida') {
                if (!propiedadesNoVacias[propiedad]) {
                propiedadesNoVacias[propiedad] = objeto[propiedad];
                } else {
                propiedadesNoVacias[propiedad] += `-${objeto[propiedad]}`;
                }
                } else {
                propiedadesNoVacias[propiedad] = objeto[propiedad];
                }
            }
        }
        return combinarPropiedades(propiedadesNoVacias);
    }

    
    function combinarPropiedades(objeto) {
        const salida = {
            imagen: objeto.imagen,
            nombre: objeto.nombre,
            altura: validar(objeto.alturaMin ,objeto.alturaMax),
            peso: validar(objeto.pesoMin ,objeto.pesoMax),
            anios_vida: validar(objeto.añosMin ,objeto.añosMax),
            temperamento: objeto.temperamento,
            };

    
        
        return salida;
    }


    let validar = (min , max)=> {
        if((min || max)=== undefined) return undefined
    else {
        return `${min} - ${max}` }
    }