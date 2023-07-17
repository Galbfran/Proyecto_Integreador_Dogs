const {  Temperaments } = require('../../db');

const pushTemperaments = async(temps) => {
    let temperamentArray = temps.map(temp => {
        return {nombre : temp}
        })
    await Temperaments.bulkCreate(temperamentArray);
}

module.exports = pushTemperaments
