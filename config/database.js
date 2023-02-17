module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfh710pgp3jqehq9vda0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_k6a1'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Ku7ODMmvEsb5xoHoqe4wBWyJ0HcGSj2Q'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
