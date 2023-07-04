const axios = require('axios');

const DB_API_KEY = process.env;

const fetchData = async () => {
try {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds/', {
        headers: {
        'x-api-key': DB_API_KEY
        }
    });
    return response;
} catch (error) {
    return error.message
}
};

module.exports = fetchData;
