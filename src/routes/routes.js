import { addnewProduct, getProducts, getProductWithID } from '../controllers/controllers'

export const routes = (app) => {
    app.route('/products')

        // endpoints
        .get(getProducts)
        .post(addnewProduct);

    app.route('/products/:ProductId')
        .get(getProductWithID);
}

// export { routes }