import {NextApiRequest, NextApiResponse} from "next";
import {Country} from "@/db/models/country";

function handler(req: NextApiRequest, res: NextApiResponse) {
    const country = new Country();

}

export default handler;