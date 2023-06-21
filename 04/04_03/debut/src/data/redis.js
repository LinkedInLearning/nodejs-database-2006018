const { REDIS_CONNECTIONSTRING }  = process.env;

const { Redis} = require('ioredis');

const redis = new Redis(REDIS_CONNECTIONSTRING);
redis.on('connect', () => {
    console.log('connected to redis...');
});

redis.on('error', error => {
    console.log('Connection failed.')
});

exports.addItem = async (key, value) => {
    return undefined;
};

exports.getItem = async (key) => {
    return undefined;
}

