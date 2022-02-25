module.exports = {
    BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 5,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3300,
    JWT_SECRET: process.env.JWT_SECRET || 'secret'
}