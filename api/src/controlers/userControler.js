
const { Dog , Temperaments } = require('../db');
const fetchData = require('./consultasApi/rutasApi')
const pushTemperaments = require('./consultasApi/pushTemperaments')

/* const createDog = async (imagen, nombre , altura , peso , anios_vida , temperamento) => {
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
} */

const createDog = async (imagen, nombre, altura, peso, anios_vida, temperamentos) => {
        let temps = temperamentos
        try {
            const arrayTemperamentos = temperamentos.split(',').map(temp => temp.trim());
        
            // Buscar todos los temperamentos existentes
            const existingTemperaments = await Temperaments.findAll();
            const existingTemperamentNames = existingTemperaments.map(temp => temp.nombre);
            const newTemperaments = arrayTemperamentos.filter(temp => !existingTemperamentNames.includes(temp));
    
        // Crear los nuevos temperamentos en la base de datos (si existen)
            if (newTemperaments.length > 0) {
                const newTemperamentObjects = newTemperaments.map(temp => ({ nombre: temp }));
                await Temperaments.bulkCreate(newTemperamentObjects);
        }
    
        // Crear el perro
        const newDog = await Dog.create({
            imagen: imagen,
            nombre: nombre,
            altura: altura,
            peso: peso,
            vidaEstimada: anios_vida,
            temperamento: temps
        });
    
        // Buscar los temperamentos en la base de datos para asociarlos al perro
        const temperamentosDb = await Temperaments.findAll({ where: { nombre: arrayTemperamentos } });
    
        // Asociar los temperamentos al perro recién creado
        await newDog.addTemperaments(temperamentosDb);
    
        return newDog;
        } catch (error) {
        throw new Error('Error al crear el perro: ' + error.message);
        }
    };

/* const getAllDogs = async() => {
    const dataBaseDogs = await Dog.findAll();
    const dataApiDogs = await fetchData();
    return dataBaseDogs.concat(dataApiDogs);
} */
const getAllDogs = async () => {
    try {
      const dataBaseDogs = await Dog.findAll({
        include: [Temperaments], // Incluir la información de los temperamentos asociados
      });
      const dataApiDogs = await fetchData();
      return dataBaseDogs.concat(dataApiDogs);
    } catch (error) {
      throw new Error('Error al obtener todos los perros: ' + error.message);
    }
  };

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
    let dogDelete = await Dog.destroy({
        where:{
            idDogs:id 
        }
    })
    if(dogDelete === 0) return `El Dog con id: ${id} no se encuentra en la base de datos.` 
    else return `El Dog con id: ${id} fue eliminado con exito`
    
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