    const { MongoClient } = require("mongodb");
const url = "mongodb+srv://emmanuel:baby@cluster0.rhqo6qo.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url);
const dbName = "test"
async function run() {
    try {
        console.log("inside try")
        await client.connect();

        console.log("Connected correctly to server")
    } catch (err) {
        console.log("hubo un error")
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);  