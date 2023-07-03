import {getCollection, ObjectIdFromString} from "@/db/mongodb";

export class Model {
    collection

    constructor(colName) {
        this.collection = getCollection(colName);
    }

    async create(country) {
        return this.collection.insertOne(country);
    }

    async findById(id, options) {
        const countryId = ObjectIdFromString(id);

        return this.collection.findOne({_id: countryId}, options);
    }

    async findOne(filter, options) {
        return this.collection.findOne(filter, options);
    }

    async findAll(filter) {
        if (filter) return this.collection.find(filter).toArray()
        else return this.collection.find().toArray();
    }

    async update(id, update, options) {
        const countryId = ObjectIdFromString(id);

        return this.collection.updateOne({_id: countryId}, {$set: update}, options);
    }

    async delete(id) {
        const countryId = ObjectIdFromString(id);
        const {deletedCount} = await this.collection.deleteOne({_id: countryId});
        return deletedCount === 1;
    }
}