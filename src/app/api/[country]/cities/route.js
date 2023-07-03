import {connectToDatabase} from "../../../../db/mongodb";
import {Country} from "../../../../db/models/country";
import {NextResponse} from "next/server";

export async function GET(req, context) {
    const {country} = context.params;
    await connectToDatabase();

    const countryModel = new Country();
    const cities = await countryModel.findOne({name: country})
    return NextResponse.json(cities.cities)
}