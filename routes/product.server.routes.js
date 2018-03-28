module.exports = function(app){

 var products = require('./../controllers/products.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/products')
	.get(products.list)
	.post(users.requiresLogin, products.create);

  app.route('/api/products/:productId')
	.get(products.read)
  .delete(users.requiresLogin,products.delete);

	app.route('/api/products/edit/:productsId')
	.get(products.read)
	.put(users.requiresLogin, products.update);
app.route('/products/all').get(products.listview);
app.route('/product/:productId').get(products.singleView);
app.route('/products/new').get(products.createView);

app.param('productId', products.productByID);


}
