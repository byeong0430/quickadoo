require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host     : process.env.DB_HOST,
      user     : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME,
      port     : process.env.DB_PORT,
      ssl      : process.env.DB_SSL
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'pg',
    debug: true,
    connection: 'postgres://shoabaykeojhto:2a3e689d45243730b33a6f96d774c18cb5f328e3915b366ad39ed137d40c0d6a@ec2-23-21-166-148.compute-1.amazonaws.com:5432/df4euf3p2omba9',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    },
    ssl: true
  }

};
