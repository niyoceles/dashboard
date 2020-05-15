const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    logging: false,
    seederStorage: 'sequelize',
  },
  test: {
    use_env_variable: 'DATABASE_TEST',
    dialect: 'postgres',
    logging: false,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    logging: false,
    seederStorage: 'sequelize',
  },
  secret_key_code: process.env.SECRET,
};
