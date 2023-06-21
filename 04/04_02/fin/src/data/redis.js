const { CONNECTIONSTRING }  = process.env;

const { Redis} = require('ioredis');

const redis = new Redis(CONNECTIONSTRING);
(async () => {
    try {
        redis.on('connect', () => {
            console.log('connected to redis...');
        });

        redis.on('error', error => {
            console.log('Connection failed.')
        });
    } catch (error) {
        console.log(`Failed to connect to redis`);
    }    
})();

