import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ProductId = Schema.ProductId;

const Product = new Schema({
    name: String,
    descriprion: String,
    category: String,
    price: Number,
    created_date: {type: Date, default: Date.now}
});

export { Product }