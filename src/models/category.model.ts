import mongoose, {Schema} from 'mongoose';

const CategorySchema = new mongoose.Schema({
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
    timestamp: {
        type: Date,
        default: Date.now
    }
});


export const Category = mongoose.model('Category', CategorySchema);
