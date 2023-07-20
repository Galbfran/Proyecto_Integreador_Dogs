const axios = require('axios');

const DB_API_KEY = process.env;

const fetchData = async () => {
    try {
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${DB_API_KEY}`, {
            headers: {
            'x-api-key': DB_API_KEY
            }
        });
        
        let objetoResumido = response.data.map(dog => {
            const { weight, height, id, name, life_span, temperament, image } = dog;
            const dogObjet = {
                idDogs: id,
                imagen: image.url,
                nombre: name.toLowerCase(),
                altura: height.metric,
                peso: weight.metric,
                vidaEstimada: life_span,
                temperamento: temperament,
                baseDatos: false
            };
            return dogObjet
        })
        return objetoResumido;
    } catch (error) {
        return error.message
    }
};

module.exports = fetchData;
