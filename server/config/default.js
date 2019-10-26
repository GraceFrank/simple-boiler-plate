require('dotenv').config();

module.exports={
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT,
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT
};