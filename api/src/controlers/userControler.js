const { Dog } = require('../db');
const fetchData = require('./rutasApi');
const obtenerDogsBD = require('./obtenerDogsBD')


const createDog = async (imagen, nombre , altura , peso , anios_vida) => {
    console.log(imagen, nombre , altura , peso , anios_vida)
    try {
        const newDog = await Dog.create({
            Imagen: imagen, 
            Nombre: nombre,
            Altura: altura,
            Peso: peso,
            Anios_Vida: anios_vida});
            console.log(newDog.ID_Dogs)
        return newDog;    
        
    } catch (error) {
        throw new Error(error.message);
    }
}

const getAllDog = async(id) => {
try {
    


} catch (error) {
    
}
}


module.exports = {
    createDog,
    getAllDog
}