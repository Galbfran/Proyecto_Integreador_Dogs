
const { Dog , Temperaments } = require('../db');
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
    }, {
        include:Temperaments
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

const deleteDog = async(id) => {
    await Dog.destroy({
        where:{
            idDogs:id 
        }
    })
}

const updateDog = async (id, datosUpdate) => {
    const { imagen, nombre, altura, peso, anios_vida, temperamento } = datosUpdate;
    let dogCambiado = await Dog.findByPk(id);
    if (!dogCambiado) {
        // Manejar el caso en el que el perro no existe
        throw new Error('El perro no existe');
    }
    if (imagen) dogCambiado.imagen = imagen;
    if (nombre) dogCambiado.nombre = nombre;
    if (altura) dogCambiado.altura = altura;
    if (peso) dogCambiado.peso = peso;
    if (anios_vida) dogCambiado.vidaEstimada = anios_vida;
    if (temperamento) dogCambiado.temperamento = temperamento;
    await dogCambiado.save(); // Guardar los cambios en la base de datos

    return dogCambiado;
};


module.exports = {
    createDog,
    getDogByRaza,
    getAllDogs,
    getDogName,
    getTemperaments,
    deleteDog,
    updateDog
}