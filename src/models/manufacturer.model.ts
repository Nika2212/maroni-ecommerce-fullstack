import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
import { Category } from './category.model';
import { Series } from './series.model';

const MongoManufacturerSchema = new mongoose.Schema({
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
    categories_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    series_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Series'
    }],
    timestamp: {
        type: Date,
        default: new Date().getTime()
    }
});
const ManufacturerSchema = mongoose.model('Manufacturer', MongoManufacturerSchema);

export class Manufacturer {
    public _id?: string;
    public name: string;
    public slug: string;
    public content: string;
    public status: boolean;
    public trash?: boolean;
    public categories?: Category[];
    public series?: Series[];
    public timestamp?: string;

    static readList = async (): Promise<Document[]> => {
        return ManufacturerSchema.find({});
    };
    static create = async (manufacturer: Manufacturer): Promise<Document> => {
        const newManufacturerSchema = new ManufacturerSchema(manufacturer);

        return await newManufacturerSchema.save();
    };
    static read = async (_id: string): Promise<Document> => {
        return ManufacturerSchema.findById(_id);
    };
    static update = async (_id: string, manufacturer: Manufacturer): Promise<Document> => {
        delete manufacturer._id;
        delete manufacturer.trash;
        delete manufacturer.timestamp;

        await ManufacturerSchema.findByIdAndUpdate(_id, manufacturer).exec();
        return ManufacturerSchema.findById(_id);
    };
    static delete = async (_id: string): Promise<Document> => {
        return ManufacturerSchema.findByIdAndRemove(_id);
    };
}


