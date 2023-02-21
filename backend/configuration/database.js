const mongoose = require("mongoose");

const connect = async () => {
    try {
        //waiting to connect to the mongo database
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MONGO")

    
    //if connection is unsuccessful, an error is caught
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connect;