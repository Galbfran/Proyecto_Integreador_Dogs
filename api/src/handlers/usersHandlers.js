const {
    createDog,
    getAllDog
} = require('../controlers/userControler')


const allDogsHandler = async (req , res) => {
    try {
        const { name } = req.query;
        if (name){
            return res.status(200).send(`todos los perros ${name}`)
        }
        return res.status(200).send(`ruta todos`)
    
} catch (error) {
    return res.status(400).json({error : error.message})
}

}

const dogsByRazaHandler = async (req , res) => {
    const { idRaza } = req.params;
    if (typeof Number(idRaza) == 'number') console.log('es un numero')
    try {
        return res.status(200).json(`el id es :${idRaza}`)

        /* const dog = await getDogById(id)
        return res.status(200).json(dog) */
    } catch (error) {
        return res.status(400).json({error : error.message})
    }
}

const dogsNameHandler = async (req , res) => {

    res.send('ruta dogsNameHandler')
}

const temperamentsHandler = async (req , res) => {
    res.send('ruta temperamentsHandler')
}

const postDogsHandler = async (req , res) => {
try {
    const {imagen , nombre , altura , peso , anios_vida} = req.body;
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
    dogsNameHandler,
    temperamentsHandler,
    postDogsHandler
}