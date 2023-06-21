const { Sequelize, DataTypes} = require('sequelize');
const { db } = require('../data/postgres');

exports.Task = db.define('Task', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.TEXT, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true},
    status_id: { type: DataTypes.INTEGER, allowNull: false}
},
{
    freezeTableName: true,
    timestamps: false
});


