
const { Dog , Temperaments } = require('../db');
const fetchData = require('./consultasApi/rutasApi')
const pushTemperaments = require('./consultasApi/pushTemperaments')



const createDog = async (imagen, nombre, altura, peso, anios_vida, temperamentos) => {
        let temps = temperamentos
        try {
            const arrayTemperamentos = temperamentos.split(' ').map(temp => temp.trim());
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

const getAllDogs = async () => {
    try {
        const dataBaseDogs = await Dog.findAll({     //trae todos los dogs en base de datos
        include: [Temperaments],                    // agrega la informacion de los temperamentos asociados
        });
        const dataApiDogs = await fetchData();      //trae dogs api con funcion auxiliar
        return dataBaseDogs.concat(dataApiDogs);
    } catch (error) {
        throw new Error('Error al obtener todos los perros: ' + error.message);
    }
};

const getDogByRaza = async(id , source) => {    // traigo todos los dogs 
    const allDogs = await getAllDogs();
    let dogByID = allDogs.find(dog => {         //uso metodo finde que busca y devuelve e el primero que encuentra . los id son unicos
        if ( source === 'api'){
            return dog.idDogs === Number(id)    // si es de api paso el id a numero
        }else{
            return dog.idDogs === id
        }
    });
    if(!dogByID) throw Error(`El perro con numero ${id} no se encuentra`)
    return dogByID;
}


const getDogName = async (name) => {        
    const allDogs = await getAllDogs();
    const dogsWithName = allDogs.filter(dog => dog.nombre.toLowerCase().includes(name.toLowerCase()));     // filtro por todos los que tengan coincidencia. paso a miniscula para que no alla error del estilo "perro" !== 'pErRo'
    if (dogsWithName.length === 0) {    //si es un array vacio devuelve error
        throw new Error(`No se encontraron perros con nombre que contenga '${name}'`);
    }
    return dogsWithName;
}

const getTemperaments = async () => {   
    const allDogs = await getAllDogs();
    let temperament = [];
    allDogs.forEach(dogs => {                                   //paso todos los temepramentos como array 
        const arrayTemp = dogs.temperamento?.split(', ');       // de la api los pasan como string el metodo split los separa en un array
        temperament =  temperament.concat(arrayTemp);           //concateno con el con temperamnt
    })
    let arraySinRepetidos = temperament.filter((value, index, self) =>  self.indexOf(value) === index); // filtro y elimino valores repetidos
    pushTemperaments(arraySinRepetidos.sort())                  //cargo tempetementos a la BD
    return arraySinRepetidos.sort()                             // retorno para la ruta un arary con temperamentos no repetidos
}

const deleteDog = async(id) => {                                
    let dogDelete = await Dog.destroy({                         // metodo eliminar
        where:{
            idDogs:id                                           //indico buscar y eliminar por id
        }
    })
    if(dogDelete === 0) return `El Dog con id: ${id} no se encuentra en la base de datos.`      //el destroy devuelve 0 para false y 1 para eliminacion correcta
    else return `El Dog con id: ${id} fue eliminado con exito`
    
}

const updateDog = async (id, datosUpdate) => {
    const { imagen, nombre, altura, peso, anios_vida, temperamento } = datosUpdate;
    let dogCambiado = await Dog.findByPk(id);                       //busco dog por id
    if (!dogCambiado) {
        // Manejar el caso en el que el perro no existe
        throw new Error('El perro no existe');
    }
    if (imagen) dogCambiado.imagen = imagen;                        // modifico si corresponde
    if (nombre) dogCambiado.nombre = nombre;
    if (altura) dogCambiado.altura = altura;
    if (peso) dogCambiado.peso = peso;
    if (anios_vida) dogCambiado.vidaEstimada = anios_vida;
    if (temperamento) dogCambiado.temperamento = temperamento;
    await dogCambiado.save(); // Guardar los cambios en la base de datos

    return dogCambiado;                                               //retorno objeto cambiado
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