const {v4 : uuidv4} = require("uuid")
const ObjectId = require('mongodb').ObjectID;
const {MongoClient} = require('mongodb');

console.log("Running Test Migration")

async function main(){
    const uri  = "YOUR_MONOG_CONNECTION_STRING"
    const client = new MongoClient(uri);
    await client.connect()
    const db = client.db("YOUR_DB_NAME")
    const collection = db.collection("YOU_COLLECIOTN_NAME");


    await collection.updateOne({_id: new ObjectId(projectionOrder._id)}, [
      {
        $set: {
          _id: uuidv4(),
        },
      },
    ])


}

main()
.then(() =>{
  console.log("All Done")
  process.exit(0)
})
.catch(console.error);



