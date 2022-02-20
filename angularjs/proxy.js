const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/old', createProxyMiddleware({ target: 'http://localhost:8000', changeOrigin: false, pathRewrite: {'/old' : ''}, ws: true}));
app.use('/', createProxyMiddleware({ target: 'http://localhost:4200', changeOrigin: false, ws: true}));
app.listen(8080);
