import mongoose, {Schema} from 'mongoose';

const ManufacturerSchema = new mongoose.Schema({
    name: {
        type: String,
        max: 255,
        required: true
    },
    status: {
        type: Boolean,
        default: true,
    },
    slug: {
        type: String,
        max: 255,
        required: false,
        default: '',
    },
    content: {
        type: String,
        max: 255,
        default: '',
    },
    views: {
        type: Number,
        default: 0,
    },
    trash: {
        type: Boolean,
        default: false
    },
    category_list: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    timestamp: {
        type: Date,
        default: Date.now
    }
});


export const Manufacturer = mongoose.model('Manufacturer', ManufacturerSchema);
