import mongoose, {Schema} from 'mongoose';

const ProductVariantModel = new mongoose.Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    price: {
        type: Number,
        required: true
    },
    oldPrice: {
        type: Number
    },
    color: {
        type: Schema.Types.ObjectId,
        ref: 'Color',
        required: true,
    },
    sku: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    thumbnail_url: {
        type: String,
        required: true,
    },
    preview_thumbnail_urls: [{
        type: String
    }]
});


export const ProductVariant = mongoose.model('Product_Variant', ProductVariantModel);
