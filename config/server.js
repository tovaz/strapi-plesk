module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: env('URL', 'https://strapi.clever-yonath.82-223-23-80.plesk.page/'),
  port: env.int('PORT', 1337),
  //proxy: env('PROXY', true),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd4e5c1fb58bde3a1d6433c7450944966'),
    },
  },
});
