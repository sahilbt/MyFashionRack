const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/authentication/google',
    createProxyMiddleware({
      target: 'http://localhost:8000/authentication/google',
      changeOrigin: true,
    })
  );
};