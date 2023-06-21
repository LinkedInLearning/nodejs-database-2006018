const { Sequelize, DataTypes} = require('sequelize');
const { db } = require('../data/postgres');

exports.Status = db.define('Status', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.TEXT, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true}
},
{
    freezeTableName: true,
    timestamps: false
});
