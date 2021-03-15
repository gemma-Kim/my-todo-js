const express = require("express")
const session = require("express-session")
const routes = require("./routes")
const { secret } = require("./my_settings")

const RedisStore = require('connect-redis')(session)
const redis = require("redis")
const redisClient = redis.createClient({
    "host": localhost,
    "port": 6379,
    "password": '<password>'
})

const sess = {
    "secret": secret,
    "resave": false,
    "cookie": {
        "secure": false,
        "maxAge": 10000 * 60 * 60 * 1 // Expiration for 1 hours
      },
    "store": new RedisStore({ client: redisClient })
}

const app = express();
app.use(routes)
app.use(session(sess))

module.exports = app