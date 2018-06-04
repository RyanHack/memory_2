// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///coffees'
  },


  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
