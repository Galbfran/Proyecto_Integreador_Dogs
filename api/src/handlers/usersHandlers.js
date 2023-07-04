const {
    createDog,
    getDogByRaza,
    getAllDogs,
    getDogName
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
    res.send('ruta temperamentsHandler')
}

const postDogsHandler = async (req , res) => {
try {
    const {imagen , nombre , altura , peso , anios_vida, } = req.body;
    if(!imagen || !nombre || !altura || !peso || !anios_vida) throw Error('Faltan datos para crear un nuevo perro')
    const newDog = await createDog(imagen , nombre , altura , peso , anios_vida);
    return res.status(201).json(newDog);
} catch (error) {
    return res.status(400).json({error : error.message})
}
}

module.exports = {
    allDogsHandler,
    dogsByRazaHandler,
    temperamentsHandler,
    postDogsHandler
}