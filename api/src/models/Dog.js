const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    ID_Dogs: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
      
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
      type: DataTypes.STRING,
      allowNull: false
    },
    Peso:{
      type: DataTypes.STRING,
      allowNull: false
    },
    Anios_Vida:{
      type: DataTypes.STRING,
      allowNull: false
    },
    Temperament:{
      type: DataTypes.STRING
    },
    BaseDatos:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },{ timestamps: false});
};
