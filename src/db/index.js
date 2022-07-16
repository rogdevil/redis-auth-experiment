import {
    config
} from 'dotenv'
import {
    Client
} from 'redis-om'

config();

const redisCloudConnectionString = `redis://${process.env.REDIS_DB_USER}:${process.env.REDIS_DB_PASS}@${process.env.REDIS_DB_URL}`;
console.log("the connection string is :", redisCloudConnectionString)
const redisClient = new Client()

try {
    await redisClient.open(redisCloudConnectionString).then(() => {
        console.log("connected to redis")
    })
} catch (error) {
    console.log(error)
}

export {
    redisClient
}