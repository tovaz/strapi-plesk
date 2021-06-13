module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: "mysql",
        host: env('DATABASE_HOST', '82.223.23.80'),
        port: env('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', '8w_1d6hE'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
