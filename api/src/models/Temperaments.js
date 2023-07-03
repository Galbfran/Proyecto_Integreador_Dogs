const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('temperaments', {
    ID_Temp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        initialValue: 10
    },
    Nombre:{
        type: DataTypes.STRING,
        allowNull:false
    }

});
};
