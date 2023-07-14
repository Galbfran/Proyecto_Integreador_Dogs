const { Dog , Temperaments } = require('../../db');

const pushTemperaments = async(temps) => {
    let temperamentArray = temps.map(temp => {
        return {nombre : temp}
        })
    const tempcargados = await Temperaments.bulkCreate(temperamentArray);

}

module.exports = pushTemperaments


/* ID_Temp: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
},
Nombre:{
    type: DataTypes.STRING,
} */