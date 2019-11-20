import mongoose, {Schema} from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 4,
        max: 255,
        required: true
    },
    email: {
        type: String,
        min: 5,
        max: 255,
        required: true,
        index: { unique : true }
    },
    password: {
        type: String,
        min: 6,
        max: 255,
        required: true,
    },
    role_id: {
        type: Schema.Types.ObjectId
    },
    cart_id: {
        type: Schema.Types.ObjectId
    },
    wishlist_id: {
        type: Schema.Types.ObjectId
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});


export const User = mongoose.model('User', UserSchema);
