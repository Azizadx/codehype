require('dotenv').config()

module.exports = {
    // HTTP PORT
    HTTP_PORT: process.env.HTTP_PORT||3000,
    // MongoDB URL
    MONGODB_URL: process.env.MONGODB_URL,
    // Maximum Page Size
    MAX_PAGE_SIZE: process.env.MAX_PAGE_SIZE,
    // JWT Key
    JWT_KEY: process.env.JWT_KEY,
    
  };