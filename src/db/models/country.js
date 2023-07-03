import {ObjectId} from 'mongodb';
import {Model, Schema} from "@/db/models/model";

export class Country extends Model {
    constructor() {
        super('countries');
    }
}
