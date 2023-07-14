
const { Dog , Temperaments } = require('../db');
const apiDogID = require('./consultasApi/apiDogID');
const fetchData = require('./consultasApi/rutasApi')
const pushTemperaments = require('./consultasApi/pushTemperaments')



const createDog = async (imagen, nombre , altura , peso , anios_vida , temperamento) => {
    const newDog = await Dog.create({
        imagen: imagen, 
        nombre: nombre,
        altura: altura,
        peso: peso,
        vidaEstimada: anios_vida,
        temperamento :temperamento
    });

    return newDog;
}

const getAllDogs = async() => {
    const dataBaseDogs = await Dog.findAll();
    const dataApiDogs = await fetchData();
    return dataBaseDogs.concat(dataApiDogs);
}

const getDogByRaza = async(id , source) => {

    const allDogs = await getAllDogs();
    let dogByID = allDogs.find(dog => {
        if ( source === 'api'){
            return dog.idDogs === Number(id)
        }else{
            return dog.idDogs === id
        }
    });
    if(!dogByID) throw Error(`El perro con numero ${id} no se encuentra`)
    return dogByID;
}


const getDogName = async(name) => {
    const allDogs = await getAllDogs();
    let dogByName = allDogs.find(dog => dog.nombre === name.toLowerCase());

    if(!dogByName) throw Error(`El perro con name ${name} no se encuentra`)
    return dogByName;
}

const getTemperaments = async () => {
    const allDogs = await getAllDogs();
    let temperament = [];
    allDogs.forEach(dogs => {
        const arrayTemp = dogs.temperamento?.split(', ');
        temperament =  temperament.concat(arrayTemp);
    })
    let arraySinRepetidos = temperament.filter((value, index, self) =>  self.indexOf(value) === index);
    pushTemperaments(arraySinRepetidos.sort())
    return arraySinRepetidos.sort()
}



module.exports = {
    createDog,
    getDogByRaza,
    getAllDogs,
    getDogName,
    getTemperaments
}