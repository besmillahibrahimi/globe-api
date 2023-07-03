import {MongoClient, ObjectId} from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI
const DB_NAME = 'globe';

let client;
let db;

export async function connectToDatabase() {
    if (!client || !db) {
        client = new MongoClient(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await client.connect();
        db = client.db(DB_NAME);
    }

    return {client, db};
}

export function getCollection(collectionName) {
    return db.collection(collectionName);
}

export function ObjectIdFromString(id) {
    return new ObjectId(id);
}