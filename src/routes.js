const express = require( 'express' );
const routes = express.Router();
const ProductController = require( './controlers/ProductController' );
// Primeira rota
routes.get('/products', ProductController.index);

module.exports = routes;
