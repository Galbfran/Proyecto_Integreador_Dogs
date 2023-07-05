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
            ID_Dogs: id,
            Imagen: image.url,
            Nombre: name.toLowerCase(),
            Altura: height.metric,
            Peso: weight.metric,
            Anios_Vida: life_span,
            Temperamento: temperament,
            BaseDatos: false
        };
        return dogObjet
    })
    return objetoResumido;
} catch (error) {
    return error.message
}
};

module.exports = fetchData;
