const mongoose = require('mongoose');

const  ConnecteDb= async () => {
    try {
        
        const connect = await mongoose.connect("mongodb://127.0.0.1:27017/Project_DashBoard");
        console.log("Database is connected at : ", connect.connection.host, connect.connection.name);
    } catch (error) {
        console.log("Some error is occuring in connection with database.", error);
        process.exit(1);
    }
}
module.exports = ConnecteDb;