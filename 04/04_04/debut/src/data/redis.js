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
    let stringValue = JSON.stringify(value);
    return redis.set(key, stringValue);
};

exports.getItem = async (key) => {
    let result = await redis.get(key);
    if (result) {
        return JSON.parse(result);
    }
    return result;
}

