const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_PORT }  = process.env;

const { Sequelize,} = require('sequelize');


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

exports.db = sequelize;

