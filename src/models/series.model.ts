import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
import { Manufacturer } from './manufacturer.model';
import { Category } from './category.model';

const MongoSeriesSchema = new mongoose.Schema({
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
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    manufacturer_id: {
        type: Schema.Types.ObjectId,
        ref: 'Manufacturer'
    },
    products_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    timestamp: {
        type: Date,
        default: new Date().getTime()
    }
});
const SeriesSchema = mongoose.model('Series', MongoSeriesSchema);

export class Series {
    public _id?: string;
    public name: string;
    public slug: string;
    public content: string;
    public status: boolean;
    public trash?: boolean;
    public manufacturer?: Manufacturer;
    public category?: Category;
    public timestamp?: string;

    static readList = async (): Promise<Document[]> => {
        return SeriesSchema.find({});
    };
    static create = async (series: Series): Promise<Document> => {
        const newSeriesSchema = new SeriesSchema(series);

        return await newSeriesSchema.save();
    };
    static read = async (_id: string): Promise<Document> => {
        return SeriesSchema.findById(_id);
    };
    static update = async (_id: string, series: Series): Promise<Document> => {
        delete series._id;
        delete series.trash;
        delete series.timestamp;

        return await SeriesSchema.findByIdAndUpdate(_id, series).exec();
    };
    static delete = async (_id: string): Promise<Document> => {
        return SeriesSchema.findByIdAndRemove(_id);
    };
}


