
const products = [];

function initializeAddProduct(req, res, next) {
    // #swagger.tags = ['Admin']
    // #swagger.description = 'This route will render the add-product page.'
    // #swagger.summary = 'Render add-product page'
    /* #swagger.responses[200] = {
        description: 'Add-product page rendered successfully',
        schema: {
            $ref: "#/definitions/AddProductPage"
        },
        

     } 
     
        #swagger.responses[500] = {
            description: 'Internal server error'
        }

        #swagger.responses[404] = {
            description: 'Page not found'
        }
            
     */

    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

function addProductHandler(req, res, next) {
    // #swagger.tags = ['Admin']
    products.push({ title: req.body.title });
    res.redirect('/');
};


function renderShopPage(req, res, next) {
    // #swagger.tags = ['shop']
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
};


exports.initializeAddProduct = initializeAddProduct;
exports.addProductHandler = addProductHandler;
exports.renderShopPage = renderShopPage;