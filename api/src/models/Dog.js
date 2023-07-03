const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    ID_Dogs: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      initialValue: 265
    },
    Imagen:{
      type: DataTypes.STRING,
      allowNull: false
    },
    Nombre:{
      type: DataTypes.STRING,
      allowNull: false
    },
    Altura:{
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Peso:{
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Anios_Vida:{
      type: DataTypes.FLOAT,
      allowNull: false
    },
  });
};
