const { MongoClient } = require("mongodb");

const uri = "YOUR_MONGODB_CONNECTION_STRING";

exports.handler = async () => {

    try {

        const client = new MongoClient(uri);

        await client.connect();

        const db = client.db("demo");

        const collection = db.collection("texts");

        // Gets the first document in the collection
        const document = await collection.findOne({});

        await client.close();

        return {
            statusCode: 200,
            body: JSON.stringify({
                text: document.content
            })
        };

    } catch (error) {

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: error.message
            })
        };

    }

};
