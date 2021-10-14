import { addnewProduct, getProducts } from '../controllers/controllers'

export const routes = (app) => {
    app.route('/products')

    // Post endpoint
    .post(addnewProduct)
    .get(getProducts)
}

// export { routes }