const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_PORT }  = process.env;

const { Sequelize, DataTypes} = require('sequelize');
const { Task} = require('../models/task_model');
const { Status } = require('../models/status_model');

var sequelize =  undefined;

sequelize = new Sequelize(
    `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`
);
( async () => {
    try {
        sequelize.authenticate({ });
        
    } catch (error) {
        console.log(`Unable to connect to the database`);
        sequelize = undefined;
    }
})
();
Status.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.TEXT, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true}
},
{
    sequelize,
    modelName: 'Status', 
    freezeTableName: true,
    timestamps: false
});
Task.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.TEXT, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true},
    status_id: { type: DataTypes.INTEGER, allowNull: false}
},
{
    sequelize,
    freezeTableName: true,
    timestamps: false
});
Task.belongsTo(Status, { foreignKey: "status_id"});
exports.Task = Task;
exports.Status = Status;
exports.db = sequelize;

