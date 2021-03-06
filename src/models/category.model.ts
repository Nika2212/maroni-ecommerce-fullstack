import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
import { Manufacturer } from './manufacturer.model';

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
    public _id?: string;
    public name: string;
    public slug: string;
    public content: string;
    public status: boolean;
    public trash?: boolean;
    public manufacturers?: Manufacturer[];
    public timestamp?: string;

    static readList = async (): Promise<Document[]> => {
        return CategorySchema.find({});
    };
    static create = async (category: Category): Promise<Document> => {
        const newCategorySchema = new CategorySchema(category);

        return await newCategorySchema.save();
    };
    static read = async (_id: string): Promise<Document> => {
        return CategorySchema.findById(_id);
    };
    static update = async (_id: string, category: Category): Promise<Document> => {
        delete category._id;
        delete category.trash;
        delete category.timestamp;

        return await CategorySchema.findByIdAndUpdate(_id, category).exec();
    };
    static delete = async (_id: string): Promise<Document> => {
        return CategorySchema.findByIdAndRemove(_id);
    };
}


