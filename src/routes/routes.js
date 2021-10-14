import {addnewProduct} from '../controllers/controllers'

export const routes = (app) => {
    app.route('/products')

    // Post endpoint
    .post(addnewProduct);
}

// export { routes }