import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Product = new Schema({
    name: String,
    descriprion: String,
    category: String,
    price: Number,
    created_date: {type: Date, default: Date.now}
});

export { Product }