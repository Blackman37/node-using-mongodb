import mongoose from "mongoose";
import { ProductSchema } from "../models/models";

const Product = mongoose.model('Product', ProductSchema)

export const addnewProduct = (req, res) => {
    const newProduct = new Product(req.body)

    newProduct.save((err, Product) => {
        if (err) {
            res.send(err)
        }
        res.json(Product)
    })
}

export const getProducts = (req, res) => {
    const products = Product.find({}, (err, Product) => {
        if (err) {
            res.send(err)
        }
        res.json(Product)
    })

    // const products = Product.find()
}

// export { addnewProduct }