const dummyData = [
    { a: 1 }, { a: 2 }, { a: 3 }
]

const insertDocuments = function (db, data = dummyData, callback) {
    // Get the documents collection
    const collection = db.collection('users');
    // Insert some documents

    collection.insertMany(data, function (err, result) {
        if (err) {
            console.log("error", error);
        }
        else console.log("Inserted 3 documents into the collection");
        // callback(result);
    });
}

  // insertDocuments(dbName)
  // add middleware , app.use()