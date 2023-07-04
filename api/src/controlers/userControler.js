const axios = require('axios')
const { Dog , Temperaments} = require('../db');
const apiDogID = require('./consultasApi/apiDogID');
const fetchData = require('./consultasApi/rutasApi')



const createDog = async (imagen, nombre , altura , peso , anios_vida , temperamento) => {
    const newDog = await Dog.create({
        Imagen: imagen, 
        Nombre: nombre,
        Altura: altura,
        Peso: peso,
        Anios_Vida: anios_vida,
    });
    return newDog;
}

const getDogByRaza = async(ID , source) => {
    if (source === 'api'){
        const response = await apiDogID(ID);
        let responseNuevo = JSON.parse(response) 
        const { weight, height, id, name, life_span, temperament, reference_image_id } = responseNuevo;
        if(!id){
            throw Error('Perro no encontrado')
        }
        const dogObjet = {
            ID_Dogs: id,
            Imagen: reference_image_id,
            Nombre: name,
            Altura: height.metric,
            Peso: weight.metric,
            Anios_Vida: life_span,
            Temperamento: temperament,
            BaseDatos: false
        };
        return dogObjet;
    }else {
        const resp_BD = await Dog.findByPk(ID)
        if(resp_BD === null) throw Error('El perro buscado no existe')
        return resp_BD
    };
}

const getAllDogs = async() => {
    const dataBaseDogs = await Dog.findAll();
    const dataApiDogs = await fetchData();
    return dataBaseDogs.concat(dataApiDogs);
}
const getDogName = async(name) => {
    const allDogs = await getAllDogs();
    let dogByName = allDogs.find(dog => dog.Nombre === name);

    if(!dogByName) throw Error('El perro solicitado no se encuentra')
    return dogByName;
}



module.exports = {
    createDog,
    getDogByRaza,
    getAllDogs,
    getDogName
}