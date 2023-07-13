
const { Dog , Temperaments } = require('../db');
const apiDogID = require('./consultasApi/apiDogID');
const fetchData = require('./consultasApi/rutasApi')
const pushTemperaments = require('./consultasApi/pushTemperaments')



const createDog = async (imagen, nombre , altura , peso , anios_vida , temperamento) => {
    const newDog = await Dog.create({
        Imagen: imagen, 
        Nombre: nombre,
        Altura: altura,
        Peso: peso,
        Anios_Vida: anios_vida,
        Temperamento :temperamento
    });

    return newDog;
}

const getAllDogs = async() => {
    const dataBaseDogs = await Dog.findAll();
    const dataApiDogs = await fetchData();
    return dataBaseDogs.concat(dataApiDogs);
}

const getDogByRaza = async(ID , source) => {

    const allDogs = await getAllDogs();
    let dogByID = allDogs.find(dog => {
        if ( source === 'api'){
            return dog.ID_Dogs === Number(ID)
        }else{
            return dog.ID_Dogs === ID
        }
    });
    if(!dogByID) throw Error(`El perro con numero ${ID} no se encuentra`)
    return dogByID;
}


const getDogName = async(name) => {
    const allDogs = await getAllDogs();
    let dogByName = allDogs.find(dog => dog.Nombre === name.toLowerCase());

    if(!dogByName) throw Error(`El perro con name ${name} no se encuentra`)
    return dogByName;
}

const getTemperaments = async () => {
    const allDogs = await getAllDogs();
    let temperament = [];
    allDogs.forEach(dogs => {
        const arrayTemp = dogs.Temperamento?.split(', ');
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