const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
    allDogsHandler,
    dogsByRazaHandler,
    temperamentsHandler,
    postDogsHandler,
    dogsDeleteByRazaHandler,
    dogsUpdateByRazaHandler
} = require('../handlers/usersHandlers')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/dogs',postDogsHandler);

router.get('/dogs/:idRaza',dogsByRazaHandler);

router.get('/dogs',allDogsHandler);

router.get('/dogs/name?',allDogsHandler);

router.get('/temperaments',temperamentsHandler);

router.put('/dogs/:idRaza',dogsUpdateByRazaHandler);

router.delete('/dogs/:idRaza',dogsDeleteByRazaHandler);



module.exports = router;
