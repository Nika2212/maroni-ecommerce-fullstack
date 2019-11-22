import mongoose, {Schema} from 'mongoose';

const ProductModel = new mongoose.Schema({
    name: {
        type: String,
        min: 4,
        max: 255,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    manufacturer: {
        type: Schema.Types.ObjectId,
        ref: 'Manufacturer'
    },
    series: {
        type: Schema.Types.ObjectId,
        ref: 'Manufacturer'
    },
    short_description: {
        type: String
    },
    description: {
        type: String
    },
    specification: {
        type: String
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
});


export const Product = mongoose.model('Product', ProductModel);
