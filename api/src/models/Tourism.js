const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('sequelize')

module.exports = sequelize => {
    sequelize.define("tourism", {
        id:{
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        span:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        season:{
            type: DataTypes.ENUM('summer', 'winter', 'spring', 'autumn'),
            allowNull: false,
        },
    },{timestamps: false})
}


// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)