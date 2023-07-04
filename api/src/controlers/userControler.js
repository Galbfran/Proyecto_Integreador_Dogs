const axios = require('axios')
const { Dog , Temperaments} = require('../db');
const apiDogID = require('./apiDogID')



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
        return dogObjet
    }else {
        const resp_BD = await Dog.findByPk(ID)
        return resp_BD
    };
}





module.exports = {
    createDog,
    getDogByRaza
}