import mongoose, {Schema} from 'mongoose';

const SeriesSchema = new mongoose.Schema({
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
    manufacturer: {
        type: Schema.Types.ObjectId,
        ref: 'Manufacturer',
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});


export const Series = mongoose.model('Series', SeriesSchema);
