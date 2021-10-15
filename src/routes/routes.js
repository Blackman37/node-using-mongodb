import { addnewProduct, getProducts, getProductWithID, updateProduct, deleteProduct } from '../controllers/controllers'

export const routes = (app) => {
    app.route('/products')
        .get(getProducts)
        .post(addnewProduct);

    app.route('/products/:ProductId')
        .get(getProductWithID)
        .put(updateProduct);

    app.route('/products/:Product')
        .delete(deleteProduct);
}

// export { routes }