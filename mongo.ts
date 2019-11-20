const mongoose = require('mongoose');

export function connectMongoDB(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MONGO_DB_SERVER, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            mongoose.set('useFindAndModify', false);
            mongoose.set('useCreateIndex', true);
            console.log('Database Connected Successfully')
        })
        .catch((error: any) => console.error('Database Error,', error));
}
