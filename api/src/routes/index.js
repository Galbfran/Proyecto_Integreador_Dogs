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
router.get('/dogs/:idRaza',dogsByRazaHandler);

router.get('/dogs',allDogsHandler);

router.get('/dogs/name?',dogsNameHandler);

router.get('/temperaments',temperamentsHandler);

router.post('/dogs',postDogsHandler);


module.exports = router;
