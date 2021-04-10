import {connectToDatabase} from "./_connector";
import {ObjectId} from "mongodb";

export default async (req, res) => {
    const db = await connectToDatabase();

    const record = await db.db('links_db').collection('links_collection').findOne({_id: new ObjectId(req.query.id as string)});

    if (record !== null) {
        return res.redirect(301, record.link);
    }

    return res.redirect(301, '/');
}
