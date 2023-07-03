const axios = require('axios');

const DB_API_KEY = process.env;

const fetchData = async () => {
try {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds/', {
        headers: {
        'x-api-key': DB_API_KEY
        }
    });

    // Aquí puedes procesar los datos de la respuesta
    return response;
} catch (error) {
    // Si ocurre un error, puedes manejarlo aquí
    console.error(error);
}
};

module.exports = fetchData;
