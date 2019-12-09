// Import Dependencies
// const url = require('url');
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const db = process.env.MONGODB_URI;


const UserSchema = require('../../models/User');

// Serverless solution: CHECK: if the model exists, then use it, else create it.
export const User = mongoose.models.User || mongoose.model('User', UserSchema);


// const User = mongoose.model('User');

// Create cached connection variable
// let cachedDb = null;

// A function for connecting to MongoDB,
// taking a single paramater of the connection string
// async function connectToDatabase(uri) {
//   // If the database connection is cached,
//   // use it instead of creating a new connection
//   if (cachedDb) {
//     return cachedDb;
//   }
//
//   // If no connection is cached, create a new one
//   // const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//
// // const db = process.env.MONGODB_URI;
//
//
//
//
//   // Select the database through the connection,
//   // using the database path of the connection string
//   // const db = await client.db(url.parse(uri).pathname.substr(1));
//
//   // Cache the database connection and return the connection
//   cachedDb = db;
//   return db;
// }

mongoose
    .connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    })
    .then(() => console.log('CONNECTED!'))
    .catch(e => console.error('WHOOPS, ERROR: ', e));

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument


  // console.log('CONNECTED');/

  // Select the "users" collection from the database
  // const collection = await db.collection('users');

  // Select the users collection from the database
  // const users = await collection.find({}).toArray();

  User.find()
    //Sort the items
    // .sort({ date: -1 })
    //Send the items in the response, converted to JSON,
    .then(users => res.status(200).json({users}));

  // Respond with a JSON string of all users in the collection
  // res.status(200).json({ users });
};
