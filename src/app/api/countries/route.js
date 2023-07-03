import {Country} from "@/db/models/country";
import {connectToDatabase} from "@/db/mongodb";

export async function GET(req) {
    console.log("connecting to db...")
    await connectToDatabase();
    console.log("connected")
    const country = new Country();

    console.log("looking for countries")
    const countries = await country.findAll(null);
    console.log("retrieved countries", countries[0])
    return new Response(countries)
}