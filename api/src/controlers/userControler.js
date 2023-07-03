const axios = require('axios')
const { Dog } = require('../db');
const apiDogID = require('./apiDogID')



const createDog = async (imagen, nombre , altura , peso , anios_vida) => {
    const newDog = await Dog.create({
        Imagen: imagen, 
        Nombre: nombre,
        Altura: altura,
        Peso: peso,
        Anios_Vida: anios_vida});
    return newDog;
}

const getDogByRaza = async(id , source) => {
    if (source === 'api'){
        const response = await apiDogID(id);
        return response
    }else {
        const resp_BD = await Dog.findByPk(id)
        return resp_BD
    };

    }



module.exports = {
    createDog,
    getDogByRaza
}