/**
 * Module to execute operations in the DataBase
 * @author Nicolas Lopes <nicolasltb123@gmail.com>
 */
import mongodb from 'mongodb';
import 'dotenv/config';

// Connect to DB
const client = new mongodb.MongoClient(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

/**
 * Function to connect to DataBase - MongoDB
 * @return {void} - Return void
 */
async function run_DB() {
    try {
        await client.connect();
        client.db('rest').collection('proof');
        console.log("Connected to DataBase");
    } catch {
        await client.close();
        console.log("Error - Connection closed");
    }
}

/**
 * Function to close the connection to DataBase - MongoDB
 * @return {void} - Return void
 */
async function close_DB() {
    await client.close();
    console.log("Connection to DB closed");
}

/**
 * Function to insert a object into the DataBase - MongoDB
 * @param {Object} obj - The object to be inserted in the DataBase
 * @return {void} - Return void
 */
function insert_DB(obj) {
    if (obj.length > 1) {
        try {
            client.db('rest').collection('proof').insertMany(obj);
            console.log("IPs inserted in the DataBase");
        } catch (e) {
            console.log("Error insering data in the database " + e);
        }
    }
    else {
        client.db('rest').collection('proof').insertOne(obj, (err, res) => {
            if (err) throw err;
            console.log("IP inserted in the DataBase");
        });
    }
}

/**
 * Function to retrieve the data from the DataBase - MongoDB
 * @return {Array} - Array of the database data
 */
async function retrieve_DB() {
    try {
        const db = client.db('rest');
        const result = await db.collection('proof').find({}).toArray();
        return result;
    } catch (e) {
        console.log("Error retrieving database " + e);
    }
}

export { run_DB, close_DB, insert_DB, retrieve_DB };