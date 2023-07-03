const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
    allDogsHandler,
    dogsByRazaHandler,
    dogsNameHandler,
    temperamentsHandler,
    postDogsHandler
} = require('../handlers/usersHandlers')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/dogs',postDogsHandler);

router.get('/dogs/:idRaza',dogsByRazaHandler);

router.get('/dogs',allDogsHandler);

router.get('/dogs/name?',dogsNameHandler);

router.get('/temperaments',temperamentsHandler);



module.exports = router;
