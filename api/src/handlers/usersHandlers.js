const {
    createDog,
    getDogByRaza,
    getAllDogs,
    getDogName,
    getTemperaments,
    deleteDog,
    updateDog
} = require('../controlers/userControler')

const allDogsHandler = async (req , res) => { //ruta all dogs / name
    try {
        const { name } = req.query;             //si me pasan name por query busco por name
        if (name){
            const dogName = await getDogName(name);
            return res.status(200).json(dogName);
        }                                       // caso contrario paso all dogs
        const allDogs = await getAllDogs();
        return res.status(200).json(allDogs);
    } catch (error) {
        return res.status(400).json({error : error.message})
    }
}

const dogsByRazaHandler = async (req , res) => {        //ruta dogs por idRaza
    const { idRaza } = req.params;                      //extraigo el id
    const source = isNaN(idRaza) ? 'bdd' : 'api'        //identifico si es de api o base datos
    try {
        const dog = await getDogByRaza(idRaza , source);    //paso id mas identificacion
        return res.status(200).json(dog)
    } catch (error) {
        return res.status(400).json({error : error.message})
    }
}

const temperamentsHandler = async (req , res) => {      //pido todos los temperamentos
    try {
        const temperament = await getTemperaments()
        res.status(200).json(temperament)
    } catch (error) {
        return res.status(400).json({error : error.message})
    }
}

const postDogsHandler = async (req , res) => {      //posteo nuevo dog en base datos
    try {
        const {imagen , nombre , altura , peso , anios_vida, temperamento } = req.body;         //saco del body parametros necesarios
        if(!imagen || !nombre || !altura || !peso || !anios_vida) throw Error('Faltan datos para crear un nuevo perro') // verifico que no falte ninguno y si faltan retorno error 
        const newDog = await createDog(imagen , nombre , altura , peso , anios_vida , temperamento);
        return res.status(201).json(newDog);
    } catch (error) {
        return res.status(400).json({error : error.message})
    }
}

const dogsUpdateByRazaHandler = async (req , res) => {      //modifico dog de base de datos
    const { idRaza } = req.params;                          //extraigo por params el id si o si es de la bse de datos
    const datosUpdate = req.body;                           //extraigo datos pasados . no realizo verificacion porque se puede modificar solo un dato o varios       
    try {
        const dogUpdate = await updateDog(idRaza , datosUpdate)
        return res.status(200).json({dogUpdate})
    } catch (error) {
        return res.status(400).json({error : error.message})
    }
    
}

const dogsDeleteByRazaHandler = async (req , res) => {      //eliminar dogs de BD 
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