import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';

const MongoCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        min: 3,
        max: 255,
        required: true
    },
    status: {
        type: Boolean,
        required: false,
        default: true
    },
    trash: {
        type: Boolean,
        required: false,
        default: false
    },
    slug: {
        type: String,
        min: 3,
        max: 255,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    manufacturers_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Manufacturer'
    }],
    timestamp: {
        type: Date,
        default: new Date().getTime()
    }
});
const CategorySchema = mongoose.model('Category', MongoCategorySchema);

export class Category {
    static createCategory = async (category: any): Promise<Document> => {
        const {name, slug, content, status} = category;

        const newCategorySchema = new CategorySchema({
            name,
            slug,
            content,
            status
        });

        return await newCategorySchema.save();
    };
    static getByName = async (categoryName: string): Promise<Document> => {
        return CategorySchema.findOne({name: categoryName});
    };
    static getById = async (categoryId: string): Promise<Document> => {
        return CategorySchema.findById(categoryId);
    };
    static safeRemove = async (categoryId: string): Promise<Document> => {
        const category = await CategorySchema.findById(categoryId);

        if (category) {
            category.set('status', false);
            return category;
        } else {
            throw new Error('Category not found');
        }
    };
    static remove = async (categoryId: string): Promise<Document> => {
        try {
            return await CategorySchema.findByIdAndRemove(categoryId);
        } catch (e) {
            throw new Error(e);
        }
    };
}


