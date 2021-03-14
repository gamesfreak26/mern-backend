const mongoose = require('mongoose');

const dbConn = "mongodb://localhost/medical_supplies_test"

const connectToDb = function (done) {
    mongoose.connect(dbConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
        (err) => {
            if (err) {
                console.log('Error connecting to database', err);
            } else {
                console.log('Connected to database!');
            }
            done();
        })
}

const disconnectFromDb = function (done) {
    mongoose.disconnect(() => done())
}

module.exports = {
    connectToDb,
    disconnectFromDb
}