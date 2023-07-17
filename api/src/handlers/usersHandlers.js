const {
    createDog,
    getDogByRaza,
    getAllDogs,
    getDogName,
    getTemperaments,
    deleteDog,
    updateDog
} = require('../controlers/userControler')


const allDogsHandler = async (req , res) => {
    try {
        const { name } = req.query;
        if (name){
            const dogName = await getDogName(name);
            return res.status(200).json(dogName);
        }
        const allDogs = await getAllDogs();
        return res.status(200).json(allDogs);
    
    } catch (error) {
        return res.status(400).json({error : error.message})
    }
}

const dogsByRazaHandler = async (req , res) => {
    const { idRaza } = req.params;
    const source = isNaN(idRaza) ? 'bdd' : 'api' 
    try {
        const dog = await getDogByRaza(idRaza , source);
        return res.status(200).json(dog)
    } catch (error) {
        return res.status(400).json({error : error.message})
    }
}

const temperamentsHandler = async (req , res) => {
    try {
        const temperament = await getTemperaments()
        res.status(200).json(temperament)
    } catch (error) {
        return res.status(400).json({error : error.message})
    }
}

const postDogsHandler = async (req , res) => {
try {
    const {imagen , nombre , altura , peso , anios_vida,temperamento } = req.body;
    if(!imagen || !nombre || !altura || !peso || !anios_vida) throw Error('Faltan datos para crear un nuevo perro')
    const newDog = await createDog(imagen , nombre , altura , peso , anios_vida , temperamento);
    return res.status(201).json(newDog);
} catch (error) {
    return res.status(400).json({error : error.message})
}
}

const dogsUpdateByRazaHandler = async (req , res) => {
    const { idRaza } = req.params;
    const datosUpdate = req.body;
    try {
        const dogUpdate = await updateDog(idRaza , datosUpdate)
        return res.status(200).json({dogUpdate})
    } catch (error) {
        return res.status(400).json({error : error.message})
    }
    
}

const dogsDeleteByRazaHandler = async (req , res) => {
    const { idRaza } = req.params;
    try {
        let  dogDelete = await deleteDog(idRaza)
        return res.status(200).json({message : dogDelete})
        
    } catch (error) {
        return res.status(400).json({error : error.message})
    }
}




module.exports = {
    allDogsHandler,
    dogsByRazaHandler,
    temperamentsHandler,
    postDogsHandler,
    dogsDeleteByRazaHandler,
    dogsUpdateByRazaHandler
}