const axios = require('axios');


const apiDogID = async(id) => {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.thedogapi.com/v1/breeds/${Number(id)}`,
        headers: { }
    };
    
    const respons = await axios(config)
    .then(function (response) {
        return JSON.stringify(response.data);
    })
    .catch(function (error) {
        return error.message;
    })
    return respons
}  

module.exports = apiDogID;