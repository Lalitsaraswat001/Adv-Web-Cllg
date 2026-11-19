const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
const dbName = "studentDB";

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(dbName);

        const student = db.collection("students");

        const insertResult = await student.insertOne({
            name: "ram",
            age: 22,
            course: "MCA"
        });

        console.log("Inserted ID:", insertResult.insertedId);

        const data = await student.find().toArray();
        console.log("Read content:", data);

        const updateResult = await student.updateOne(
            { _id: insertResult.insertedId },
            { $set: { age: 45 } }
        );

        console.log("Updated count:", updateResult.modifiedCount);

        const deleteResult = await student.deleteOne(
            { _id: insertResult.insertedId }
        );
        
        console.log("Delete count:", deleteResult.deletedCount);

    }
    catch (error) {
        console.log("Error:", error);
    }
    finally {
        await client.close();
        console.log("MongoDB connection closed");
    }
}

run();