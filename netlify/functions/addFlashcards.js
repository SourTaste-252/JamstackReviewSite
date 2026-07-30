const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://lawrenceatie53_db_user:<QWHxrhrFTEIZ7U90>@reviewcluster1.dwxdqsg.mongodb.net/?appName=ReviewCluster1";

exports.handler = async (event) => {

    try {

        const client = new MongoClient(uri);

        await client.connect();

        const db = client.db("demo");

        const collection = db.collection("users");

        const body = JSON.parse(event.body);

        await collection.insertOne({
            name: body.name
        });

        await client.close();

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Saved successfully!"
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