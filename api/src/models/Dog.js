const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    idDogs: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
      
    },
    imagen:{
      type: DataTypes.STRING,
      allowNull: false
    },
    nombre:{
      type: DataTypes.STRING,
      allowNull: false
    },
    altura:{
      type: DataTypes.STRING,
      allowNull: false
    },
    peso:{
      type: DataTypes.STRING,
      allowNull: false
    },
    vidaEstimada:{
      type: DataTypes.STRING,
      allowNull: false
    },
    temperamento:{
      type: DataTypes.STRING
    },
    baseDatos:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },{ timestamps: false});
};
