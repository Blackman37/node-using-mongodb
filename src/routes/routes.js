import { addnewProduct, getProducts, getProductWithID, updateProduct } from '../controllers/controllers'

export const routes = (app) => {
    app.route('/products')

        // endpoints
        .get(getProducts)
        .post(addnewProduct);

    app.route('/products/:ProductId')
        .get(getProductWithID)
        .put(updateProduct);

}

// export { routes }